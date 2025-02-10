import { FC } from 'react';
import { useEffect, useState } from "react"
import { MarkButton } from "./MarkButton"
import { MarkButtonsProps, MarkType, SnippetState } from "./MarkButton.types"
import { useAddSnippetMarkMutation, useRemoveSnippetMarkMutation, useUpdateSnippetMarkMutation } from "../../app/redux/api/snippetsApi/snippetsApi";
import { useDispatch } from "react-redux";
import { addMark, removeMark, updateMark } from "../../app/redux/slices/snippetsSlice/snippetsSlice";
import { InfoModal } from "../InfoModal/InfoModal";

const MarkButtons: FC<MarkButtonsProps> = ({likes, dislikes, snippetId, userMark}) => {
    const [markId, setMarkId] = useState<number | null>(userMark ? userMark.id : null);
    const [addSnippetMark] = useAddSnippetMarkMutation();
    const [updateSnippetMark] = useUpdateSnippetMarkMutation();
    const [removeSnippetMark] = useRemoveSnippetMarkMutation();

    const [errorMessage, setErrorMessage] = useState<string>('');
    const dispatch = useDispatch();
    
    const [currState, setCurrState] = useState<SnippetState>(
        userMark ? (userMark.type === 'like' ? SnippetState.LIKE : SnippetState.DISLIKE) : SnippetState.DEFAULT
    );

    useEffect(() => {
        setCurrState(userMark ? (userMark.type === 'like' ? SnippetState.LIKE : SnippetState.DISLIKE) : SnippetState.DEFAULT);
        setMarkId(userMark?.id ?? null);
    }, [userMark]);

    const handleMarkClick = async (type: MarkType, state: SnippetState) => {
        try {
            switch(currState) {
                case SnippetState.DEFAULT: {
                    await addSnippetMark({ snippetId, type })
                        .unwrap()
                        .then(response => {
                            dispatch(addMark({ snippetId, mark: response.data }));
                            setMarkId(response.data.id);
                            setCurrState(state);
                        })
                        .catch(error => { throw new Error(error.message) });
                    break;
                }
                case SnippetState.LIKE: {
                    if (!markId) throw new Error("Mark wasn't defined");

                    if (type === 'like') {
                        await removeSnippetMark(markId)
                            .unwrap()
                            .then(() => {
                                dispatch(removeMark({ snippetId, markId }));
                                setMarkId(null);
                                setCurrState(SnippetState.DEFAULT);
                            })
                            .catch(error => { throw new Error(error.message) });
                    } else if (type === 'dislike') {
                        await updateSnippetMark({ snippetId, type })
                            .unwrap()
                            .then(() => {
                                dispatch(updateMark({ snippetId, markId, type }));
                                setCurrState(SnippetState.DISLIKE);
                            })
                            .catch(error => { throw new Error(error.message) });
                    }
                    break;
                }
                case SnippetState.DISLIKE: {
                    if (!markId) throw new Error("Mark wasn't defined");

                    if (type === 'dislike') {
                        await removeSnippetMark(markId)
                            .unwrap()
                            .then(() => {
                                dispatch(removeMark({ snippetId, markId }));
                                setMarkId(null);
                                setCurrState(SnippetState.DEFAULT);
                            })
                            .catch(error => { throw new Error(error.message) });
                    } else if (type === 'like') {
                        await updateSnippetMark({ snippetId, type })
                            .unwrap()
                            .then(() => {
                                dispatch(updateMark({ snippetId, markId, type }));
                                setCurrState(SnippetState.LIKE);
                            })
                            .catch(error => { throw new Error(error.message) });
                    }
                    break;
                }
                default:
                    break;
            }
        } catch(error) {
            if (error instanceof Error) {
                const message = error.message || "Failed to handle mark";
                setErrorMessage(message);
            } else {
                setErrorMessage('Something went wrong');
            }
        }
    }

    return (
        <>
            <MarkButton type='like' value={likes} onClick={handleMarkClick} isOn={currState === SnippetState.LIKE}/>
            <MarkButton type='dislike' value={dislikes} onClick={handleMarkClick} isOn={currState === SnippetState.DISLIKE}/>
            <InfoModal open={!!errorMessage} message={errorMessage} type='error' onClose={() => setErrorMessage('')} />
        </>
    )
}

export {MarkButtons};
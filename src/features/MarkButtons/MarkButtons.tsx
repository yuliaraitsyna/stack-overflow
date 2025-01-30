import { useState } from "react"
import { MarkButton } from "./MarkButton"
import { MarkType, SnippetState } from "./MarkButton.types"
import { useAddSnippetMarkMutation, useRemoveSnippetMarkMutation } from "../../app/redux/api/snippetsApi/snippetsApi";
import { Mark } from "../../entities/Mark/Mark";
import { useDispatch } from "react-redux";
import { addMark, removeMark, updateMark } from "../../app/redux/slices/snippetsSlice/snippetsSlice";

interface MarkButtonsProps {
    likes: number;
    dislikes: number;
    snippetId: number;
    userMark?: Mark | null;
}

const MarkButtons: React.FC<MarkButtonsProps> = ({likes, dislikes, snippetId, userMark}) => {
    const [likesCount, setLikesCount] = useState<number>(likes);
    const [dislikesCount, setDislikesCount] = useState<number>(dislikes);
    const [addSnippetMark] = useAddSnippetMarkMutation();
    const [updateSnippetMark] = useAddSnippetMarkMutation();
    const [removeSnippetMark] = useRemoveSnippetMarkMutation();
    
    const dispatch = useDispatch();

    const [currState, setCurrState] = useState<SnippetState>(userMark ? (userMark.type === 'like' ? SnippetState.LIKE : SnippetState.DISLIKE) : SnippetState.DEFAULT);

    const handleMarkClick = async (type: MarkType, state: SnippetState) => {
        setCurrState(state);

        if(state === SnippetState.DEFAULT) {
            if(currState === SnippetState.LIKE) {
                setLikesCount(likesCount - 1);
            }
            else {
                setDislikesCount(dislikesCount - 1);
            }

            try {
                await removeSnippetMark(userMark!.id)
                .unwrap()
                .catch(error => {throw new Error(error.message)})
                .then(() => {
                    dispatch(removeMark({snippetId, markId: userMark!.id}));
                });
            }
            catch(error) {
                console.error(error);
            }
        }

        if(state === SnippetState.LIKE) {
            if(currState === SnippetState.DISLIKE) {
                setDislikesCount(dislikesCount - 1);
            }

            try {
                await updateSnippetMark({snippetId, type})
                    .unwrap()
                    .catch(error => {throw new Error(error.message)})
                    .then(() => {
                        dispatch(updateMark({snippetId, markId: userMark!.id, type}));
                        setLikesCount(likesCount + 1);
                    });
            }
            catch(error) {
                console.error(error);
            }
        }

        if(state === SnippetState.DISLIKE) {
            if(currState === SnippetState.LIKE) {
                setLikesCount(likesCount - 1);
            }

            try {
                await updateSnippetMark({snippetId, type})
                    .unwrap()
                    .catch(error => {throw new Error(error.message)})
                    .then(() => {
                        dispatch(updateMark({snippetId, markId: userMark!.id, type}));
                    });
            }
            catch(error) {
                console.error(error);
            }

            setDislikesCount(dislikesCount + 1);
        }

        if(currState === SnippetState.DEFAULT) {
            try {
                await addSnippetMark({snippetId, type})
                    .unwrap()
                    .catch(error => {throw new Error(error.message)})
                    .then((mark) => addMark({snippetId, mark: {
                        id: mark.data.id,
                        type,
                        user: mark.data.user
                    }}));

            }
            catch(error) {
                console.error(error);
            }
        }
    }

    return (
        <>
            <MarkButton type='like' value={likesCount} onClick={handleMarkClick} isOn={currState === SnippetState.LIKE}/>
            <MarkButton type='dislike' value={dislikesCount} onClick={handleMarkClick} isOn={currState === SnippetState.DISLIKE}/>
        </>
    )
}

export {MarkButtons};
import { useState } from "react"
import { MarkButton } from "./MarkButton"
import { MarkType, SnippetState } from "./MarkButton.types"
import { useAddSnippetMarkMutation, useRemoveSnippetMarkMutation } from "../../app/redux/api/snippetsApi";
import { Mark } from "../../entities/Mark/Mark";

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

    const [currState, setCurrState] = useState<SnippetState>(userMark ? (userMark.type === 'like' ? SnippetState.LIKE : SnippetState.DISLIKE) : SnippetState.DEFAULT);

    const handleMarkClick = (type: MarkType, state: SnippetState) => {
        setCurrState(state);

        if(state === SnippetState.DEFAULT) {
            if(currState === SnippetState.LIKE) {
                setLikesCount(likesCount - 1);
            }
            else {
                setDislikesCount(dislikesCount - 1);
            }
            removeSnippetMark(userMark!.id);
        }

        if(state === SnippetState.LIKE) {
            if(currState === SnippetState.DISLIKE) {
                setDislikesCount(dislikesCount - 1);

            }
            updateSnippetMark({snippetId, type});
            setLikesCount(likesCount + 1);
        }

        if(state === SnippetState.DISLIKE) {
            if(currState === SnippetState.LIKE) {
                setLikesCount(likesCount - 1);
            }
            updateSnippetMark({snippetId, type});
            setDislikesCount(dislikesCount + 1);
        }

        if(currState === SnippetState.DEFAULT) {
            addSnippetMark({snippetId, type});
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
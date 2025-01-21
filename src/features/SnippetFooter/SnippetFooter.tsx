import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { SnippetProps } from '../../widgets/Snippet/Snippet.types';
import { MarkButton } from '../MarkButtons/MarkButton';
import { CommentButton } from '../CommentButton/CommentButton';
import styles from './SnippetFooter.module.css';
import { MarkAction, MarkType } from '../MarkButtons/MarkButton.types';
import { useAddSnippetMarkMutation } from '../../app/redux/api/snippetsApi';
import { updateSnippet } from '../../app/redux/slice/snippetSlice';

const SnippetFooter: React.FC<SnippetProps> = ({ snippet }) => {
    const [addMark] = useAddSnippetMarkMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateSnippet(snippet));
    }, [snippet, dispatch]);

    const { likes, dislikes } = useMemo(() => {
        return snippet.marks.reduce(
            (acc, mark) => {
                if (mark.type === 'like') acc.likes++;
                else if (mark.type === 'dislike') acc.dislikes++;
                return acc;
            },
            { likes: 0, dislikes: 0 }
        );
    }, [snippet.marks]);

    const commentsCount = snippet.comments;

    const handleMarkClick = (type: MarkType, state: MarkAction) => {
        dispatch(updateSnippet({...snippet, state: state}));

        if(state !== MarkAction.DEFAULT) {
            addMark({ snippetId: snippet.id, type: type });
        } 
    };

    return (
        <div className={styles.footer}>
            <MarkButton type="like" marksNumber={likes} onMarkClick={handleMarkClick} currentState={snippet.state} />
            <MarkButton type="dislike" marksNumber={dislikes} onMarkClick={handleMarkClick} currentState={snippet.state} />
            <CommentButton commentsNumber={commentsCount} />
        </div>
    );
};

export { SnippetFooter };

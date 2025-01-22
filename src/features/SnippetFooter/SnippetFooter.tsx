import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SnippetProps } from '../../widgets/Snippet/Snippet.types';
import { CommentButton } from '../CommentButton/CommentButton';
import styles from './SnippetFooter.module.css';
import { updateSnippet } from '../../app/redux/slice/snippetSlice';
import { MarkButtons } from '../MarkButtons/MarkButtons';
import { RootState } from '../../app/redux/store/store';

const SnippetFooter: React.FC<SnippetProps> = ({ snippet }) => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);

    useEffect(() => {
        dispatch(updateSnippet(snippet));
    }, [snippet, dispatch]);


    const userMark = useMemo(() => {
        if (!user) return null;
        return snippet.marks.find(mark => mark.user.id === user.id);
    }, [snippet.marks, user]);

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

    return (
        <div className={styles.footer}>
            <MarkButtons likes={likes} dislikes={dislikes} snippetId={snippet.id} userMark={userMark}></MarkButtons>
            <CommentButton commentsNumber={commentsCount} />
        </div>
    );
};

export { SnippetFooter };

import styles from './SnippetFooter.module.css';

import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentButton } from '../CommentButton/CommentButton';
import { updateSnippet } from '../../app/redux/slices/snippetsSlice/snippetsSlice';
import { MarkButtons } from '../MarkButtons/MarkButtons';
import { SnippetFooterProps } from './SnippetFooter.types';
import { userSelector } from '../../app/redux/selectors/authSelectors';
import { Mark } from '../../entities/Mark/Mark';

const SnippetFooter: React.FC<SnippetFooterProps> = ({ snippet }) => {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);

    useEffect(() => {
        dispatch(updateSnippet(snippet));
    }, [snippet, dispatch]);

    const getUserMark = (): Mark | null => {
        if (!user) return null;
        const mark = snippet.marks.find(mark => mark.user.id === user.id);
        return mark || null;
    };    

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

    const commentsCount = snippet.comments.length;

    return (
        <div className={styles.footer}>
            <MarkButtons likes={likes} dislikes={dislikes} snippetId={snippet.id} userMark={getUserMark()}></MarkButtons>
            <CommentButton commentsNumber={commentsCount} snippetId={snippet.id} />
        </div>
    );
};

export { SnippetFooter };

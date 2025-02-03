import { MarkButton } from '../MarkButton/MarkButton';
import styles from './SnippetFooter.module.css';

import { SnippetFooterProps } from "./SnippetFooter.types"

const SnippetFooter: React.FC<SnippetFooterProps> = ({likes, dislikes, comments}) => {
    return (
        <div className={styles.footer}>
            <MarkButton type='like' marksNumber={likes} />
            <MarkButton type='dislike' marksNumber={dislikes} />
            <MarkButton type='comment' marksNumber={comments} className={styles.comments} />
        </div>
    )
}

export { SnippetFooter }
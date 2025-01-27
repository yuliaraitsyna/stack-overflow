import styles from './AskQuestionButton.module.css';
import { AskQuestionButtonProps } from './AskQuestionButton.types';

const AskQuestionButton: React.FC<AskQuestionButtonProps> = ({onClick}) => {
    return <button className={styles.button} onClick={() => onClick()}>Ask a question</button>
}

export { AskQuestionButton };
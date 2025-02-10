import { useTranslation } from 'react-i18next';
import styles from './AskQuestionButton.module.css';
import { AskQuestionButtonProps } from './AskQuestionButton.types';

const AskQuestionButton: FC<AskQuestionButtonProps> = ({onClick}) => {
    const {t} = useTranslation();

    return <button className={styles.button} onClick={onClick}>{t('askQuestion')}</button>
}

export { AskQuestionButton };
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import CodeIcon from '@mui/icons-material/Code';
import { AuthButton } from '../../features/AuthButton/AuthButton';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/"><CodeIcon className={styles.icon} /></Link>
            <p className={styles.logo}>CODELANG</p>
            <AuthButton></AuthButton>
        </header>
    )
}

export { Header }
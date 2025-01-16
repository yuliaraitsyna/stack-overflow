import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import CodeIcon from '@mui/icons-material/Code';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/"><CodeIcon className={styles.icon} /></Link>
            <p className={styles.logo}>CODELANG</p>
        </header>
    )
}

export { Header }
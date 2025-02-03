import styles from './AsideMenu.module.css';

import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PeopleIcon from '@mui/icons-material/People';
import { UserMenuItem } from '../../features/UserMenuItem/UserMenuItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/redux/store/store';
import { useState } from 'react';

const AsideMenu = () => {
    const [isOpen, setIsOpen] = useState(true);
    const user = useSelector((state: RootState) => state.auth.user);

    const handleOpenMenu = () => {
        setIsOpen(prev => !prev);
    }

    const menuClassName = isOpen ? styles.asideMenu : styles.asideMenu + ' ' + styles.closed;
    const liClassName = isOpen ? styles.icon : styles.icon + ' ' + styles.closed;

    return (
        <aside className={menuClassName}>
            <nav>
                <ul>
                    <UserMenuItem user={user} isOpen={true} onMenuOpen={handleOpenMenu} />
                    <li className={liClassName}>
                        <HomeIcon />
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className={liClassName}>
                        <PersonIcon />
                        <Link to={'/account'}>My account</Link>
                    </li>
                    <li className={liClassName}>
                        <TextSnippetIcon />
                        <Link to={'/post_snippet'}>Post snippet</Link>
                    </li>
                    <li className={liClassName}>
                        <TextSnippetIcon />
                        <Link to={'/my_snippets'}>My snippets</Link>
                    </li>
                    <li className={liClassName}>
                        <QuestionMarkIcon />
                        <Link to={'/questions'}>Questions</Link>
                    </li>
                    <li className={liClassName}>
                        <PeopleIcon />
                        <Link to={'/users'}>Users</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export { AsideMenu };
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
import { List, ListItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AsideMenu = () => {
    const {t} = useTranslation();
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
                <List>
                    <UserMenuItem user={user} isOpen={true} onMenuOpen={handleOpenMenu} />
                    <ListItem className={liClassName}>
                        <HomeIcon />
                        <Link to={'/'}>
                            <Typography variant="body2">{t('home')}</Typography>
                        </Link>
                    </ListItem>
                    <ListItem className={liClassName}>
                        <PersonIcon />
                        <Link to={'/account'}>
                            <Typography variant="body2">{t('myAccount')}</Typography>
                        </Link>
                    </ListItem>
                    <ListItem className={liClassName}>
                        <TextSnippetIcon />
                        <Link to={'/post_snippet'}>
                            <Typography variant="body2">{t('postSnippet')}</Typography>
                        </Link>
                    </ListItem>
                    <ListItem className={liClassName}>
                        <TextSnippetIcon />
                        <Link to={'/my_snippets'}>
                            <Typography variant="body2">{t('mySnippets')}</Typography>
                        </Link>
                    </ListItem>
                    <ListItem className={liClassName}>
                        <QuestionMarkIcon />
                        <Link to={'/questions'}>
                            <Typography variant="body2">{t('questions')}</Typography>
                        </Link>
                    </ListItem>
                    <ListItem className={liClassName}>
                        <PeopleIcon />
                        <Link to={'/users'}>
                            <Typography variant="body2">{t('users')}</Typography>
                        </Link>
                    </ListItem>
                </List>
            </nav>
        </aside>
    )
}

export { AsideMenu };
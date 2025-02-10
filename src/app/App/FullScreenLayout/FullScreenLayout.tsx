import styles from '../Layout.module.css';
import { Header } from "../../../widgets/Header/Header";
import { FullScreenLayoutProps } from './FullScreenLayout.types';
import { FC } from 'react';

const FullScreenLayout: FC<FullScreenLayoutProps> = ({ children }) => {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                {children}
            </div>
        </>
    );
};

export { FullScreenLayout };
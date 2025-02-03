import React from "react";
import styles from '../Layout.module.css';
import { Header } from "../../../widgets/Header/Header";

interface FullScreenLayoutProps {
    children: React.ReactNode;
}

const FullScreenLayout: React.FC<FullScreenLayoutProps> = ({ children }) => {
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
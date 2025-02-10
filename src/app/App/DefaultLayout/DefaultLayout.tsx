import { AsideMenu } from '../../../widgets/AsideMenu/AsideMenu';
import { Header } from '../../../widgets/Header/Header';
import styles from '../Layout.module.css';

import { Outlet } from "react-router"

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <AsideMenu />
                <Outlet />
            </div>
        </>
    )
}

export { DefaultLayout }
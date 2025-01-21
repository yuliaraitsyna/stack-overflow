import styles from './App.module.css';

import { Outlet } from "react-router"
import { Header } from "../../widgets/Header/Header"
import { AsideMenu } from "../../widgets/AsideMenu/AsideMenu"

const App = () => {
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

export { App }
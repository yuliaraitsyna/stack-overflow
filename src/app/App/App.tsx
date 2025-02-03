import { Outlet } from "react-router"
import { Header } from "../../widgets/Header/Header"

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export { App }
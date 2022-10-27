import clsx from "clsx";
import {Header} from "../components/Header";

export const MainLayout = ({classes, children}) => {
    return (
        <div className={'layout'}>
            <Header />
            <main className={clsx('content', classes?.main)}>{children}</main>
        </div>
    )
}

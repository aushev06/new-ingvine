import clsx from "clsx";
import {Header} from "../components/Header";
import {Categories} from "../components/Categories";
import {useGetCategoriesQuery} from "../redux/api/category";

export const MainLayout = ({classes, children}) => {
    const {data, error, isLoading} = useGetCategoriesQuery()

    if (isLoading) {
        return null;
    }

    return (
        <div>
            <Header/>
            <Categories categories={data?.data}/>
            <main className={clsx('content', classes?.main, 'layout')}>{children}</main>
        </div>
    )
}

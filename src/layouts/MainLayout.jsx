import clsx from "clsx";
import {Header} from "../components/Header";
import {Categories} from "../components/Categories";
import {useGetCategoriesQuery} from "../redux/api/category";

export const MainLayout = ({classes, children, disableCategories}) => {
    const {data, isLoading} = useGetCategoriesQuery()

    return (
        <div>
            <Header/>
            {!disableCategories && !isLoading && (<Categories categories={data?.data}/>)}
            <main className={clsx('content', classes?.main, 'layout')}>{children}</main>
        </div>
    )
}

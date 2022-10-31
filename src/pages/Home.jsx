import {MainLayout} from "../layouts/MainLayout";
import {FoodLayout} from "../layouts/FoodLayout";
import {useGetCategoriesQuery} from "../redux/api/category";

export const Home = () => {
    const {data, isLoading} = useGetCategoriesQuery()

    return (
        <MainLayout>
            <FoodLayout isLoading={isLoading} categories={data?.data}/>
        </MainLayout>
    )
}

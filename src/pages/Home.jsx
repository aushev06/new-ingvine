import {Categories} from "../components/Categories";
import {FoodCard} from "../components/FoodCard";
import {MainLayout} from "../layouts/MainLayout";
import {getFoods} from "../service/foods";
import {useEffect, useState} from "react";
import {FoodLayout} from "../layouts/FoodLayout";
import {useGetCategoriesQuery} from "../redux/api/category";

export const Home = () => {
    const {data, error, isLoading} = useGetCategoriesQuery()

    return (
        <MainLayout>
            <FoodLayout categories={data?.data}/>
        </MainLayout>
    )
}

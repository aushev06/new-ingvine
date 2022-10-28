import {Categories} from "../components/Categories";
import {FoodCard} from "../components/FoodCard";
import {MainLayout} from "../layouts/MainLayout";
import {getFoods} from "../service/foods";
import {useEffect, useState} from "react";
import {FoodLayout} from "../layouts/FoodLayout";

export const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getFoods().then(response => {
            setCategories(response.data);
        })
    }, [])
    return (
        <MainLayout>
            <Categories/>

             <FoodLayout categories={categories} />
        </MainLayout>
    )
}

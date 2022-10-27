import logo from './logo.svg';
import './App.css';
import {FoodCard} from "./components/FoodCard";
import {MainLayout} from "./layouts/MainLayout";
import {Categories} from "./components/Categories";

function App() {
    return (
        <MainLayout>
            <Categories/>

            <div>
                <FoodCard />
            </div>
        </MainLayout>
    );
}

export default App;

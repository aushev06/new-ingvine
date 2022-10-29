import logo from './logo.svg';
import './App.css';
import {FoodCard} from "./components/FoodCard";
import {MainLayout} from "./layouts/MainLayout";
import {Categories} from "./components/Categories";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "./pages/Home";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCartAsync, selectCart} from "./features/cart/cartSlice";

function App() {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);

    console.log(cart);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            localStorage.setItem('token', (new Date().getTime().toString()))
        }

        // dispatch(getCartAsync());

    }, [])

    return (
        <div>
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;

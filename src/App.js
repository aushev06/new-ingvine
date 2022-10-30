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
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCartAsync, selectCart} from "./features/cart/cartSlice";
import {AlertContext} from "./hooks/useAlert";
import {BottomNav} from "./components/BottomNav";

function App() {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);

    const [alertInfo, setAlertInfo] = useState({
        text: '',
        status: 'info',
        opened: false,
    });

    const openAlert = (text, status) => {
        setAlertInfo({
            text,
            status,
            opened: true,
        });
    };

    const closeAlert = () => {
        setAlertInfo((prev) => ({
            ...prev,
            opened: false,
        }));
    };


    useEffect(() => {
        if (!localStorage.getItem('token')) {
            localStorage.setItem('token', (new Date().getTime().toString()))
        }

        dispatch(getCartAsync());

    }, [])

    return (
        <AlertContext.Provider value={{closeAlert, openAlert}}>
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
            </Routes>
            <BottomNav />
        </AlertContext.Provider>
    );
}

export default App;

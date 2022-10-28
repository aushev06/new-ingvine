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
function App() {
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            localStorage.setItem('token', (new Date().getTime().toString()))
        }
    })

    return (
        <div>
            <Routes>
                <Route exact path={'/'} element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;

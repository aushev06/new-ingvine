import './App.css';
import {
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "./pages/Home";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getCartAsync} from "./features/cart/cartSlice";
import {AlertContext} from "./hooks/useAlert";
import {BottomNav} from "./components/BottomNav";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import {Pay} from "./pages/Pay";

function App() {
    const dispatch = useDispatch();

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

            <Snackbar
                TransitionComponent={Slide}
                key={Slide.name}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={alertInfo.opened}
                autoHideDuration={4500}
                onClose={closeAlert}
            >
                <Alert severity={alertInfo.status}>{alertInfo.text}</Alert>
            </Snackbar>

            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
                <Route exact path={'/pay'} element={<Pay/>}/>
            </Routes>
            <BottomNav/>
        </AlertContext.Provider>
    );
}

export default App;

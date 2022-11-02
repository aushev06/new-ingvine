import Typography from "@mui/material/Typography";
import styles from "./SelectCity.module.scss";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {IconButton} from "../IconButton";
import {ListItem} from "@mui/material";
import clsx from "clsx";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    selectCities,
    selectSelectedCity,
    selectShowModal,
    setSelectedCity,
    setShowModal
} from "../../features/city/citySlice";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";

export const SelectCity = () => {
    const isMobile = useMediaQuery('(max-width:768px)');

    const cities = useSelector(selectCities);
    const selectedCity = useSelector(selectSelectedCity);
    const opened = useSelector(selectShowModal);

    const dispatch = useDispatch();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 360,
        bgcolor: '#fff',
        boxShadow: 24,
        p: 4,
        borderRadius: '30px'

    };

    const handleSelectCity = (city) => {
        dispatch(setSelectedCity(city.name))
        localStorage.setItem('city', city.name)
        dispatch(setShowModal(false));
    }


    const modalContent = () => {
        return (
            <>
                <Typography className={styles.title} id="modal-modal-title" variant="h6" component="h2">
                    Выберите свой город
                </Typography>

                <div className={styles.container}>
                    <ul>
                        {
                            cities?.map((city) => {
                                return (
                                    <ListItem onClick={() => handleSelectCity(city)} key={city.slug}
                                              className={clsx(styles.item, city.name.toLowerCase() == selectedCity?.toLowerCase() ? styles.active : '')}>
                                        {city.name}
                                    </ListItem>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
        )
    }

    return (
        <>
            <IconButton onClick={() => dispatch(setShowModal(true))} iconType={'pin'}
                        text={selectedCity || 'Выберите город'}/>
            {
                !isMobile ? (
                    <Modal
                        open={opened}
                        onClose={() => dispatch(setShowModal(false))}
                    >
                        <Box sx={style}>
                            {modalContent()}
                        </Box>
                    </Modal>
                ) : (
                    <Drawer open={opened} onClose={() => setShowModal(false)} anchor={'bottom'}
                            classes={{paper: styles.drawerPaper}}>
                        <div className={styles.drawerContent}>
                            {modalContent()}
                        </div>
                    </Drawer>
                )
            }


        </>
    )
}

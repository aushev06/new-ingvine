import React from 'react';
import './FoodCard.css'
import styles from './FoodCard.module.scss'
import {AddToCartButton} from "../AddToCartButton";

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Modal from '@mui/material/Modal'
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography'
import RadioGroup from '@mui/material/RadioGroup'
import useMediaQuery from '@mui/material/useMediaQuery'


import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {getCartAsync} from "../../features/cart/cartSlice";
import {FoodOptions} from "../FoodOptions";
import {useAlert} from "../../hooks/useAlert";
import {useAddToCartMutation} from "../../redux/api/cart";

export const FoodCardContext = React.createContext({});

export const FoodCard = ({food}) => {
    const {
        name,
        description,
        img,
        properties = [],
        options = [],

    } = food;


    const {openAlert} = useAlert()

    const [
        addToCart,
    ] = useAddToCartMutation()

    const [showDescription, setShowDescription] = useState(false);

    const sliceName = name.slice(0, 40);
    const sliceDescription = description.slice(0, 97);

    const [selectedOptions, setSelectedOptions] = useState([]);
    const isMobile = useMediaQuery('(max-width:768px)');
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [selectedFoodPropertyId, setSelectedFoodPropertyId] = useState(properties[0].id);
    const selectPropertyRef = useRef(properties[0]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [price, setPrice] = useState(selectPropertyRef.current.price);


    const handleSelectFoodPropertyId = (propertyId) => {
        setSelectedFoodPropertyId(propertyId)
        selectPropertyRef.current = properties.find((item) => item.id === propertyId);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobile ? '100%' : 830,
        bgcolor: '#fff',
        boxShadow: 24,
        p: 4,
        borderRadius: '30px'

    };

    const modalContent = () => {
        return (
            <>
                <Typography className={styles.title} id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>

                <div className={styles.container}>
                    <div>
                        <div className={styles.foodCard__image}>
                            <img src={img} alt=""/>
                        </div>
                    </div>

                    <div className={styles.modalDescriptionContainer}>

                        <Typography className={styles.modalDescription} id="modal-modal-description" sx={{mt: 2}}>
                            {description || 'Описание отсутствует'}
                        </Typography>
                    </div>
                </div>

                {properties.length > 1 && (
                    <div className={styles.optionContainer}>
                        <FormControl>
                            <FormLabel className={styles.optionTitle}
                                       id="demo-row-radio-buttons-group-label">Порция</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                {properties.map(property => {
                                    return (
                                        <FormControlLabel
                                            onClick={() => handleSelectFoodPropertyId(property.id)}
                                            checked={property.id === selectedFoodPropertyId}
                                            key={property.id} value={property.id}
                                            control={<Radio/>} label={property.name}
                                        />
                                    )
                                })}

                            </RadioGroup>
                        </FormControl>
                    </div>
                )}
                <FoodOptions handleChangePrice={newPrice => setPrice(newPrice)} food={food}
                             selectedProperty={selectPropertyRef}/>
                <br/>
                <Divider variant="middle"/>

                <div className={styles.buttonContainer}>
                    <AddToCartButton price={price} onAdd={handleAddToCart}/>
                </div>
            </>
        )
    }

    const handleAddToCart = () => {
        // dispatch(addToCartAsync(selectedFoodPropertyId, selectedOptions));
        addToCart({foodPropertyId: selectedFoodPropertyId, quantity: 1, selectedOptions})
        dispatch(getCartAsync());
        openAlert('Товар добавлен в корзину', 'success')
    }

    return (
        <FoodCardContext.Provider value={{selectedOptions, setSelectedOptions}}>
            <div className={styles.foodCard}>
                <div className={styles.foodCard__image}>
                    <img src={img} alt=""/>
                </div>

                <div className={styles.foodCard__title} title={name}>
                    {sliceName} {sliceName.length === 40 ? '...' : ''}
                </div>
                <div className={styles.foodCard__description}>
                    {showDescription ? description || 'Описание отсутсвует' : sliceDescription || 'Описание отсутсвует'} {!showDescription && sliceDescription.length === 97 ?
                    <span className={styles.span} onClick={() => setShowDescription(true)}>...</span> : ''}
                </div>
                <div className={styles.foodCard__footer}>
                    <div>
                        {properties.length > 1 ? 'От' : ''}
                        <span className={styles.foodCard__footer__price}>
                       &nbsp;{properties[0].price} Р
                   </span>
                    </div>

                    <div className={styles.foodCard__footer_action}>
                        <AddToCartButton
                            onAdd={properties.length > 2 || options.length ? handleOpen : handleAddToCart}/>
                    </div>
                </div>
            </div>

            {!isMobile ? (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {modalContent()}
                    </Box>
                </Modal>
            ) : (
                <Drawer open={open} onClose={handleClose} anchor={'bottom'} classes={{paper: styles.drawerPaper}}>
                    <div className={styles.drawerContent}>
                        {modalContent()}
                    </div>
                </Drawer>
            )}

        </FoodCardContext.Provider>

    )
}

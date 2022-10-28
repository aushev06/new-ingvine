import './FoodCard.css'
import {Button} from "../Button";
import styles from './FoodCard.module.scss'
import {AddToCartButton} from "../AddToCartButton";
import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Modal,
    Radio,
    RadioGroup,
    Typography,
    useMediaQuery
} from "@mui/material";
import {useState} from "react";

export const FoodCard = ({food}) => {
    const {
        name,
        description,
        slug,
        category_id,
        img,
        category,
        properties = [],
        foodInfo,
        options = [],

    } = food;

    const isMobile = useMediaQuery('(max-width:768px)');

    const [open, setOpen] = useState(false);
    const [selectedFoodPropertyId, setSelectedFoodPropertyId] = useState(properties[0].id);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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

    const handleAddToCart = () => {
        alert('Товар добавлен в корзину')
    }

    return (
        <>
            <div className={styles.foodCard}>
                <div className={styles.foodCard__image}>
                    <img src={img} alt=""/>
                </div>

                <div className={styles.foodCard__title}>
                    {name}
                </div>
                <div className={styles.foodCard__description}>
                    {description || 'Описание отсутсвует'}
                </div>
                <div className={styles.foodCard__footer}>
                    <div>
                        {properties.length > 1 ? 'От' : ''}
                        <span className={styles.foodCard__footer__price}>
                       &nbsp;{properties[0].price} Р
                   </span>
                    </div>

                    <div className={styles.foodCard__footer_action}>
                        <AddToCartButton onAdd={properties.length > 2 ? handleOpen : handleAddToCart}/>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.container}>
                        <div>
                            <Typography className={styles.title} id="modal-modal-title" variant="h6" component="h2">
                                {name}
                            </Typography>
                            <Typography className={styles.modalDescription} id="modal-modal-description" sx={{mt: 2}}>
                                {description || 'Описание отсутствует'}
                            </Typography>

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
                                                    onClick={() => setSelectedFoodPropertyId(property.id)}
                                                    checked={property.id === selectedFoodPropertyId}
                                                    key={property.id} value={property.id}
                                                    control={<Radio/>} label={property.name}
                                                />
                                            )
                                        })}

                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <div className={styles.buttonContainer}>
                                <AddToCartButton onAdd={handleAddToCart}/>
                            </div>

                        </div>
                        <div>
                            <div className={styles.foodCard__image}>
                                <img src={img} alt=""/>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>

    )
}

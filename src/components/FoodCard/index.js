import './FoodCard.css'
import {Button} from "../Button";
import styles from './FoodCard.module.scss'
import {AddToCartButton} from "../AddToCartButton";
import {Box, FormControl, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, Typography} from "@mui/material";
import {useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 830,
    bgcolor: '#fff',
    boxShadow: 24,
    p: 4,
    borderRadius: '30px'

};

export const FoodCard = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <div className={styles.foodCard}>
                <div className={styles.foodCard__image}>
                    <img src="/images/img1.jpg" alt=""/>
                </div>

                <div className={styles.foodCard__title}>
                    Шаурма Супер
                </div>
                <div className={styles.foodCard__description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut corporis delectus dolore ea
                    eveniet harum impedit ipsum officia, quisquam quos voluptate voluptatibus. Accusamus aliquid dolores
                    id magnam nisi? Hic!
                </div>
                <div className={styles.foodCard__footer}>
                    <div>
                        От
                        <span className={styles.foodCard__footer__price}>
                       &nbsp;320 Р
                   </span>
                    </div>

                    <div className={'foodCard__footer__action'}>
                        <AddToCartButton/>
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
                               Картофель на хорошем мангале
                           </Typography>
                           <Typography className={styles.modalDescription} id="modal-modal-description" sx={{ mt: 2 }}>
                               Поребрик или бордюр? подъезд или парадная? ну и, конечно же, шаверма vs. Шаурма.
                               Петербуржцы и москвичи привыкли называть одни и те же вещи по-разному, но, наверняка.
                           </Typography>

                           <div className={styles.optionContainer}>
                               <FormControl>
                                   <FormLabel className={styles.optionTitle} id="demo-row-radio-buttons-group-label">Порция</FormLabel>
                                   <RadioGroup
                                       row
                                       aria-labelledby="demo-row-radio-buttons-group-label"
                                       name="row-radio-buttons-group"
                                   >
                                       <FormControlLabel value="6шт" control={<Radio />} label="6шт" />
                                       <FormControlLabel value="9шт" control={<Radio />} label="9шт" />
                                       <FormControlLabel value="14шт" control={<Radio />} label="14шт" />
                                   </RadioGroup>
                               </FormControl>
                           </div>

                           <div className={styles.buttonContainer}>
                               <AddToCartButton />
                           </div>

                       </div>
                       <div>
                           <div className={styles.foodCard__image}>
                               <img src="/images/img1.jpg" alt=""/>
                           </div>
                       </div>
                   </div>
                </Box>
            </Modal>
        </>

    )
}

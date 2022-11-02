import {useContext, useState} from "react";
import styles from "../FoodCard/FoodCard.module.scss";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Checkbox from "@mui/material/Checkbox";

import {FoodCardContext} from "../FoodCard";
import {IncrementOrDecrementButton} from "../IncrementOrDecrementButton";

export const FoodOptions = ({food, selectedProperty, setCartItem, onSend, handleChangePrice}) => {
    const {selectedOptions, setSelectedOptions, setPrice} = useContext(FoodCardContext)
    const [setError] = useState(null);


    const indexById = (tempItems) => {
        let items = [];

        tempItems.map(item => {
            items[item.id] = item
        });

        return items;
    }

    const selectOption = (option) => {
        if (Object.values(selectedOptions).find(item => parseInt(option.id) === parseInt(item.id))) {
            const tempItems = Object.values(selectedOptions).filter(item => parseInt(item.id) !== parseInt(option.id));
            const tempOptions = indexById(tempItems);
            setSelectedOptions(tempOptions);
            checkPrice(tempOptions)
        } else {
            const tempOptions = {
                ...selectedOptions,
                [option.id]: {
                    quantity: 1,
                    id: option.id,
                    optionCategoryId: option.option_category_id,
                    price: option.price
                }
            };
            setSelectedOptions(tempOptions)
            checkPrice(tempOptions);
        }
    }


    const incrementOption = id => {
        const tempOptions = {
            ...selectedOptions,
            [id]: {
                quantity: selectedOptions[id].quantity + 1,
                id: id,
                price: selectedOptions[id].price,
                optionCategoryId: selectedOptions[id].optionCategoryId,
            }
        }
        setSelectedOptions(tempOptions);

        checkPrice(tempOptions)

    }


    const decrementOption = (id) => {
        if (selectedOptions[id].quantity - 1 === 0) {
            return
        }

        const tempOptions = {
            ...selectedOptions,
            [id]: {
                quantity: selectedOptions[id].quantity - 1,
                id,
                price: selectedOptions[id].price,
                optionCategoryId: selectedOptions[id].optionCategoryId,
            }
        };
        setSelectedOptions(tempOptions)

        checkPrice(tempOptions)

        if (selectedOptions[id].quantity === 0) {
            const tempOptions = Object.values(selectedOptions).filter(item => item.id !== id)
            setSelectedOptions(tempOptions)
        }

    }

    const checkPrice = (actualOptions) => {
        let tempPrice = 0;
        Object.values(actualOptions).map(option => {
            tempPrice += option.price * option.quantity;
        });

        setPrice(tempPrice + selectedProperty.current.price);
        handleChangePrice(tempPrice + selectedProperty.current.price)

    }


    const selectRadioItem = (option) => {
        if (selectedOptions[option.id]) {
            return;
        }

        const tempItems = Object.values(selectedOptions).filter(item => {
            return parseInt(item.optionCategoryId) !== parseInt(option.option_category_id);
        })

        const items = indexById(tempItems);


        setSelectedOptions({
            ...items,
            [option.id]: {
                quantity: 1,
                id: option.id,
                price: option.price,
                optionCategoryId: option.option_category_id
            }
        })


    }

    const send = () => {
        const requiredOption = food.options.find(item => item.required === true);

        if (requiredOption) {
            const requiredOptionsCategoryId = requiredOption.items[0].option_category_id;

            const check = Object.values(selectedOptions).some(item => requiredOptionsCategoryId === item.optionCategoryId);

            // console.log(check)

            if (false === check) {
                // window.M.toast({html: 'Выберите обязательные опции!'})
                setError('Выберите обязательные опции!');

            }
        }


        // setCartItem(food.selectProperty.id, options)
        // modal.close();
        // setOptions([])
        // onSend();

    }

    if (!food?.options?.length) {
        return null;
    }

    return (
        <div>
            {
                food.options.map((foodOption, key) => {
                    return (
                        <div key={key} className={styles.optionContainer}>
                            <FormControl>
                                <FormLabel className={styles.optionTitle}
                                           id={"group_-" + key}>{foodOption.categoryName}</FormLabel>
                                <RadioGroup name={'group_' + key} aria-labelledby={"group_" + key}>
                                    {foodOption.items.map((item, key) => {

                                        return (
                                            <div key={item.id} className={styles.property}>
                                                <FormControlLabel
                                                    value={item.id}
                                                    className={styles.font}
                                                    key={item.id}
                                                    onChange={item.multiplier === 1 && foodOption.required === true ? () => {
                                                    } : selectOption.bind(null, item)}
                                                    onClick={
                                                        item.multiplier === 1 && foodOption.required === true
                                                            ? selectRadioItem.bind(null, item)
                                                            : () => {
                                                            }
                                                    }
                                                    control={item.multiplier === 1 && foodOption.required === true ?
                                                        <Radio/> : <Checkbox/>} label={<span>{item.name} <span
                                                    className={styles.propertyPrice}>+{item.price}Р</span></span>}
                                                />
                                                {
                                                    selectedOptions[item.id] && item.multiplier > 1 && (

                                                        <IncrementOrDecrementButton
                                                            quantity={selectedOptions[item.id].quantity}
                                                            onDecrement={() => decrementOption(item.id)}
                                                            onIncrement={() => incrementOption(item.id)}
                                                        />
                                                    )
                                                }

                                            </div>
                                        )
                                    })}
                                </RadioGroup>
                            </FormControl>

                        </div>
                    )
                })
            }

        </div>
    )
}

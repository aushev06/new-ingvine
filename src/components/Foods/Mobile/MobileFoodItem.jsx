import React, {useState} from 'react';

const MobileFoodItem = ({name, description, img, properties, selectFood, weight, food}) => {
    const [hideButton, setHideButton] = useState(true);
    const [idxFood, setIdxFood] = useState(0);
    return (
        <li className={"MobileRestaurantPageMenuItem_root"}>
            <div
                className={"UIMagicalImage_root MobileRestaurantPageMenuItem_coverRoot UIMagicalImage_loaded"}>
                <div
                    className={"lazyload UIMagicalImage_image MobileRestaurantPageMenuItem_coverImage"}
                    style={{backgroundImage: `url('${img}')`}}></div>
            </div>
            <div className={"MobileRestaurantPageMenuItem_details"}>
                <h3 className={"MobileRestaurantPageMenuItem_name MobileRestaurantPageMenuItem_common"}>{name}
                    <span
                        className={"MobileRestaurantPageMenuItem_weight MobileRestaurantPageMenuItem_common"}>{weight || ''}</span>
                </h3>

                <div className={"MobileRestaurantPageMenuItem_statusbox"}>
                    <div className={"MobileRestaurantPageMenuItem_priceBox"}>
                        <div
                            className={"MobileRestaurantPageMenuItem_price MobileRestaurantPageMenuItem_common"}>
                            {properties[idxFood]?.price} Р
                        </div>
                    </div>
                </div>
            </div>

            <div className={"MobileRestaurantPageMenuItem_descbox"}>
                <div
                    className={`MobileRestaurantPageMenuItem_description MobileRestaurantPageMenuItem_overflowed ${!hideButton ? ' max-h-100' : ''}`}>
                    {description}
                </div>
                {description.length > 84 ? hideButton
                    ?
                    <span
                        className={"MobileRestaurantPageMenuItem_expandButton MobileRestaurantPageMenuItem_commonDesc"}
                        onClick={(e) => {
                            setHideButton(!hideButton)
                            e.stopPropagation()
                        }}>
                        ещё
                    </span>
                    :
                    <span
                        className={"MobileRestaurantPageMenuItem_expandButton MobileRestaurantPageMenuItem_commonDesc"}
                        onClick={(e) => {
                            setHideButton(!hideButton)
                            e.stopPropagation()
                        }} style={{position: 'relative'}}>
                        скрыть
                    </span>
                    : null
                }
            </div>

            {properties.length > 1 &&
            <div className={"MobileRestaurantPageMenuItem_descbox"} style={{marginLeft: 0, marginRight: 0}}>
                <div className="product__weight">
                    <ul className="weight__list">
                        {
                            properties.map((item, idx) => {
                                return (
                                    <li onClick={(e) => {
                                        setIdxFood(idx)
                                        e.stopPropagation();
                                    }} key={"foodProp-" + idx}
                                        className={`${idx === idxFood ? 'active' : ''} weight__item`}>{item.name}</li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>

            }

            <div onClick={() => selectFood(food, properties[idxFood].id)} className="site-button site-button--outline site-button--add">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"></path>
                </svg>
                <span>Добавить</span>
            </div>
        </li>
    )
}

export default MobileFoodItem;

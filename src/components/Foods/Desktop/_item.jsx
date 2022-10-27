import React, {useEffect, useState} from "react";

export default ({food, selectFood}) => {
    const [idxFood, setIdxFood] = useState(0);
    return (
        <div className="RestaurantPageMenuCategory_item">
            <div className="RestaurantPageMenuCategory_itemWrapper">
                <div className={"RestaurantPageMenuItem_root"}>
                    <div></div>
                    <div className={"RestaurantPageMenuItem_topLine"}>
                        <div className={"RestaurantPageMenuItem_priceWrapper"}>
                            <div className={"UILoader_root"}>
                                <div className="UILoader_content">
                                    <div
                                        className="RestaurantPageMenuItem_priceAndCountWrapper"><span
                                        className="RestaurantPageMenuItem_price">{`${food.items[idxFood]?.price}`} ₽</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className={"RestaurantPageMenuItem_title"}>{food.name}</h3>
                        <span
                            className={"RestaurantPageMenuItem_weight"}>&nbsp;{food.weight || ''}</span>
                        <p className={'RestaurantPageMenuItem_description'}>
                            {food.description}
                        </p>
                    </div>
                    <div className={"RestaurantPageMenuItem_pictureContainer"}>
                        <div
                            className={"RestaurantPagePromoBadge_root RestaurantPageMenuItem_pictureBadge"}>

                        </div>

                        <div
                            className={"UIMagicalImage_root RestaurantPageMenuItem_picture UIMagicalImage_loaded"}>
                            <div
                                className={"lazyload UIMagicalImage_image RestaurantPageMenuItem_pictureImage"}
                                style={{backgroundImage: `url('${food.img}')`}}

                            >
                            </div>
                        </div>

                        {food.items.length > 1 &&

                        <div className="product__weight">
                            <ul className="weight__list">
                                {
                                    food.items.map((item, idx) => {
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
                        }
                        <div onClick={() => selectFood(food, food.items[idxFood].id)} className="site-button site-button--outline site-button--add">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"></path>
                            </svg>
                            <span>Добавить</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

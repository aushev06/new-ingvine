import React from 'react';
import FoodItem from "./MobileFoodItem";


const Mobile = ({categories, selectFood}) => {
    return (
        <div className={"Mobile"}>
            {categories.map((category) => {
                return (
                    <ul className={"MobileRestaurantPageMenuList_listRoot scrollspy"} id={category.slug}
                        key={`category-${category.id}`}>
                        <li className={"MobileRestaurantPageMenuList_category"}>
                            <div>
                                <div className={"MobileRestaurantPageMenuCategory_root"}>
                                    <div className={"MobileRestaurantPageMenuCategory_header"}>
                                        <div className={"MobileRestaurantPageMenuCategory_label"}>
                                            <div className={"MobileRestaurantPageMenuCategory_titleAndCount"}>
                                                <h2 className={"MobileRestaurantPageMenuCategory_name"}>{category.name}</h2>
                                                <div
                                                    className={"MobileRestaurantPageMenuCategory_count"}>{category.products_aggregate.aggregate.count}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className={"MobileRestaurantPageMenuCategory_items"}>
                                        {category?.products.map((food) => {
                                            return (
                                                <FoodItem {...food} food={food} key={"food-" + food.id}
                                                          selectFood={selectFood}
                                                          properties={food.items}
                                                          description={''}
                                                />
                                            )
                                        })}

                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                )
            })}

        </div>
    )
}

export default Mobile;

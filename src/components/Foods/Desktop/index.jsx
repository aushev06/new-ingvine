import React from 'react'
import FoodItem from './_item';

const Desktop = ({categories, selectFood}) => {
    return (
        <div className={"Desktop"}>
            {categories?.map((item) => {
                return (<div id={item.slug} className={"section scrollspy"} key={"category - " + item.id}>
                    <div className={"RestaurantPageMenuCategory_root"}>
                        <div className={"RestaurantPageMenuCategory_header"}>
                            <div className={"RestaurantPageMenuCategory_headerContent"}>
                                <div className={"RestaurantPageMenuCategory_titleWrapper"}>
                                    <h2 className="RestaurantPageMenuCategory_title">{item.name}</h2>
                                    <span className="RestaurantPageMenuCategory_count">{item.products_aggregate.aggregate.count}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="RestaurantPageMenuCategory_items">
                        {item.products.map((food) => {
                            return (
                                <FoodItem key={"food-" + food.id} food={food} selectFood={selectFood} />
                            )
                        })}
                    </div>
                </div>)
            })}


        </div>
    )
}

export default Desktop;

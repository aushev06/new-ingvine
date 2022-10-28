import {Grid, Typography} from "@mui/material";
import {FoodCard} from "../components/FoodCard";
import {CardsList} from "./CardListLayout";

export const FoodLayout = ({categories}) => {
    return (
        <div>
            {
                categories.map(category => {
                    return (
                        <div key={category.id}>
                            <Typography variant={'h6'}>
                                {category.name}
                            </Typography>
                            <CardsList>
                                {category.foodProperties.map((food) => {
                                    return (
                                        <Grid key={food.id} item xs={4}>
                                            <FoodCard
                                                food={food}
                                                key={food.id}
                                            />
                                        </Grid>
                                    )
                                })}
                            </CardsList>
                        </div>
                    )
                })
            }
        </div>
    )
}

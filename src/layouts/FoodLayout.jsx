import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography'
import {FoodCard} from "../components/FoodCard";
import {CardsList} from "./CardListLayout";
import styles from './ChefList.module.scss'
import {CardSkeleton} from "../components/FoodCard/Skeleton";

export const FoodLayout = ({categories, isLoading}) => {

    if (isLoading) {
        return (
            <div>
                <CardsList>
                    {Array.from({length: 8}, (_, item) => (
                        <div key={item} className={styles.chefsSkeleton}>
                            <CardSkeleton key={item}/>
                        </div>
                    ))}
                </CardsList>
            </div>
        )
    }

    return (
        <div>
            {
                categories.map(category => {
                    return (
                        <div className={styles.items} id={category.slug} key={category.id}>
                            <Typography variant={'h6'} style={{fontSize: 36}}>
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

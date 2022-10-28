import {Button, useMediaQuery} from "@mui/material";
import {Icon} from "../Icon";
import styles from './AddToCartButton.module.scss';

export const AddToCartButton = ({onAdd}) => {
    const isMobile = useMediaQuery('(max-width:768px)');

    return (
        <Button onClick={onAdd} className={styles.root} variant="outlined" startIcon={isMobile ? null : <Icon type={'plus'}/>}>
            {isMobile ? <Icon type={'plus'} /> : 'Добавить' }
        </Button>
    )
}

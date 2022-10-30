import Button from "@mui/material/Button";
import styles from './LoginButton.module.scss';

export const LoginButton = () => {
    return (
        <Button className={styles.root} variant="outlined">
            Войти
        </Button>
    )
}

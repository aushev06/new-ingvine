import {DeliveryInfo} from "../components/DeliveryInfo";
import {MainLayout} from "../layouts/MainLayout";

export const Delivery = () => {
    return (
        <MainLayout disableCategories={true}>
            <DeliveryInfo/>
        </MainLayout>
    )
}

import CarDetails from "@/components/CarDetails";
import {Metadata} from "next";
import {getCarById} from "@/services/cars.service";
import StripePayment from "@/components/StripePayment";

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    const {id} = params;
    try {
        const car = await getCarById(id);
        return {
            title: `${car.name}| Fast24`,
        }
    } catch (e) {
        return {
            title: `Car Details | Fast24`,
        }

    }

}
const CarDetailsPage = ({params}: { params: { id: string } }) => {
    return (
        <>
            <CarDetails params={params}/>
            <StripePayment/>
        </>

    )
}

export default CarDetailsPage;
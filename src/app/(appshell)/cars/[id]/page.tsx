import CarDetails from "@/components/CarDetails";
import {Metadata} from "next";
import {getCarById} from "@/services/cars.service";

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    const {id} = params;
    const car = await getCarById(id);
    return {
        title: `${car.name} | Fast24`,
    }
}
const CarDetailsPage = ({params}: { params: { id: string } }) => {
    return (
        <CarDetails params={params}/>
    )
}

export default CarDetailsPage;
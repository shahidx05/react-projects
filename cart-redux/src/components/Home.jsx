import Card from "./Card";
import foodData from "../data/foodData";

export const Home = () => {
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {foodData.map((food) => (
                <Card key={food.id} food={food} />
            ))}
        </div>
    );
};
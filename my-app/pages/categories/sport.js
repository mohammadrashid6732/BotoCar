import CartList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";

const Sport = () => {
  const sportCars = carsData.filter((car) => car.category === "sport");

  return (
    <div>
      <CartList data={sportCars} />
    </div>
  );
};

export default Sport;

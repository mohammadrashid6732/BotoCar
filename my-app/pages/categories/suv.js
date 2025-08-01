import CartList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";

const Suv = () => {
  const suvCars = carsData.filter((car) => car.category === "suv");

  return (
    <div>
      <CartList data={suvCars} />
    </div>
  );
};

export default Suv;

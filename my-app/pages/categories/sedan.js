import CartList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";

const Sedan = () => {
  const sedanCars = carsData.filter((car) => car.category === "sedan");
  return (
    <div>
      <CartList data={sedanCars} />
    </div>
  );
};

export default Sedan;

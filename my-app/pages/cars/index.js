import Categories from "../../components/module/Categories";
import SearchPrice from "../../components/module/SearchPrice";
import CarsPage from "../../components/templates/CarsPage";
import carsData from "../../data/carsData";

const Details = () => {
  return (
    <div>
      <SearchPrice />
      <Categories data={carsData} />
      <CarsPage data={carsData} />
    </div>
  );
};

export default Details;

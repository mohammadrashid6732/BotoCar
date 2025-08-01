import AllButton from "../components/module/AllButton";
import Categories from "../components/module/Categories";
import SearchPrice from "../components/module/SearchPrice";
import CarsPage from "../components/templates/CarsPage";
import carsData from "../data/carsData";

function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchPrice />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </div>
  );
}

export default Index;

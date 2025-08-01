import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./SearchPrice.module.css";
const SearchPrice = () => {
  const router = useRouter();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      console.log("Please Enter minimum and maximum price");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input
          type="number"
          placeholder="Enter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchHandler()}
        />
        <input
          type="number"
          placeholder="Enter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchHandler()}
        />
      </div>
      <div className={styles.searchButton}>
        <button onClick={searchHandler}>SEARCH</button>
      </div>
    </div>
  );
};

export default SearchPrice;

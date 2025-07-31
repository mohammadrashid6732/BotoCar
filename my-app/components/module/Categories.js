import styles from "./Categories.module.css";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";
import Link from "next/link";

const Categories = () => {
  return (
    <div className={styles.container}>
      <Link href="/categories/sedan">
        <div>
          <span>Sedan</span>
          <Sedan />
        </div>
      </Link>
      <Link href="/categories/suv">
        <div>
          <span>Suv</span>
          <Suv />
        </div>
      </Link>
      <Link href="/categories/sport">
        <div>
          <span>Sport</span>
          <Sport />
        </div>
      </Link>
      <Link href="/categories/hatchback">
        <div>
          <span>Hatchback</span>
          <Hatchback />
        </div>
      </Link>
    </div>
  );
};

export default Categories;

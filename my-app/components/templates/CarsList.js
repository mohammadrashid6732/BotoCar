import { useRouter } from "next/router";
import styles from "./CarsList.module.css";
import Back from "../icons/Back";
import Card from "../module/Card";
import { useEffect } from "react";

const CarsList = ({ data }) => {
  console.log(data);
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        router.back();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CarsList;

import { useNavigate } from "react-router-dom";
import styles from "./css/foodItem.module.css";

export default function FoodItem({ food }) {
  const navigate = useNavigate();

  const handleViewRecipe = () => {
    navigate(`/recipe/${food.id}`); // Make sure each food item has a unique `id`
  };

  return (
    <div className={styles.foodOuter}>
      <img src={food.image} className={styles.foodImg} />
      <p className={styles.foodTitle}>{food.title}</p>
      <button className={styles.foodBtn} onClick={handleViewRecipe}>
        View recipe
      </button>
    </div>
  );
}

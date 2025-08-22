import FoodItem from "./FoodItem";
import styles from "./css/foodItem.module.css";
export default function FoodList({ foodData }) {
  return (
    <div className={styles.foodMain}>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}

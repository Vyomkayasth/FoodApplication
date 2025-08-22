import styles from "./css/recipe.module.css";

export default function ItemList({ foodDetails }) {
  if (!foodDetails || !foodDetails.extendedIngredients) {
    return <p className={styles.loading}>Loading recipe...</p>;
  }
  return (
    <div className={styles.ItemIngreContainer}>
      {foodDetails.extendedIngredients?.map((item) => (
        <div key={item.id} className={styles.Ingrecard}>
          <img
            className={styles.Ingreimage}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
          />
          <h3 className={styles.Ingrename}>{item.name}</h3>
          <h3 className={styles.Ingreamount}>
            {item.amount} {item.unit}
          </h3>
        </div>
      ))}
    </div>
  );
}

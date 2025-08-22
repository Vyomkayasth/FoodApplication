import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./css/recipe.module.css";
import ItemList from "./ItemList";

export default function RecipeDetail() {
  let startTime = new Date().getTime();
  const [foodDetails, setFoodDetails] = useState({});
  const hasFetched = useRef(false); // only for not geting object twice // we can also get rid of this code
  const { id } = useParams();
  const navigate = useNavigate();
  const URL = `https://api.spoonacular.com/recipes/${id}/information`;
  const API_KEY = "a61be191bdd74bf498f7219440cf8303";

  const handleClose = () => {
    navigate("/"); // Navigate back to the main food list
  };
  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodDetails(data);
      console.log(data);
    }
    fetchFood();
  }, [id]);
  if (!foodDetails || !foodDetails.extendedIngredients) {
    return <p className={styles.loading}>Loading recipe...</p>;
  }
  console.log(startTime);
  return (
    <>
      <div className={styles.recipe_container}>
        <button className={styles.close_btn} onClick={() => navigate("/")}>
          ×
        </button>
        <h1 className={styles.recipe_title}>{foodDetails.title}</h1>
        <img
          src={foodDetails.image}
          alt={foodDetails.title}
          className={styles.recipe_image}
        />

        <div
          className={styles.recipe_summary}
          dangerouslySetInnerHTML={{ __html: foodDetails.summary }}
        />

        <h1>Ingredients</h1>
        {/* <ul className={styles.ingredient_list}>
          {foodDetails.extendedIngredients?.map((item) => (
            <li key={item.id}>{item.original}</li>
          ))}
        </ul> */}
        <ItemList foodDetails={foodDetails} />

        <h1>Instructions</h1>
        <div
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: foodDetails.instructions || "No instructions available.",
          }}
        />
      </div>
    </>
  );
}

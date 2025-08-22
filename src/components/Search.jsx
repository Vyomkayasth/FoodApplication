import { useState } from "react";
import styles from "./css/search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "a61be191bdd74bf498f7219440cf8303";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  // Syntax of useEffect Hook
  // useEffect(() => {}, [query]);

  async function fetchFood() {
    const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(data.results);
    setFoodData(data.results);
  }

  return (
    <div className={styles.searchContainer}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className={styles.searchInput}
      />
      <button onClick={fetchFood} className={styles.showBtn}>
        Show
      </button>
    </div>
  );
}

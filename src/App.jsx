// import "./App.css";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import RecipeDetail from "./components/RecipeDetail";
import Search from "./components/Search";
function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search foodData={foodData} setFoodData={setFoodData} />
                <FoodList foodData={foodData} />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

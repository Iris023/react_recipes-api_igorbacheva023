import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4'
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const MY_ID = "860f09fa";
  const MY_KEY = "8cdb43b2fd284260939980c38e69e086";

  const [inputSearch, setInputSearch] = useState("");
  const [recipesList, setRecipesList] = useState([]);
  const [chosenIngredient, setChosenIngredient] = useState("avocado");

  useEffect(() => {
    getRecipes(); 
  }, [chosenIngredient])

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${chosenIngredient}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setRecipesList(data.hits);
    console.log(data);
  }

  const myRecipeSearch = (e) => {
    setInputSearch(e.target.value);
    
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setChosenIngredient(inputSearch);
  }

  return (
    <div className="App">

      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className="container ">
        <form onSubmit={finalSearch}>
          <input className="inputField" placeholder="Search..." value={inputSearch}  onChange={myRecipeSearch}>
          </input>
          
        <button onClick={finalSearch} className="searchBtn">
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" className="searchIcon" alt="pic"/>
        </button>
        </form>
      </div>

      <div className="recipes">
        {recipesList.map((element, id) => (
          <MyRecipesComponent label={element.recipe.label}
            image={element.recipe.image}
            cal={element.recipe.calories}
            key={id}
            ingredients={element.recipe.ingredientLines}
            weight={element.recipe.totalWeight}
            link= {element.recipe.shareAs}/>
        ))}
      </div>

    </div>
  );
}

export default App;

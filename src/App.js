import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Axios from 'axios';

function App() {
  
  const [search, setSearch]= useState("Cake");
  const [recipe, setRecipe]=useState([]);

  const APP_ID= "2fe48bd2";
  const APP_KEY = "2573bf99cd594382d8aee44041cd8115";

   useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () =>{
    const result = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
    setRecipe(result.data.hits);

  };
  const onInputChange=(e)=>{
   setSearch(e.target.value);
  };
  const onSearchClick =()=>{
    getRecipes();
  }
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <div className="container">
      <Recipe recipe={recipe}/>
      </div>
     
    </div>
  );
}

export default App;

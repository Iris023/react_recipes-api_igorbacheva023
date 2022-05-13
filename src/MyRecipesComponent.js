function MyRecipesComponent ({label, image, cal, ingredients, weight, servings, link}) {

return(
    <div className="recipe_content">
        <h2>{label}</h2>
        <img src={image} alt="pic" className="recipe_img" />
        <p>Servings: {servings} </p>
        <p>Total Weight: {weight.toFixed()}g.<br />
        Calories: {cal.toFixed()} </p>
        
        <h3>Ingredients:</h3>
        <ul> 
            {ingredients.map((i, index) => (
                <li key={index}>
                    <img src="https://img.icons8.com/material-rounded/344/checkmark--v1.png" className="icon"/>
                    {i}</li>
            ))}
        </ul>

        <a href={link} target="_blank"><button className="moreInfo" >More Info</button></a>
    </div>
)
}

export default MyRecipesComponent;
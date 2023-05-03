import React, { useState } from "react";
import Swal from "sweetalert2";

const Recipe = ({ data }) => {

    const [apply, setApply] = useState(false);
  const { ingredients, method, name, rating } = data;

    const handleAlert = () =>{
        Swal.fire(
            "Task complete",
            "Added as favorite recipe",
            'success'
          )
          setApply(true)
    } 

  return (    
      <div className="card w-full  shadow-xl bg-amber-100">
        <div className="card-body">
          <h2 className="card-title"><strong>Recipe name</strong>: {name}</h2>
          <ol>
            {
                ingredients.map((data) => <li><strong>Ingredients :</strong> {data}</li>)
            }
          </ol>
          <p><strong>Cooking Mehtod</strong> : {method}</p>
          <p><strong>Rating</strong> : {rating}</p>
          <div className="card-actions justify-center">
            {
                !apply && <button onClick={handleAlert} className="btn btn-primary">Favorite Recipe</button>
            }
          </div>
        </div>
      </div>   
  );
};

export default Recipe;

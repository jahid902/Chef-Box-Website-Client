import React from "react";
import { Link } from "react-router-dom";

const ChefData = ({ singleData }) => {
  const { id, name, numRecipes, likes, experience, picture } =
    singleData;
  return (
    <div className="card lg:card-side  shadow-xl bg-yellow-100 p-0 md:p-4">
      <figure className="w-full">
        <img
        className="object-cover h-full w-full"
          src={picture}
          alt="chef picture"
        />
      </figure>
      <div className="card-body w-full md:w-4/5 my-auto space-y-0 md:space-y-6">
        <h2 className="card-title">Name : {name}</h2>
        <p className="flex-grow-0"><strong>Recipes</strong> : {numRecipes}</p>
        <p className="flex-grow-0"><strong>Likes</strong>: {likes}</p>
        <p className="flex-grow-0"><strong>Years of experience</strong> : {experience}</p>
        <div className="card-actions justify-start">
          <Link to={`../chefs/${id}`}><button className="btn btn-common ">View chef recipes</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ChefData;

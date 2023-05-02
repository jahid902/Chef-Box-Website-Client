import React from "react";

const ChefData = ({ singleData }) => {
  console.log(singleData);
  const { id, description, name, numRecipes, likes, experience, picture } =
    singleData;
  return (
    <div className="card lg:card-side  shadow-xl bg-amber-100 p-0 md:p-4">
      <figure className="w-full">
        <img
        className="object-cover h-full w-full"
          src={picture}
          alt="chef picture"
        />
      </figure>
      <div className="card-body w-full md:w-4/5">
        <h2 className="card-title">Name : {name}</h2>
        <p><strong>Chef Detail</strong> : {description}</p>
        <p><strong>Recipes</strong> : {numRecipes}</p>
        <p><strong>Likes</strong>: {likes}</p>
        <p><strong>Years of experience</strong> : {experience}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-common ">View chef recipes</button>
        </div>
      </div>
    </div>
  );
};

export default ChefData;

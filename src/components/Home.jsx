import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefData from "./ChefData";

const Home = () => {

    const chefsData = useLoaderData();
    

  return (
    <div className="px-2 py-1 md:px-4 md:py-4 font-serif">
      <section className="flex flex-col-reverse md:grid grid-cols-2 gap-3 md:p-8">
        <div className="font-serif space-y-6 text-center md:text-start  md:order-first md:p-6">
          <h1 className="font-bold text-4xl">
            The importance
            <br />
            of a great
            <br />
            <span className="text-yellow-600 mt-2">Chef</span>
          </h1>
          <p>
            From a pop culture trend to the social experience of dining - there
            are so many reasons why food and the chefs responsible for preparing
            meals today are essential.Chefs play a critical role in the kitchen.
            Their role extends beyond managing other cooks to also planning the
            menus, ensuring that presentation is on point and even developing
            new, creative recipes for those unique meals everyone craves.
          </p>
        </div>
        <div className=" md:order-last mt-0 md:mt-4">
          <img
            className="w-full h-48 md:h-64 lg:h-96  rounded-lg md:object-contain"
            src="https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8="
            alt=""
          />
        </div>
      </section>
      {/* hero section / banner section */}

      <section className="my-4 md:my-8">
        <div className="text-center my-4 md:my-8">
          <h1 className="text-2xl font-bold">Some world renown chefs.</h1>
          <p className="font-medium mt-2">
            Over the years we have seen so many chefs with so much talent. They
            have shine out whole over the world. Their talent of cooking have
            won so many hearts and inspired a lot of people all over the world.
            Here are some of the chef's list below
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          {            
              chefsData.map(Data=> <ChefData singleData={Data} key={Data.id}>               
              </ChefData>)         
          }
        </div>
      </section>
    </div>
  );
};

export default Home;

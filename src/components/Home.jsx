import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefData from "./ChefData";

const Home = () => {
  const chefsData = useLoaderData();

  return (
    <div className="px-2 py-1 md:px-4 md:py-4 font-serif">
      <section className="flex flex-col-reverse md:grid grid-cols-2 gap-3 md:p-8 bg-yellow-100">
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
      {/* end of hero section / banner section */}

      <section className="my-4 md:my-8">
        <div className="text-center my-4 md:my-8">
          <h1 className="text-2xl font-bold">Some world renown chefs.</h1>
          <p className="font-medium mt-2">
            Over the years we have seen so many chefs with so much talent. They
            have shine out whole over the world. Their talent of cooking have
            won so many hearts and inspired a lot of people all over the world.
            Here are some of the chef's list below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
          {chefsData.map((Data) => (
            <ChefData singleData={Data} key={Data.id}></ChefData>
          ))}
        </div>
      </section>
      {/* end chef data show section  */}

      <section className="my-2 md:my-6">
        <h1 className="text-center my-3 md:my-6 text-3xl font-bold">
          Why you should become a professional Chef ?
        </h1>
        <div className="flex gap-2 md:gap-4 flex-col md:flex-row p-2 md:p-4 bg-yellow-100">
          <div className="w-full md:w-1/2">
            <img
              className="object-cover h-full w-full rounded-lg"
              src="https://riverhousehospitality.com/wp-content/uploads/2020/02/food-prep-min.jpg"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <p>
              What are your personal passions? Because you won't have time to do
              any of them. Will your personal passions and hobbies compete with
              your professional passion, and will that be a deciding factor in
              choosing your career? If you're interested in working in the
              restaurant industry, you should also get a job in a kitchen for 6
              months and try it out. 6 months is a long enough time that any
              conflicts will come up, and you can decide whether or not it's
              something you enjoy doing. You can only find out if it's right for
              you by doing it.Choosing what career you want to pursue is a
              difficult decision to make, and it's one that shouldn't be taken
              lightly. Becoming a chef is an excellent career choice, but, as
              with every job, it has its ups and downs. The long hours, physical
              demand, and low starting pay can be a difficult pill to swallow,
              but if you choose to go into foodservice, you'll be rewarded with
              a fulfilling job that offers tons of freedom and creativity and is
              constantly changing.Foodservice jobs can be found all over the
              world and in a variety of settings, so if you work in restaurants,
              your job can take you to all sorts of interesting destinations.
              For instance, if you've always wanted to live in New York City,
              you can move there and know there are jobs available to you.
              Becoming a chef also gives you the freedom to hop around and find
              the right fit for you. If you don't like working in a fine dining
              establishment, why not give catering a try? Or find a job at a
              resort and grill fresh fish for your customers right on the beach.
              There are many possibilities and options that are open to you when
              you become a chef, which is something that not many other careers
              can claim.
            </p>
          </div>
        </div>
      </section>
      {/* end of third section */}

      <section className="my-4 md:my-8">
        <h1 className="text-center text-4xl font-bold my-4 md:my-8">
          Some of the best chefs in 2022
        </h1>
        <div className="w-full md:w-1/2 flex mx-0  md:mx-auto">
          <img
            className="object-cover w-full h-full"
            src="https://www.chefspencil.com/wp-content/uploads/Most-Famous-Chefs-in-2022-960x1707.jpg"
            alt=""
          />
        </div>
      </section>
      {/* end of fourth section */}
    </div>
  );
};

export default Home;

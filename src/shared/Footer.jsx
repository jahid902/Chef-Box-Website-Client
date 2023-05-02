import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between p-2 md:px-8 md:py-4">

        <div className="w-1/2 space-y-3">
          <h1 className="text-2xl font-bold">ChefBox</h1>
          <p>
            ChefBox is a company associate to many restaurant across the world.It highlights 
            professional chef's. It's connected to in-built services and partners with various
            companies. 
          </p>
        </div>

        <div className="w-1/2 flex text-center flex-col">
            <h1 className="text-2xl font-bold pb-4">follow us on</h1>
            <div className="flex justify-center gap-4">
             <img className="w-8 h-8 cursor-pointer" src="../../public/facebook.png" alt="" />
             <img className="w-8 h-8 cursor-pointer" src="../../public/twitter.png" alt="" />
             <img className="w-8 h-8 cursor-pointer" src="../../public/instagram.png" alt="" />
            </div>
        </div>

      </div>
      <div className="text-center mt-3">©2022 ChefBox Hospitality All Rights Reserved.</div>
    </div>
  );
};

export default Footer;

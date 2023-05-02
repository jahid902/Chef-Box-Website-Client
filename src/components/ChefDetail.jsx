import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetail = () => {

    const details = useLoaderData()
    console.log(details);
    const {id, description, name, numRecipes, likes, experience, picture } = details;
    return (
        <div className='px-2 py-1 md:px-4 md:py-4 font-serif'>
           <div className='flex flex-col md:flex-row gap-4'>
            <div className='w-1/2 mx-auto'>
            <img className='w-full h-96 object-cover md:object-contain ' src={picture} alt="" />
            </div>
            <div className='w-1/2 p-2 md:p-4 space-y-1 md:space-y-6 mx-auto md:justify-start'>
                <p><strong>Name</strong> : {name}</p>
                <p><strong>Chef description</strong> : {description}</p>
                <p><strong>Recipes</strong> : {numRecipes}</p>
                <p><strong>Chef Experience</strong> : {experience}</p>
                <p><strong>Chef likes</strong> : {likes}</p>
            </div>
           </div>
           {/* end of banner section */}

           <section className='my-2 md:my-8'>
            
           </section>
        </div>
    );
};

export default ChefDetail;
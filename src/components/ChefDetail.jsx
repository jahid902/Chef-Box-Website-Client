import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetail = () => {

    const details = useLoaderData()
    return (
        <div>
            {details.name}
        </div>
    );
};

export default ChefDetail;
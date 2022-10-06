import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const View = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://obscure-bastion-40320.herokuapp.com/student/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [id])
    return (
        <div>
            <div class="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto mt-48">
                <h2 class="font-semibold text-2xl mb-6">{service.firstName}</h2>
                <img class="w-32 h-32 object-cover rounded-full mx-auto shadow-lg" src={service.image} alt="User avatar"/>
                    <p class="capitalize text-md mt-1">Class : {service.room}</p>
                    <h2 class="font-semibold text-md">Roll : {service.roll}</h2>
                    <h2 class="font-semibold text-md">Address : {service.address1}</h2>
        
            </div>
        </div>
    );
};

export default View;
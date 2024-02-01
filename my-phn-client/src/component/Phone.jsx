import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);
  return (
    <div>
    <h4>Phone ID Number : {phone.id}</h4>
    <h1>{phone.name}</h1>
    <img src={phone.image} alt="" />
    <h3>Price: $ {phone.price}</h3>
    <h5>Description: {phone.description}</h5>
    </div>
  );
};

export default Phone;
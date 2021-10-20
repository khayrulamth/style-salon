import React from 'react';

const ServiceCard = ({cut}) => {
    const {title,price,img} = cut;
    console.log(title,price);
    return (
        <div className="grid gap-4 px-4 py-8 rounded transition hover:ease-in-out duration-500 transform hover:scale-110 bg-white text-black justify-center border-t-2 border-r-2 ">
            <p><img className="h-12 md:h-16 mx-auto" src={img} alt="" /></p>
            <h1 className="text-xl">{title}</h1>
            <h3 className="text-c-main text-lg ">${price}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus autem vel sint aut praesentium error totam tempore et enim.</p>
            <button className="py-1 px-4 border-2 rounded uppercase font-bold m-5 border-c-main ">Call For Service</button>
        </div>
    );
};

export default ServiceCard;
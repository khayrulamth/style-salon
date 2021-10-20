import React from 'react';

const WhyCard = ({datam}) => {
    const {title,info,img} = datam;
    return (
        <div className="grid gap-4 px-4 py-8 rounded transition hover:ease-in-out duration-500 transform hover:scale-110 bg-white text-black justify-center border-t-2 border-r-2 ">
            <p><img className="h-12 md:h-16 mx-auto" src={img} alt="" /></p>
            <h1 className="text-c-main text-lg ">{title}</h1>
            <h3 className="text-md ">${info}</h3>
        </div>
    );
};

export default WhyCard;
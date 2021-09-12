import React from 'react';

const OfferCard = ({ data }) => {
    const { bg, dataImg, title, description } = data;

    return (
        <div className={`flex flex-col gap-5 py-24 px-4 ${bg === 'c-main' ? 'bg-c-main text-white' : 'bg-white border text-c-main border-c-main'} `}>
            <img className={`mx-auto rounded-full h-48 w-48 border-2 transition duration-150 ease-in-out ${bg === 'c-main' ? 'bg-white' : 'bg-c-main'}`} src={dataImg} alt="" />
            <h1 className="text-xl">{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default OfferCard;
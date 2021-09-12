import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import caro2 from './../../img/caro2.jpg';
import barbar from './../../img/barbar.svg';
// import caro5 from './../../img/caro5.jpg';
const HeadCarouser = () => {
    return (
        <section>
            <div className="hero grid gap-5 grid-cols-1 md:grid-cols-2 justify-items-center px-8 md:px-16 py-16 my-16">

                <div className="infoContainer text-c-main h-full flex gap-6 flex-col items-center justify-center">
                    <h1 className="text-4xl uppercase">we take care of everything
                        and leave you feeling FABULOUS</h1>
                    <button className="px-4 border-2 border-c-main rounded py-1">Visit Products</button>
                </div>

                <div className="imgContainer h-full">
                    <img src={barbar} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeadCarouser;
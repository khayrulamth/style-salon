import React from 'react';
import ServiceCard from './ServiceCard';
import women from '../../img/woman.png';
import man from '../../img/men.png';
import curly from '../../img/curly.png';
import alert from '../../img/alert.png';
import ambulance from '../../img/ambulance.png';
import call from '../../img/call.png';

const Services = () => {
    const hairCuts = [{
        title: "Emergency Service",
        price: "35",
        img: alert,
    },
    {
        title: "ICU Service",
        price: "75",
        img: call,
    },
    {
        title: "24 hrs Ambulence",
        price: "50",
        img: ambulance,
    },

    ]
   
    return (
        <section className="bg-c-main px-8 py-16 md:py-32">
            <h1 className="text-xl text-white font-bold uppercase mb-16 md:text-2xl">Our Services</h1>
            <div className=" grid grid-cols-1 items-center justify-items-center md:grid-cols-3 gap-5 text-white">
            
            {
                hairCuts.map(cut => <ServiceCard cut={cut}></ServiceCard>)
            }
        </div>
        </section>
    );
};

export default Services;
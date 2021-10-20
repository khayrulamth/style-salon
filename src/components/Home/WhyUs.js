import React from 'react';
import WhyCard from './WhyCard';
import stethoscope from '../../img/stethoscope.png';
import healthcare from '../../img/healthcare.png';
import badge from '../../img/badge.png';


const WhyUs = () => {
    const dataSet = [{
        title: "More experience",
        info:"Every year, more than a million people come to K Hospital for care. Our highly specialized experts are deeply experienced in treating rare and complex conditions.So you can always relay on us.",
        img: stethoscope,
    },
    {
        title: "Seamless care",
        info:"At K Hospital, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here.",
        img: healthcare,
    },
    {
        title: "Unparalleled expertise",
        info:"K Hospital experts are some of the best in the world. In the U.S. News & World Report rankings of top hospitals, Mayo Clinic is consistently ranked among the top hospitals in the nation.",
        img: badge,
    },

    ]
    return (
        <section className="bg-c-main px-8 py-16 md:py-32">
            <h1 className="text-xl text-white font-bold uppercase mb-16 md:text-2xl">Why Choose Us</h1>
            <div className=" grid grid-cols-1 items-center justify-items-center md:grid-cols-3 gap-5 text-white">
            
            {
                dataSet.map(datam => <WhyCard datam={datam}></WhyCard>)
            }
        </div>
        </section>
    );
};

export default WhyUs;
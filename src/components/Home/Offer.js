import React from 'react';
import makeup from '../../img/makeup.svg';
import gift from '../../img/gift.svg';
import love from '../../img/love.svg';
import OfferCard from './OfferCard';

const Offer = () => {
    
    const dataSet = [{
        bg:'c-main',
        dataImg: makeup,
        title: 'NEW CLIENT OFFER',
        description: 'New to our Salon or interested in trying a new service? You are welcome! '
    },{
        bg:'white',
        dataImg: gift,
        title: 'Membership Gift',
        description: 'Download our $20 gift and book an appointment today!You will love us!'
    },{
        bg: 'c-main',
        dataImg: love,
        title: 'GIFT CARDS',
        description: 'We offer gift cards for any service or dollar amount. Purchase online or come in and see us!'
    }]

    return (
        <section className="grid grid-col-1 md:grid-cols-3 my-32 w-screen first:bg-c-main last:bg-c-main">
            {
                dataSet.map(data=><OfferCard data={data}></OfferCard>)
            }
        </section>
    );
};

export default Offer;
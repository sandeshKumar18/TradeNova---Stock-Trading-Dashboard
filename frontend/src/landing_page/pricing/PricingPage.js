import React from 'react';
import Hero from '../pricing/Hero';
import Brokerage from '../pricing/BroKerage';
import OpenAccount from '../OpenAccount.js';

function PricingPage() {
    return ( 
        <>
            <Hero />
            <OpenAccount />
            <Brokerage />
        </>
        
     );
}

export default PricingPage;
import React from 'react';

function Hero() {
    return ( 
        <div className='container '>
            
            <div className='row mt-5 mb-5 text-center'>
                <h2 className='mt-5'>Charges</h2>
                <h5 className='text-muted mt-2'>List of all Charges and taxes</h5>
            </div>
            <div className='row' style={{height:"50px"}}></div>

            <div className='row mt-5 text-center'>
                <div className='col-4 p-4'>
                    <img src='media/Images/pricing0.svg' alt='img' style={{width:"80%"}}/>
                    <h3>Free Equity delievery</h3>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className='col-4 p-4 '>
                    <img src='media/Images/other-trades.svg' alt='img' style={{width:"80%"}}/>
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per <br/>executed order on intraday trades across <br/>equity, currency, and commodity trades. Flat<br/> ₹20 on all option trades.</p>
                </div>

                <div className='col-4 p-4'>
                    <img src='media/Images/pricingMF.svg' alt='img' style={{width:"80%"}}/>
                    <h3>Free direct MF</h3>
                    <p className='text-muted'>All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP <br/>charges.</p>
                </div>


                
            </div>
        </div>
     );
}

export default Hero;
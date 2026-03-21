import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-top'>
                <h3 className='text-center'>People</h3>
            </div>

            <div className='row p-5 text-muted' style={{lineHeight:"1.8", fontSize:"1.0em"}}>


                <div className='col-6 p-2 text-center'>
                    <img src='/media/Images/nithinKamath.jpg' alt='img' style={{borderRadius:"100%", width:"60%"}}/>
                    <h4 className='mt-4'>Sandesh Kumar</h4>
                    <h6>Owner : TradeNova</h6>
                </div>


                <div className='col-6 '>
                    <p>Sandesh bootstrapped and build TradeNova in 2026 to overcome the hurdles he faced during his decade long stint as a trader. Today, TradeNova has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing Cricket is his zen.</p>
                    <p>Connect on <a href=''>Homepage</a> / <a href=''>TradingQnA</a> / <a href=''>Twitter</a></p>
                </div>
            </div>

        </div>
     );
}

export default Team;
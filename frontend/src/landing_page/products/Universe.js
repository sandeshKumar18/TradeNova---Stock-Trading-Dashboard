import React from 'react';

function Universe() {
    return ( 
       <div className='container mt-5 p-3'>
            <div className='row text-center'>

                <h1 className='text-muted fs-3 mt-5'>The TradeNova Universe</h1>
                <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/Images/zerodhaFundhouse.png' alt='img' style={{width:"40%"}}/>
                    <p  className='text-muted  p-3' style={{fontSize:"14px"}}>Our asset management venture<br/>that is creating simple and transparent index<br/>funds to help you save for your goals.
                    </p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src='media/Images/sensibullLogo.svg' alt='img' style={{width:"55%"}}/>
                    <p  className='text-muted p-3' style={{fontSize:"14px"}}>
                        Options trading platform that lets you<br/>
                        create strategies, analyze positions, and examine<br/>
                        data points like open interest, FII/DII, and more.

                    </p>
                    
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src='media/Images/dittoLogo.png' alt='img' style={{width:"30%"}}/>
                    <p  className='text-muted p-3' style={{fontSize:"14px"}}>
                        Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                    
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src='media/Images/streakLogo.png' alt='img' style={{width:"30%"}}/>
                    <p  className='text-muted p-3' style={{fontSize:"14px"}}>Systematic trading platform <br/> that allows you to create and backtest<br/>  strategies without coding.
                    </p>
                </div>

                <div className='col-4 p-3 mt-5'>
                   
                    <img src='media/Images/smallCaseLogo.png' alt='img' style={{width:"40%"}}/>
                    <p  className='text-muted p-3' style={{fontSize:"14px"}}>Thematic investing platform<br/>that helps you invest in diversified <br/>baskets of stocks on ETFs.
                    </p>

                </div>

                <div className='col-4 p-3 mt-5'>
                    
                    <img src='media/Images/goldenpiLogo.png' alt='img' style={{width:"45%"}}/>
                    <p className='text-muted p-3' style={{fontSize:"14px"}}>Personalized advice on life<br/>and health insurance. No spam<br/>and no mis-selling.
                    </p>
                </div>

                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width : '20%', margin:'0 auto'}}>Signup for Free</button>
            </div>
        </div>
     );
}

export default Universe;
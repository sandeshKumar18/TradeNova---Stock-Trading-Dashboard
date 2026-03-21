import React from 'react';

function Hero() {
    return (
        <div className='container mb-5 border-bottom'>
            <div className='text-center mt-5 p-3'>
                <h1 className='fs-3 mt-4'>TradeNova Products</h1>
                <h4 className='text-muted mt-3 mb-3 fs-5' >Sleek, modern, and intuitive trading platforms</h4>
                <p className='mt-3 mb-5'>Check out our <a href=''style={{textDecoration:"none"}}>investment offerings<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
      );
}

export default Hero;
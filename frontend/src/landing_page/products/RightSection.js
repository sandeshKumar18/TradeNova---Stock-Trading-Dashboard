import React from 'react';


function RightSection({imageURL, ProductName, ProductDescription,learnMore}) {
    return ( 
        <div className='container mt-5 p-3'>
            <div className='row'>

                <div className='col-6 mt-5'>
                    <h1 className='fs-3 mt-5 ' style={{lineHeight:"2"}}>{ProductName}</h1>
                    <p>{ProductDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>

                <div className='col-6 mb-5'>
                    <img src={imageURL} alt='img' />
                </div>
            </div>
        </div>
     );
}

export default RightSection;
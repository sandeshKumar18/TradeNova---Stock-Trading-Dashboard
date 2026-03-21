import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h2 className="fs-3 mt-3">Support Portal</h2>
        <a href="" className=" mt-3">Track Tickets</a>
      </div>

      <div className="row p-5 m-3">
            <div className="col-6 p-5">
                <h1 className="fs-4">Search for an answer or browse help topics to create a ticket</h1>
                <input type="text" placeholder="eg. how do i activate F&O" /> <br/>
                <a href="" >Track account opening</a> &nbsp;&nbsp;
                <a href="" >Track segment activation</a> &nbsp;&nbsp;
                <a href="" >Intraday margins</a> &nbsp;&nbsp;
                <a href="" >Kite user manual</a> &nbsp;&nbsp;
            </div>
            <div className="col-6 p-5">
                <h1 className="fs-3">Featured</h1>
                <ol>
                    <li><a href="" >Current takeovers and Delisting - January 2024</a></li>
                    <li><a href="" >Latest Intraday leverages - MIS & CO</a></li>
                </ol>
                
                

            </div>
      </div>
    </section>
  );
}

export default Hero;

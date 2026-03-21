import React from "react";

function BroKerage() {
  return (
    <div className="container">
      <div className="row mt-5">
        <h1 className="fs-3">Charges for account opening</h1>

        <table class="table border mt-2">
          <thead>
            <tr>
              <th scope="col">Type of Account</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online Account</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Offline Account</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>Rs. 500</td>
            </tr>

            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>Rs. 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row mt-5">
        <h1 className="fs-3">Demat AMC (Annual Maintenance Charge)</h1>

        <table class="table border mt-2 p-3">
          <thead>
            <tr>
              <th scope="col">Values of holdings</th>
              <th scope="col">AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹ 300 per year, charged quarterly</td>
            </tr>

            
          </tbody>
        </table>

        <p style={{fontSize:"13px"}}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href="" style={{textDecoration:"none"}}>Click here.</a></p>
      </div>

      <div className="row mt-5">
        <h1 className="fs-3">Charges for optional value added services</h1>

        <table class="table border mt-2">
          <thead>
            <tr>
              <th scope="col">Service</th>
              <th scope="col">Billing Frequency</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
                <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className="row mt-5">
        <h1 style={{fontSize:"18px"}}>Dislaimer </h1>
        <p style={{fontSize:"13px"}}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
      </div>
    </div>
  );
}

export default BroKerage;

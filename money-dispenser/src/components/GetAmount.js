import React from 'react';
import './GetAmount.css';

const GetAmount = ({onGetMoney}) => {

    return (
        <div className="getAmountBody">
            <div>
                <h3>Welcome to ATM</h3>
                <form>
                    <div className="form-group">
                        <label>Enter the amount :</label>
                        <input type="text"
                                className="form-control"
                                id="amount"
                        />
                    </div>
                    <button className="btn d-block" onClick={(e) => {
                        e.preventDefault();
                        var amt = document.getElementById("amount").value;
                        onGetMoney(amt);
                    }}>Get Money</button>
                </form>
            </div>
        </div>
    )
};

export default GetAmount;
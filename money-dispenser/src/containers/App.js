import React from 'react';
import Header from './Header';
import './App.css';
import GetAmount from '../components/GetAmount';
import GetNoteCount from '../containers/GetNoteCount';

class App extends React.Component {

    state = {
        inputAmount: null,
        one: 0,
        two: 0,
        five: 0,
        ten: 0,
        twenty: 0,
        fifty: 0,
        hundred: 0,
        twoHundred: 0,
        fiveHundred: 0,
        twoK: 0
    };

    onGetMoney = (amount) => {
        this.setState({
            inputAmount: amount
        });
        setTimeout(() => {
            this.calculateAmount();
        }, 1000);
    }

    calculateAmount = () => {
        let amount = this.state.inputAmount;
        while(amount > 0) {
            if (amount >= 2000) {
                this.setState({twoK: Math.floor(amount/2000)});
                amount = amount % 2000;
            } else if (amount >= 500) {
                this.setState({fiveHundred: Math.floor(amount / 500)});
                amount %= 500;
            } else if (amount >= 200) {
                this.setState({twoHundred: Math.floor(amount / 200)});
                amount %= 200;
            } else if (amount >= 100) {
                this.setState({hundred: Math.floor(amount / 100)});
                amount %= 100;
            } else if (amount >= 50) {
                this.setState({fifty: Math.floor(amount / 50)});
                amount %= 50;
            } else if (amount >= 20) {
                this.setState({twenty: Math.floor(amount / 20)});
                amount %= 20;
            } else if (amount >= 10) {
                this.setState({ten: Math.floor(amount / 10)});
                amount %= 10;
            } else if (amount >= 5) {
                this.setState({five: Math.floor(amount / 5)});
                amount %= 5;
            } else if (amount >= 2) {
                this.setState({two: Math.floor(amount/2)});
                amount %= 2;
            } else if (amount >= 1) {
                this.setState({one: Math.floor(amount / 1)});
                amount %= 1;
            }
        }
        setTimeout(() => {
            console.log(this.state);
        }, 1000);
    }

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className="row body">
                    <div className="col-md-6">
                        <GetAmount onGetMoney={this.onGetMoney} />
                    </div>
                    <div className="col-md-6">
                        <GetNoteCount />
                    </div>
                </div>
            </div>
        )
    }

}

export default App;
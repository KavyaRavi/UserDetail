import React from 'react';
import axios from 'axios';
import GetLoanAmount from '../components/GetLoanInput';

class App extends React.Component {

    state = {loanAmount: null, loanDuration: null};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            loanAmount: "500",
            loanDuration: "6"
        });
        setTimeout(() => {
            this.getLoanDetails();
        }, 500);
    }
    

    getLoanDetails = async () => {
        console.log(this.state.loanAmount, this.state.loanDuration)
        const response = await axios.get('https://ftl-frontend-test.herokuapp.com/interest', {
            params: {
                amount: `${this.state.loanAmount}`,
                numMonths: `${this.state.loanDuration}`
            }
        });
        console.log(response);
    };

    setLoanQuery = (loanAmount, loanDuration) => {
        this.setState({
            loanAmount: loanAmount,
            loanDuration: loanDuration
        });
        setTimeout(() => {
            this.getLoanDetails();
        }, 500);
    };

    render() {
        return (
            <div className="container">
                <button onClick={this.getLoanDetails}>GetLoan</button>
                <div className="row">
                    <div className="col-md-6">
                        <GetLoanAmount onInputChange={this.setLoanQuery} />
                    </div>
                </div>
            </div>
        )
    }
};

export default App;
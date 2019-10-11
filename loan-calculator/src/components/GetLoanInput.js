import React from 'react';

class GetLoanInput extends React.Component {

    constructor(props) {
        super(props);

        this.loanAmount = React.createRef();
        this.loanDuration = React.createRef();
    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label>Loan Amount : </label>
                    <input type="range"
                            className="form-control" 
                            ref={this.loanAmount}  
                            defaultValue="500"
                            min="500"
                            max="5000"
                            onChange={() => {this.props.onInputChange(this.loanAmount.current.value, this.loanDuration.current.value)}}
                    ></input>
                </div>
                <div className="form-group">
                    <label>Loan Duration : </label>
                    <input type="tel"
                            className="form-control"
                            ref={this.loanDuration}
                            defaultValue="6"
                            min="6"
                            max="24"
                            onChange={() => {this.props.onInputChange(this.loanAmount.current.value, this.loanDuration.current.value)}}
                    ></input>
                </div>
            </div>
        )
    }

};

export default GetLoanInput;
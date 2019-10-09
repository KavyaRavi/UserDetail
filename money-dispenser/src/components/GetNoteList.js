import React from 'react';
import './GetNoteList.css';

const GetNoteItem = ({amounts}) => {

    return (
        <div className="getNoteList">
            <div>
                <p>You will get following amount</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <ul>
                        <li>{amounts.one} notes of Rs. 1</li>
                        <li>{amounts.five} notes of Rs. 5</li>
                        <li>{amounts.twenty} notes of Rs. 20</li>
                        <li>{amounts.hundred} notes of Rs. 100</li>
                        <li>{amounts.fiveHundred} notes of Rs. 500</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>{amounts.two} notes of Rs. 2</li>
                        <li>{amounts.ten} notes of Rs. 10</li>
                        <li>{amounts.fifty} notes of Rs. 50</li>
                        <li>{amounts.twoHundred} notes of Rs. 200</li>
                        <li>{amounts.twoK} notes of Rs. 2000</li>
                    </ul>
                </div>
            </div>
            <div>
                <p>Total notes dispensed: {amounts.totalCount}</p>
            </div>
        </div>
    )

}

export default GetNoteItem;
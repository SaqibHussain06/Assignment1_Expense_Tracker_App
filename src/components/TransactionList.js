import React from 'react'

export const TransactionList = () => {
    return (
        <div>
            <h3>History</h3>
            <ul  className="list">
                <li className="minus">
                    Cash <span>-$400</span>
                    <button className="delete-btn">delete</button>
                </li>     
            </ul>
        </div>
    )
}

import React, { PropTypes } from 'react';
import InvoiceItem from './InvoiceItem'

class InvoiceManagementPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Manage Your Invoice</h2>
                <h4>You may check the card invoice process inquiry by entering your receipt infomation.</h4>
                <div>
                    <span style={{border: "1px solid red"}}>Available</span>
                    <span style={{border: "1px solid blue"}}>Already applied receipts</span>
                </div>

                <InvoiceItem />
                <InvoiceItem />
                <InvoiceItem />
                <button>Next</button>
            </div>
        );
    }
}

module.exports = InvoiceManagementPage;
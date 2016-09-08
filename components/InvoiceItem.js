import React, { PropTypes } from 'react';

class InvoiceItem extends React.Component {
    render() {
        return (
            <div style={{border: "1px solid green", margin:'10px'}}>
                <h3>$ 100.00</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>CARD NUMBER: 891627789167498217364</td>
                            <td>VOUCHER NUMBER: 123424</td>
                        </tr>
                        <tr>
                            <td>ORDER NUMBER: 1234234</td>
                            <td>BLANCE: 300</td>
                        </tr>
                        <tr>
                            <td>TRANSACTION: Purchase</td>
                            <td>DATE: 2016/09/10</td>
                        </tr>
                        <tr>
                            <td>CHANNEL TYPE: Starbucks Mobile App</td>
                            <td>TIME: 12:15:17</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = InvoiceItem;
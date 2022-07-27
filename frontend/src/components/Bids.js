import React from 'react';
import { Table } from 'react-bootstrap';

const Bids = ({ bidList }) => (
    <Table striped bordered hover>
        <thead>
        <tr>
            <th>Bid Amount</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
        </tr>
        </thead>
        <tbody>
            {
                bidList.map(
                    ({ bidAmount, buyerEmailId, buyer: [{ firstName, lastName, phone }] }) =>
                    <tr>
                        <td>{bidAmount}</td>
                        <td>{`${firstName} ${lastName}`}</td>
                        <td>{buyerEmailId}</td>
                        <td>{phone}</td>
                    </tr>
                )
            }
        </tbody>
    </Table>
);

export default Bids;
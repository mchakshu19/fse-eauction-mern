import React from 'react';

import { Form, Row, Col } from 'react-bootstrap';

// interface ProductProps {
//     product: {
//         productName: string,
//         shortDescription: string,
//         detailedDescription: string,
//         category: string,
//         startingPrice: number,
//         bidEndDate: string,
//     }
// }

const ProductDetails = ({
    product: {
        productName,
        shortDescription,
        detailedDescription,
        category,
        startingPrice,
        bidEndDate,
} }) => (
<Form>
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm="3">
        Product Name
      </Form.Label>
      <Col sm="9">
        <Form.Control type="text" disabled readOnly defaultValue={productName} />
      </Col>
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm="3">
        Short Description
      </Form.Label>
      <Col sm="9">
        <Form.Control type="text" disabled readOnly defaultValue={shortDescription} />
      </Col>
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm="3">
        Detailed Description
      </Form.Label>
      <Col sm="9">
        <Form.Control type="text" disabled readOnly defaultValue={detailedDescription} />
      </Col>
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm="3">
        Category
      </Form.Label>
      <Col sm="9">
        <Form.Control type="text" disabled readOnly defaultValue={category} />
      </Col>
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm="3">
        Starting Price
      </Form.Label>
      <Col sm="9">
        <Form.Control type="text" disabled readOnly defaultValue={startingPrice} />
      </Col>
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm="3">
        Bid End Date
      </Form.Label>
      <Col sm="9">
        <Form.Control type="text" disabled readOnly defaultValue={bidEndDate} />
      </Col>
    </Form.Group>
</Form>
);

export default ProductDetails;
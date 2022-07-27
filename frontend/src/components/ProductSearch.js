import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'react-bootstrap';

const ProductSearchProps = {
    inputValue: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
}

const ProductSearch = ({
    inputValue,
    handleChange = () => {},
    handleSubmit = () => {}
} ) => {
    const handleInputChange = (event) => {
        const val = event.target.value;
        handleChange(val);
    }

    return (
        <Form>
            <Form.Group as={Row} className="mb-3">
                <Col sm="1"></Col>
                <Form.Label column sm="2">
                    Product
                </Form.Label>
                <Col sm="7">
                    <Form.Control type="text" defaultValue={inputValue} onChange={handleInputChange} />
                </Col>
                <Col sm="2">
                    <Form.Control type="button" value="Get" onClick={handleSubmit} />
                </Col>
            </Form.Group>
        </Form>
    );
}

ProductSearch.propTypes = ProductSearchProps;

export default ProductSearch;
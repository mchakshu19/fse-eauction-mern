import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap'

import ProductDetails from './ProductDetails';
import ProductSearch from './ProductSearch';
import Bids from './Bids';

import showBids from '../services/seller/showBids';

const Products = ({ productInfo, setProductInfo }) => {
    const [inputProductId, setInputProductId] = useState('');

    const fetchProductDetails = () => {
        showBids({ productId: inputProductId }).then((res) => {
            setProductInfo(res);
        })
    }

    return <>
        <Row>
            <Col></Col>
            <Col xs={3}>
                <h5>Product Details</h5>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col xs={9}>
                <ProductSearch
                    inputValue={inputProductId}
                    handleChange={setInputProductId}
                    handleSubmit={fetchProductDetails}    
                />
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col xs={9}>
                <ProductDetails product={productInfo} />
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col xs={2}>
                <h5>Bids</h5>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col xs={9}>
                <Bids bidList={(productInfo && productInfo.bidList) || []} />
            </Col>
            <Col></Col>
        </Row>
    </>
}

export default Products;
import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import Navigation from "./Navigation";
import Products from './Products';

const Layout = () => {
    const [productInfo, setProductInfo] = useState({});

return <>
    <Navigation></Navigation>
    <Container fluid>
        <Products productInfo={productInfo} setProductInfo={setProductInfo} />
    </Container>
</>
}
export default Layout;
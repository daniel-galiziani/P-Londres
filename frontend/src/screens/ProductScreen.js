import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import products from '../products'



const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id )
    return (
        <>
            <Link className='btn btn-light m-3' to='/'>
                Voltar
            </Link> 
            <Row>
                <Col md={6}>
                    <Image src={product.image} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen

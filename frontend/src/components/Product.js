import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const Product = ({ product }) => {
    return (
        <Card className='mt-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} fluid variant='top' />
            </Link>

            <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
            </Link>
            <Card.Text as="div">
                <div className='my-1'>
                    {product.date}
                </div>
            </Card.Text>
            <Card.Text as="div">
                <div className='my-1'>
                    {product.location}
                </div>
            </Card.Text>
            <Card.Text as="div">
                <div className='my-1'>
                    {product.description}
                </div>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product

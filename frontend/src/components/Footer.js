import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3' style={{color: '#006437'}}>
                        Copyright &copy; Palmeiras Londres
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer

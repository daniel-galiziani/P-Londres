import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import Image from '../PalxGre.jpeg'
import Image2 from '../PalxInt.jpeg'
import Image3 from '../Pal_Aniversario.jpeg'

const HomeScreen = () => {
    return (
        <div>
            <Row>
                <h1>Ultimos Eventos</h1>
            </Row>
            <Row sm={12} lg={4} xl={3} className="d-flex justify-content-around">
                    <Card style={{ width: '18rem', padding: '10px'}}>
                        <Card.Img variant="top" src={Image}/>
                        <Card.Body>
                        <Card.Title>Palmeiras x Gremio</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        <Button variant="success">Ler Mais</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', padding: '10px' }}>
                        <Card.Img variant="top" src={Image2} />
                        <Card.Body>
                        <Card.Title>Palmeiras x Inter</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        <Button variant="success">Ler Mais</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', padding: '10px' }}>
                        <Card.Img variant="top" src={Image3} />
                        <Card.Body>
                        <Card.Title>Aniversario do Verdao</Card.Title>
                            <Card.Text>
                            Parabéns Sociedade Esportiva Palmeiras!
                            Parabéns Consulado Palmeiras Londres!
                            Orgulho de pertencer  💚  🐷
                            </Card.Text>
                        <Button variant="success">Ler Mais</Button>
                        </Card.Body>
                    </Card>
            </Row>
        </div>
    )
}

export default HomeScreen

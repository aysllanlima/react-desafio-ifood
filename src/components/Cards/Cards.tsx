import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import './Cards.css';

export function Cards() {
  return (
    <Row xs={1} md={2} className="g-5 justify-content-center">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col className="my-5 column-size">
          <Card className="card-size">
            <Card.Img className="card-image" variant="top" src="images/combo.png" />
            <Card.Body>
              <Card.Title className="card-title">3 SANDUÍCHES + 3 MCFRITAS MÉDIAS</Card.Title>
              <Card.Text className="card-text">
                São 3 sanduíches e McFritas para compartilhar com quem preferir.
              </Card.Text>
              <Card.Text className="card-text-price">
                A partir de R$ 64,50
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
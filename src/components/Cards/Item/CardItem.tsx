import React from 'react';
import { Card } from 'react-bootstrap';
import './CardItem.css';

export type CardItemProps = {
  title: string,
  description: string,
  price: string,
  image: string,
}

export function CardItem(props: CardItemProps) {
  return (
    <Card className="d-flex card-size">
      <Card.Img className="card-image" variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-text">
          {props.description}
        </Card.Text>
        <Card.Text className="d-flex align-self-end card-text-price">
          {props.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
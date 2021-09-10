import React from 'react';
import { Image } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

export type RestaurantItemProps = {
  title: string,
  image: string,
  score: string,
  categorie: string,
  kilometers: string,
  deliveryTime: string,
  price: string,
}

export function RestaurantItem(props: RestaurantItemProps) {
  return (
    <div className="d-flex my-2 col">
      <a className="categories-link" href="#"><Image className="restaurants-icon" src={props.image} /></a>
      <div>
        <h6 className="fw-bold my-1 ms-3">{props.title}</h6>
        <p className="my-1 ms-3"><StarFill /> {props.score} - {props.categorie} - {props.kilometers} km</p>
        <p className="my-1 ms-3">{props.deliveryTime} min - R$ {props.price}</p>
      </div>
    </div>
  )
}
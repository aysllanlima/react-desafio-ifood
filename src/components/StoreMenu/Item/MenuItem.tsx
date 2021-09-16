import React from 'react';
import { Image } from 'react-bootstrap';

export type MenuItemProps = {
  title: string,
  description: string,
  price: string,
  image: string,
}

export function MenuItem(props: MenuItemProps) {
  return (
    <>
      <div className="col-5 border">
        <button className="d-flex offer-button" data-bs-toggle="modal" data-bs-target="#mcoferta">
          <div>
            <h6 className="my-4 mx-1 fw-bold">{props.title}</h6>
            <p className="mx-1">{props.description}</p>
            <p className="mx-1 fw-bold">{props.price}</p>
          </div>
          <Image className="p-3 combo-offer-image" src={props.image} />
        </button>
      </div>
    </>
  )
}
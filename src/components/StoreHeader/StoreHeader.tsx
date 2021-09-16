import React from 'react'
import { Image } from 'react-bootstrap';
import { Search, StarFill } from 'react-bootstrap-icons';
import './StoreHeader.css';

export function StoreHeader() {
  return (
    <>
      <div className="my-5 text-center">
        <Image className="banner-1" src="images/banner-1.png" />
      </div>
      <div className="mb-5 container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <Image className="store-logo" src="images/mcdonalds.png" alt="McDonalds" />
            <div className="d-flex">
              <h2 className="fw-bold">McDonald's - Drive Teotonio (tot)</h2>
              <StarFill className="ms-2 star-icon intro-star-icon" />
              <p className="ms-2 p-size">4.5</p>
            </div>
            <a className="fw-bold link-style" href="#">Ver mais</a>
            <p>|</p>
            <p className="p-style">Pedido mínimo R$ 15,00</p>
          </div>
          <div className="d-flex">
            <div className="my-4 input-group">
              <span className="input-group-text intro-element-height" id="search-icon">
                <button className="no-border"><Search /></button>
              </span>
              <input type="search" className="form-control intro-element-height" placeholder="Buscar no cardápio" aria-label="Search"
                aria-describedby="search-icon" />
              <select className="mx-5 form-select intro-element-height" aria-label="Select">
                <option selected>Entrega</option>
                <option value="1">Retirada</option>
              </select>
              <div className="border">
                <p className="fs-6 mx-3 my-1">Hoje</p>
                <p className="fs-6 mx-3 my-1">18 - 28 min - 4,99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



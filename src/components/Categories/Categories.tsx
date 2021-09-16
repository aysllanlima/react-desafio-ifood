import React from 'react';
import { Image } from 'react-bootstrap';
import './Categories.css';

export function Categories() {
  /* */
  return (
    <div className="my-4 container">
      <div className="row">
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="categories-icon-size" src="images/mercado.png" />Mercado</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="categories-icon-size" src="images/vr.png" />VR</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="categories-icon-size" src="images/brasileira.png" />Brasileira</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="categories-icon-size" src="images/saudável.png" />Saudável</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="categories-icon-size" src="images/pastel.png" />Pastel</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="categories-icon-size" src="images/salgados.png" />Salgados</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="categories-icon-size" src="images/cafeteria.png" />Cafeteria</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="categories-icon-size" src="images/chinesa.png" />Chinesa</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="categories-icon-size" src="images/doces.png" />Doces</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="categories-icon-size" src="images/padaria.png" />Padaria</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="categories-icon-size" src="images/pizza.png" />Pizza</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="categories-icon-size" src="images/lanches.png" />Lanches</a>
        </div>
      </div>
    </div>
  )
}
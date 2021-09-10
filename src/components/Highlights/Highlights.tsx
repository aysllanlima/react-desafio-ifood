import React from 'react';
import { Image } from 'react-bootstrap';
import './Highlights.css';

export function Highlights() {
  return (
    <div className="my-5 container">
      <div className="my-5 row">
        <div className="col-12 text-center"><Image className="banner-2" src="images/banner-2.png" /></div>
      </div>
      <div className="row">
        <h5 className="fw-bold mb-3">Famosos no iFood</h5>
        <div className="col-1"><a className="categories-link" href="#"><Image className="highlight-icon" src="images/habibs.png" />Habib's</a></div>
        <div className="col-1"><a className="categories-link" href="#"><Image className="highlight-icon" src="images/minas.png" />Bom de Minas</a></div>
        <div className="col-1"><a className="categories-link" href="#"><Image className="highlight-icon" src="images/ricoy.png" />Ricoy</a></div>
        <div className="col-1"><a className="categories-link" href="#"><Image className="highlight-icon" src="images/pegpese.png" />Pegpese</a></div>
        <div className="col-1"><a className="categories-link" href="#"><Image className="highlight-icon" src="images/cacau-show.png" />Cacau Show</a></div>
        <div className="col-1"><a className="categories-link" href="#"><Image className="highlight-icon" src="images/paioll-bar.png" />Paioll Bar</a></div>
        <div className="col-1"><a className="categories-link" href="#"><Image className="highlight-icon" src="images/griletto.png" />Griletto</a></div>
        <div className="col-1"><a className="categories-link" href="#"><Image className="highlight-icon" src="images/pizza-crek.png" />Pizza Crek</a></div>
        <div className="col-1"><a className="categories-link" href="#"><Image className="highlight-icon" src="images/pro-acai.png" />Pró Açaí</a></div>
      </div>
      <div className="my-5 row">
        <div className="col-12 text-center"><Image className="banner-1" src="images/banner-1.png" /></div>
      </div>
      <div className="my-4 row gap-4">
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="highlight-icon" src="images/express.png" />Express</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="highlight-icon" src="images/bebidas.png" />Bebidas</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="highlight-icon" src="images/conveniencia.png" />Conveniência</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="highlight-icon" src="images/petshop.png" />Petshop</a>
        </div>
        <div className="col-1">
          <a className="categories-link" href="#"><Image className="highlight-icon" src="images/farmacia.png" />Farmácia</a>
        </div>
      </div>
    </div>
  )
}
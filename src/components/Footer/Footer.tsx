import React from 'react';
import { Image } from 'react-bootstrap';
import { Facebook, Twitter, Youtube, Instagram } from 'react-bootstrap-icons';
import './Footer.css';

export function Footer() {
  return (
    <footer className="navbar-fixed-bottom main-footer">
      <div className="container footer-container">
        <div className="footer-border row">
          <div className="my-3 col">
            <ul>
              <h6 className="fw-bold">iFood</h6>
              <li><a href="#">Site Institucional</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">iFood Colômbia</a></li>
            </ul>
          </div>
          <div className="my-3 col">
            <ul>
              <h6 className="fw-bold">Descubra</h6>
              <li><a href="#">Cadastre seu Restaurante ou Mercado</a></li>
              <li><a href="#">iFood Shop</a></li>
              <li><a href="#">iFood Card</a></li>
              <li><a href="#">Blog iFood Empresas</a></li>
            </ul>
          </div>
          <div className="my-3 col">
            <ul>
              <h6 className="fw-bold">Social</h6>
              <li className="social-media"><a href="#"><Facebook /></a></li>
              <li className="social-media"><a href="#"><Twitter /></a></li>
              <li className="social-media"><a href="#"><Youtube /></a></li>
              <li className="social-media"><a href="#"><Instagram /></a></li>
            </ul>
          </div>
        </div>
        <div className="my-3 footer-bottom-display container">
          <div className="d-flex justify-content-center col-sm">
            <a href="#"><Image className="logo-ifood" src="images/logo-ifood.png" /></a>
          </div>
          <div className="col-sm">
            <p>© Copyright 2021 - iFood  Todos os direitos reservados iFood com Agência de Restaurantes Online S.A.</p>
            <p>CNPJ 14.380.200/0001-21 / Avenida dos Autonomistas, nº 1496, Vila Yara, Osasco/SP - CEP 06.020-902</p>
          </div>
          <div className="col-sm">
            <ul>
              <li><a href="#">Termos e condições de uso</a></li>
              <li><a href="#">Código de conduta</a></li>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Dicas de segurança</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
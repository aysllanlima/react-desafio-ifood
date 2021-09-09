import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Coluna 1 */}
          <div className="col-md-3 col-sm-6">
            <h5>Teste Um</h5>
            <ul className="list-unstyled">
              <li>Li 1</li>
              <li>Li 2</li>
              <li>Li 3</li>
            </ul>
          </div>
          {/* Coluna 2 */}
          <div className="col-md-3 col-sm-6">
            <h5>Teste Dois</h5>
            <ul className="list-unstyled">
              <li>Li 4</li>
              <li>Li 5</li>
              <li>Li 6</li>
            </ul>
          </div>
          {/* Coluna 3 */}
          <div className="col-md-3 col-sm-6">
            <h5>Teste Tres</h5>
            <ul className="list-unstyled">
              <li>Li 7</li>
              <li>Li 8</li>
              <li>Li 9</li>
            </ul>
          </div>
        </div>
        {/* Dentro do Container */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy; iFood - Todos direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
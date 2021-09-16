import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Search, GeoAlt } from 'react-bootstrap-icons';

export function HeaderModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="mx-4 size-button" variant="outline-secondary" onClick={handleShow}>
        Entregar em
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Onde você quer receber seu pedido?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="my-4 input-group">
            <span className="input-group-text border-0">
              <button className="border-0"><Search /></button>
            </span>
            <input type="search" className="form-control text-center" placeholder="Buscar endereço e número" aria-label="Search"
              aria-describedby="search-icon" />
          </div>
          <div className="my-4 input-group">
            <span className="input-group-text border-0">
              <button className="border-0"><GeoAlt /></button>
            </span>
            <button type="button" className="form-control">Usar minha localização</button>
          </div>
          <div>
            <h5 className="fw-bold text-center">Já tem um endereço salvo?</h5>
            <p className="text-center">Entre na sua conta para selecionar seu endereço.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Entrar ou cadastrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

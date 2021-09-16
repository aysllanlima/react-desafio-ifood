import React, { useState } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import { MenuItem } from '../Item/MenuItem';
import './ComboModal.css';

export function ComboModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container">
        <div className="row gap-4 justify-content-center justify-content-evenly">
          <Button className="mx-3 size-modal-button" variant="outline-secondary" onClick={handleShow}>
            <MenuItem
              title="MCOFERTA DUPLO BURGER BACON TESTE"
              description="Para quem ama bacon! Dois deliciosos hambúrgueres de carne 100% bovina."
              price="A partir de R$ 30,90"
              image="images/combo-oferta.png"
            />
          </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MCOFERTA DUPLO BURGER BACON</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="my-3 text-center">
            <Image className="combo-modal-size" src="images/combo-modal.png" />
          </div>
          <div>
            <p>Para quem ama bacon! Dois deliciosos hambúrgueres de carne 100% bovina, queijo derretido e irresistíveis fatias de bacon, acompanhamento e bebida.</p>
            <p className="fw-bold">R$ 30,90</p>
          </div>
          <div className="border text-center">
            <p className="fs-6 mx-3 my-1">Mcdonald's - Drive Teotonio (tot)</p>
            <p className="fs-6 mx-3 my-1">17 - 27 min - 4,99</p>
          </div>
          <div className="my-3 text-center">
            <p>Selecione um acompanhamento obrigatório:</p>
          </div>
          <div className="text-center">
            <select className="mx-5 form-select-sm" aria-label="Select">
              <option disabled selected>Acompanhamento</option>
              <option value="1">Duplo Burger Bacon</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="danger" onClick={handleClose}>Adicionar R$ 12,50</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import React from 'react';
import { CardItem } from './Item/CardItem';

export function CardGrid() {
  return (
    <div className="container">
      <div className="row gap-4 justify-content-evenly">
        <h5 className="fw-bold">Destaques</h5>
        <CardItem
          title="MÉQUI BOX PREMIUM - 4 MCOFERTAS MÉDIAS"
          description="São 4 Mcofertas para você compartilhar com quem preferir"
          price="A partir de R$ 130,00"
          image="images/4mequibox.png"
        />
        <CardItem
          title="3 SANDUÍCHES + 2 MCFRITAS MÉDIAS + 2 BEBIDAS"
          description="São 3 (três) sanduíches, 2 (duas) McFritas Médias e 2 (duas) Bebidas para compartilhar com quem preferir"
          price="A partir de R$ 65,00"
          image="images/3s2fm2b.png"
        />
        <CardItem
          title="MÉQUI BOX PREMIUM - 3 MCOFERTAS MÉDIAS"
          description="São 3 Mcofertas para você compartilhar com quem preferir."
          price="A partir de R$ 99,90"
          image="images/3mequibox.png"
        />
        <CardItem
          title="3 SANDUÍCHES + 3 MCFRITAS MÉDIAS"
          description="São 3 sanduíches e McFritas para compartilhar com quem preferir."
          price="A partir de R$ 64,50"
          image="images/3s3fm.png"
        />
        <CardItem
          title="SANDUÍCHE CLÁSSICO + BEBIDA"
          description="Escolha 1 (um) sanduíche entre as opções: Big Mac, Cheddar McMelt, Quarterão com queijo e McChicken e 1 (uma) bebidas 400ml."
          price="A partir de R$ 19,90"
          image="images/scb.png"
        />
        <CardItem
          title="2 MCOFERTAS MÉDIAS CLÁSSICAS"
          description="São 2 Mcofertas Médias Clássicas para você compartilhar com quem preferir."
          price="A partir de R$ 51,90"
          image="images/2mc.png"
        />
      </div>
    </div>
  )
}
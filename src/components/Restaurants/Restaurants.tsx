import React from 'react';
import { Image } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';
import { RestaurantItem } from './Item/RestaurantItem';
import './Restaurants.css';

export function Restaurants() {
  return (
    <div className="my-5 container">
      <h5 className="fw-bold">Lojas</h5>
      <div className="row row-cols-3">
        <RestaurantItem
          title="Premium Pizzaria"
          image="images/pizzaria.png"
          score="4.2"
          categorie="Pizza"
          kilometers="0.8"
          deliveryTime="24-48"
          price="28,90"
        />
        <RestaurantItem
          title="Feijoada Nobre"
          image="images/feijoada.png"
          score="4.3"
          categorie="Brasileira"
          kilometers="1.2"
          deliveryTime="28-50"
          price="18,90"
        />
        <RestaurantItem
          title="Extra"
          image="images/extra.png"
          score="4.0"
          categorie="Mercado"
          kilometers="2.3"
          deliveryTime="35-55"
          price="53,90"
        />
        <RestaurantItem
          title="Outback"
          image="images/outback.png"
          score="4.4"
          categorie="Carnes"
          kilometers="3.5"
          deliveryTime="21-38"
          price="29,90"
        />
        <RestaurantItem
          title="Chicanos Burger"
          image="images/chicanos.png"
          score="3.9"
          categorie="Lanches"
          kilometers="0.5"
          deliveryTime="19-28"
          price="16,90"
        />
        <RestaurantItem
          title="Subway"
          image="images/subway.png"
          score="4.2"
          categorie="Lanches"
          kilometers="2.3"
          deliveryTime="25-35"
          price="12,90"
        />
        <RestaurantItem
          title="Ragazzo"
          image="images/ragazzo.png"
          score="4.4"
          categorie="Lanches"
          kilometers="0.5"
          deliveryTime="12-25"
          price="8,90"
        />
        <RestaurantItem
          title="Asia Express"
          image="images/asia.png"
          score="4.4"
          categorie="Chinesa"
          kilometers="4.1"
          deliveryTime="32-42"
          price="15,90"
        />
        <RestaurantItem
          title="Mc Donalds"
          image="images/mcdonalds.png"
          score="4.0"
          categorie="Lanches"
          kilometers="0.5"
          deliveryTime="12-23"
          price="14,90"
        />
      </div>
    </div>
  )
}
import React from 'react'
import { MenuItem } from './Item/MenuItem';
import { ComboModal } from './ComboModal/ComboModal';
import './StoreMenu.css';

export function StoreMenu() {
  return (
    <div className="my-5 container">
      <div className="row gap-4 justify-content-center justify-content-evenly">
        <h5 className="fw-bold">McOfertas</h5>
        <MenuItem
          title="MCOFERTA BIG MAC"
          description="Dois hambúrgueres, alface, queijo e molho especial, cebola e picles num pão com gergelim, acompanhamento e bebida."
          price="A partir de R$ 31,90"
          image="images/bigmac.png"
        />
        <MenuItem
          title="MCOFERTA QUARTEIRÃO COM QUEIJO"
          description="Um hambúrguer feito com pura carne bovina, envolvida por duas fatias de queijo temperado com ketchup, mostarda, cebola e picles, acompanhamento e bebida."
          price="A partir de R$ 30,90"
          image="images/quarteirao.png"
        />
        <MenuItem
          title="MCOFERTA CHEDDAR MCMELT"
          description="Delicioso hambúrguer de carne bovina, queijo tipo cheddar derretido, cebola ao molho shoyu no pão escuro com gergelim, acompanhamento e bebida."
          price="A partir de R$ 30,90"
          image="images/cheddar.png"
        />
        <MenuItem
          title="MCOFERTA MCCHICKEN"
          description="Frango empanado e dourado com molho suave e cremoso, acompanhado de alface crocante num pão com gergelim, acompanhamento e bebida."
          price="A partir de R$ 30,50"
          image="images/mcchicken.png"
        />
        <MenuItem
          title="MCOFERTA MCNÍFICO BACON"
          description="Três saborosas fatias de bacon, cebola, hambúrguer de 120 gramas de carne bovina, queijo derretido, tomate e um trio de delícias: maionese, ketchup e mostarda."
          price="A partir de R$ 36,90"
          image="images/mcnifico.png"
        />
        <MenuItem
          title="MCOFERTA DUPLO BARBECUE"
          description="Dois hambúrgueres de carne 100% bovina, queijo derretido, cebola crispy e o delicioso molho barbecue, acompanhamento e bebida."
          price="A partir de R$ 30,90"
          image="images/barbecue.png"
        />
        <MenuItem
          title="MCOFERTA MCCHICKEN BACON"
          description="Frango empanado e dourado com molho suave e cremoso, acompanhado de alface fresquinho, fatias de bacon crocante num pão com gergelim, acompanhamento e bebida."
          price="A partir de R$ 31,50"
          image="images/mcchickenbacon.png"
        />
        <MenuItem
          title="MCOFERTA TRIPLO CHEESEBURGER"
          description="O sabor de Mcdonald’s triplamente delicioso. Com três hambúrgueres de carne 100% bovina, queijo derretido, cebola, picles, ketchup e mostarda, acompanhamento e bebida."
          price="A partir de R$ 30,90"
          image="images/cheeseburger.png"
        />
        <MenuItem
          title="MCOFERTA DUPLO BURGER BACON"
          description="Para quem ama bacon! Dois deliciosos hambúrgueres de carne 100% bovina."
          price="A partir de R$ 30,90"
          image="images/combo-oferta.png"
        />
        <MenuItem
          title="MCOFERTA CHICKEN MCNUGGETS"
          description="Os frangos empanados mais irresistíveis do Mcdonald’s com acompanhamento e bebida."
          price="A partir de R$ 28,90"
          image="images/mcnuggets.png"
        />
      </div>
    </div>
  )
}
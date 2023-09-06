import React, { useState } from 'react';
import './nav.css';
import styled from 'styled-components';
import Lapis from "../../icons/lapis.svg"
import relogio from "../../icons/relogio.svg"
import Livro from "../../icons/livro.svg"
import Licao from "../../icons/licao.svg"
import Usuario from "../../icons/usu.svg"
import CardButom from '../../Card/card';
import HorariosInfos from '../../Cronograma/CronogramasInfo';
import MaterialApoio from '../../MaterialDeApoio/MaterialDeApoio';
import DadosButom from '../../MeusDados/dados';

function mensagem() {
  alert('hello')

}



function Nav() {
  const [showCard, setShowCard] = useState(false);
  const [showDados, setShowDados] = useState(false);
  const [showCronograma, setShowCronograma] = useState(false);
  const [showMaterialApoio, setShowMaterialApoio] = useState(false);

  const handleCardClick = () => {
    setShowCard(!showCard);

    showDados ? setShowDados(!showDados) : setShowDados(showDados);
    showCronograma ? setShowCronograma(!showCronograma) : setShowCronograma(showCronograma);
    showMaterialApoio ? setShowMaterialApoio(!showMaterialApoio) : setShowMaterialApoio(showMaterialApoio);

  };

  const handleDadosClick = () => {
    setShowDados(!showDados);

    showCard ? setShowCard(!showCard) : setShowCard(showCard);
    showCronograma ? setShowCronograma(!showCronograma) : setShowCronograma(showCronograma);
    showMaterialApoio ? setShowMaterialApoio(!showMaterialApoio) : setShowMaterialApoio(showMaterialApoio);



  };

  const handlerCronogramaClick = () => {
    setShowCronograma(!showCronograma);

    showCard ? setShowCard(!showCard) : setShowCard(showCard);
    showDados ? setShowDados(!showDados) : setShowDados(showDados);
    showMaterialApoio ? setShowMaterialApoio(!showMaterialApoio) : setShowMaterialApoio(showMaterialApoio);


  };


  const handlerMaterialClick = () => {
    setShowMaterialApoio(!showMaterialApoio);

    showCard ? setShowCard(!showCard) : setShowCard(showCard);
    showDados ? setShowDados(!showDados) : setShowDados(showDados);
    showCronograma ? setShowCronograma(!showCronograma) : setShowCronograma(showCronograma);


  };


  return (
    <div id='est'>
      <div className="navbar-menu">

        <br />
        <br />
        <button onClick={handleCardClick}><img src={Lapis} />Notas e Atividades</button>
        <br />
        <br />
        <br />
        <button onClick={handlerCronogramaClick}><img src={relogio} />Cronograma</button>
        <br />
        <br />
        <br />
        <button onClick={handlerMaterialClick}><img src={Livro} />Material De Apoio</button>
        <br />
        <br />
        <br />
        <button onClick={handleDadosClick}><img src={Licao} />Meus Dados</button>
        <br />
        <br />
        <br />
        <button onClick={mensagem}><img src={Usuario} />Lançamento de Notas</button>




      </div>

      {
        showCard && (

          <div >
            <CardButom />
          </div>
        )



      }

      {
        showDados && (

          <div className='dados'>
            <DadosButom />
          </div>
        )



      }

      {
        showCronograma && (

          <div className='dados'>
            <HorariosInfos />
          </div>
        )



      }

      {
        showMaterialApoio && (

          <div className='material'>
            <MaterialApoio />
          </div>
        )



      }
    </div>
  )

} export default Nav;





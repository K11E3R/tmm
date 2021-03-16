import React , {useState} from 'react';
import './Accueil.css';
import Slideshow from './Slides.js';
import Slider from "react-slick";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom" ;
import SearchBar from 'material-ui-search-bar';
import { useHistory } from 'react-router-dom';

function Accueil() { 
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    duration: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  let history = useHistory();
	const [data, setData] = useState({ search: '' });

	const goSearch = (e) => {
		history.push({
			pathname: '/search/',
			search: '?search=' + data.search,
		});
		window.location.reload();
	};
    return (
      <div className="top">
        <div className="accueil">
            <Slideshow />
            <div className='suii'>
              <h1 className=''>Suivi des envois</h1> 
              <SearchBar
						value={data.search}
						onChange={(newValue) => setData({ search: newValue })}
						onRequestSearch={() => goSearch(data.search)}
					/>
            </div>
        </div> 
        <div className="Notre__metier">
          <div className="title__1">
            <h1>Notre métier depuis toujours !</h1>
            <p className="title__p">Transport Manager Maroc est le 1er réseau du courrier, colis et la logistique d’événements express depuis 12 octobre 2006, date de sa création par Joachim Hardy, avec une solide expérience dans le domaine du courrier express international à moindre coût.</p>
            <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
              <Button component={ Link } to="/FormPage">Nous connaitre</Button>
            </ButtonGroup>
          </div>
          <div className="title__img">
            <img src="../imageonline-co-logoadded-3.png" alt="" />
          </div>
        </div>
        <div className="expertise">
          <div className="title__img">
            <img src="http://www.tmmorocco.com/images/front2.png" alt="" />
          </div>
          <div className="title__1">
            <h1>L’expertise TMM</h1>
            <p className="title__p">Transport Manager Maroc dispose par son expertise de solutions logistiques globales. Découvrez la vaste gamme de services, de solutions d’expédition et de suivi que nous vous proposons pour répondre à vos besoins.</p>
            <Button component={ Link } to="/NosServices" variant="contained" color="secondary">Nos services</Button>
          </div>
        </div>
        <div className="partenaires">
        <div className="slider__partenaire">
        <Slider {...settings}>
          <div className="km">
            <img className="tst" src="../Dell_logo_2016.svg.png" alt="Dell" />
          </div>
          <div className="km">
          <img className="tst" src="../Logo-site-Pulse-secure-721x411.png" alt="Pulse" />
          </div>
          <div className="km">
          <img className="tst" src="../1200px-Cisco_logo_blue_2016.svg.png" alt="Cisco" />
          </div>
          <div className="km">
          <img className="tst" src="../forcepoint.png" alt="Force" />
          </div>
          <div className="km">
          <img className="tst" src="../langfr-200px-HP_logo_2012.svg.png" alt="Hp" />
          </div>
          <div className="km">
          <img className="tst" src="../ADVA_Optical_Networking_Logo.svg.png" alt="Adava" />
          </div>
          <div className="km">
          <img className="tst" src="../Arista_Logo.png" alt="Arista" />
          </div>
          <div className="km">
          <img className="tst" src="../nutanix.png" alt="Nutanix" />
          </div>
        </Slider>
        </div>
        </div>
        <div className="expedier">
          <div className="title__exp">
            <h1>Vous expédiez en toute tranquillité</h1>
            <p className="title__exp">Transport Manager Maroc assure l’acheminement rapide de vos documents et colis, en domicile-domicile, dans plus de 220 pays avec un délai de 24h à 72h avec des tarifs très économiques</p>
            <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
              <Button component={ Link } to="/NosServices">Nos services</Button>
              <Button component={ Link } to="/FaireEnvoi">Faire un envoi</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    )
}

export default Accueil

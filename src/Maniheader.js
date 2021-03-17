import React, { useState } from 'react'
import './Test.css'
import './SRbutton.css'
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter ,faInstagram } from "@fortawesome/free-brands-svg-icons"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom" ;
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SearchBar from 'material-ui-search-bar';
import { useHistory } from 'react-router-dom';
   

function Maniheader() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-41px";
        }
  prevScrollpos = currentScrollPos;
}
function myFunction() {
    var x = document.getElementById("navbar-center");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
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
        <div>
            <div className="my" id="navbar">
                <div className="header">
            {/* Info-Add-tel */}
                <h3 className="Adresse__">Adresse :</h3>
                <h3 className="Adresse">4, Rue de Berne, Rond Point d’Europe - Casablanca  </h3>
                <h3 className="tel">Tél : +(212) 522-272-730</h3>

            {/* social media */}
            <div className="Social__media">
                <FontAwesomeIcon className="Social__media__item" icon={faFacebook} />
                <FontAwesomeIcon className="Social__media__item" icon={faInstagram} />
                <FontAwesomeIcon className="Social__media__item" icon={faTwitter} />
            </div>
            
            {/*Morocco Flag */}
            <div className='Morocco'>
                <img className="flag__Morocco" src="../flag.png" alt=""></img>
                <h4 className="flag__title">Morocco</h4>
            </div>

            {/* language*/}
            <h3 className="Language">English</h3>
            <Link to="/SignSide" className="">
                <h3 className="Language">Se connecter</h3>
            </Link>
            </div>
                <Link to="/Accueil" className="">
                <a id="logo"><img src="../TMM__logo.png" alt=""/></a>
                </Link>
                <div className="nav-1">
                    <h2 className="Title" color="secondary" className="titre">WE DELIVER PEACE OF MIND</h2>
                    <br></br>
                <div className="nav" id="navbar-center">
                <SearchBar
						value={data.search}
						onChange={(newValue) => setData({ search: newValue })}
						onRequestSearch={() => goSearch(data.search)}
					/>
                <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
                    <Button component={ Link } to="/envois" className="B1">Faire un envoi</Button>
                    <Button component={ Link } to="/Gererenvois"className="B1">Gerer les envois</Button>
                    <Button component={ Link } to="/admin/create"className="B1">Creer un manifeste</Button>
                    
                </ButtonGroup>
                    
                    <button className="icon" onClick={myFunction}>
                        <FontAwesomeIcon className="Social__media__item" icon={faBars} />
                    </button>
                </div>

                </div> 
                <div id="navbar-right">
                <Link to="/Accueil" className="">
                    <a  id="logo"><img src="../envoi__logo_T-.png" alt="" /></a>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Maniheader

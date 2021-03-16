import React from "react";
import "./Footer.css";
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter ,faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom" ;

function Footer() {
  
  return (
    <div className="main-footer">
      <div className="container-f">
        <div className="row-f">
          {/* Column1 */}
          <div className="col-f">
            <h4 className="Tmm__F">TMM</h4>
            <img alt="logo" className="img_l" src="../TMM__logo-4.png" />
            <li>
              <h5>TMM est le 1er réseau du courrier, colis et la logistique d’événements express au Maroc et l'international .</h5>
            </li>
            <br/>
            <Link to="Nous">Nous connaitre</Link>
          </div>
          {/* Column2 */}
          <div className="col-f">
            
            <li >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8754152166925!2d-7.618405284716595!3d33.582583849780576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2a1774d8c25%3A0xab94922a4951321!2sTransport%20Manager%20Maroc%20-%20TMM!5e0!3m2!1sfr!2sma!4v1610503736235!5m2!1sfr!2sma" >
              </iframe>
              <h4>Adresse:</h4>
              <h5> 4, Rue de Berne Rond Point d’Europe 20100 Casablanca - Anfa Kingdom Of Morocco</h5>
            </li>
          </div>
          {/* Column3 */}
          <div className="col-f">
            <img className="Call_Tmm" src="../Call_Tmm.png" alt="Call"/>
            <br/>
            <h4>Contact</h4>
            <li >
              <h5>Email: info@tmmorocco.com Tél.: +212 (0) 522-272-730 / (0) 522-273-162 Fax: +212 (0) 522-272-691</h5>
            </li>
          </div>
        </div>
        <hr className="bar" />
        <div className="Social__media2">
                <FontAwesomeIcon className="Social__media__item" icon={faFacebook} />
                <FontAwesomeIcon className="Social__media__item" icon={faInstagram} />
                <FontAwesomeIcon className="Social__media__item" icon={faTwitter} />
        </div>
        <hr className="bar" />
        <div className="">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} TMM | Global Logistics | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
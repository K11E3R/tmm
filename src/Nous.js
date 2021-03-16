import React from 'react'
import './Nous.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Nous() {
    return (
        <div className="nous">
                <div className="Presentation">
                <h2 className="titl">Présentation de TMM</h2>
                <h3 className="presentation__text">
                    Transport Manager Maroc est le 1er réseau du courrier, colis et la logistique express d’événements
                    depuis 12 octobre 2006, date de sa création par Joachim Hardy, avec une solide expérience dans 
                    le domaine du courrier express international à moindre coût.
                    Transport Manager Maroc assure l’acheminement rapide de vos documents et colis, 
                    en domicile-domicile, dans plus de 220 pays avec un délai de 24h à 72h avec des tarifs très 
                    économiques.
                    Pour une raison simple, Transport Manager Maroc, est le transporteur Low Cost le moins cher
                    sur le marché de l’express depuis et vers le Maroc.
                    Un seul objectif, permettre aux entreprises et particuliers d’expédier à moindre coût.
                </h3>
                </div>
                <br/>
            <Container>
            <Col className="">
                 <Row className="">
                <img className="png__1" src="./hardy.png" alt="hardy" />
                </Row>
                <Row className="">
                <img className="png__1" src="./ISO.png" alt="hardy" />
                </Row> 
                
                
            </Col> 
            <Col className="">  
                <Row>
                <div className="presentation__ad">
                <h3 className="ti">Notre philosophie</h3>
                <h3 className="presentation__text">
                    Rigueur, adaptabilité sont les files conducteurs de nos futures collaborations, c’est pourquoi
                    nous nous engageons à partager un événement qui vous ressemble.
                </h3>
                </div>
                </Row>
                <Row>
                <div className="presentation__ad">
                <h3 className="ti">Notre savoir-faire</h3>
                <h3 className="presentation__text">
                    Définir vos besoins, élaborer votre projet, coordonner
                    votre événement. Du premier contact à la livraison de votre matériel, sur le lieu de votre manifestation, 
                    notre seul objectif est le succès de votre événement.
                </h3>
                </div>
                </Row>
                <Row className="finish">
                <div className="presentation__ad">
                <h3 className="ti">Notre défi</h3>
                <h3 className="presentation__text">
                    Créer un événement unique et gagner la confiance de nos clients afin de partager à chaque fois de nouveaux 
                    challenges. Nos atouts Disponibilité, réactivité, flexibilité et sécurité de votre matériel.
                </h3>
                <br/>
                </div>
                </Row>
                <br/>
            </Col> 
        </Container>
        <br/>
        </div>
    )
}

export default Nous

import React from 'react'
import './NosServices.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function NosServices() {
    
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        duration: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
      };

    return ( 
        <div className="services">
            <div className="service__presentation" >
                <h1 className="home_title">Nos services</h1>
                <div className="contai" >
                    <Slider {...settings}>
                    <div className="card-wrapper">
                        <div className="card">
                                <img className="services_img" src="../box-package.png" alt="" />
                            <div className="details">
                                <h2>Courier et colis express international</h2>
                                <br />
                                <h4>Un seul objectif, permettre aux entreprises et particuliers d’expédier à moindre coût.</h4>
                                <br/>
                                <a >En savoir plus</a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                                <img className="bagg" src="../Bagages.png" alt="" />
                            <div className="details">
                                <h2>TMM Bagages</h2>
                                <br />
                                <h4>Transport Manager Maroc, s’est spécialisé dans la livraison Express d’effets personnels à travers le monde .</h4>
                                <br />
                                <a >En savoir plus</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                                <img className="ecomm" src="../ecommerce.png" alt="" />
                            <div className="details">
                                <h2>E-commerçants & artisans du Maroc</h2>
                                <br />
                                <h4>Saviez-vous que les frais de port sont la 1ère cause d’abandon d’achat (panier) ?</h4>
                                <br />
                                <a >En savoir plus</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                                <img className="domestic" src="../images-4-domestique.png" alt="" />
                            <div className="details">
                                <h2>National Domestic Express</h2>
                                <br />
                                <h4>Uniquement pour les envois de moins de 30 Kg ne nécessitant pas de traitement spécifique .</h4>
                                <br />
                                <a href="#3">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                                <img className="chariot" src="../chariot-elevateur.png" alt="" />
                            <div className="details">
                                <h2>Logistique High Tech</h2>
                                <br/>
                                <h3>Un prestataire logistique unique dans son genre.</h3>
                                <br/>
                                <a href="#3">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                                <img className="evenements" src="../colis-reception.png" alt="" />
                            <div className="details">
                                <h2>Logistique Express d’événements</h2>
                                <br/>
                                <h3>la logistique express destinée aux manifestations, tel que les conférences, congres…</h3>
                                <br/>
                                <a href="#3">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                </Slider>
                </div>
            </div>
            <div className="service__Courier" id="1" >
                <div className="srvices__header">
                    <img className="service__logo" src="../box-package.png" alt="logo" />
                    <h1 className="title__service">Courier et colis express international</h1>
                </div>
                <div className="service__contenu__white">
                    <h2>Un seul objectif, permettre aux entreprises et particuliers d’expédier à moindre coût.</h2>
                    <br />
                    <p> 
                    <font size="+2" color="black">Transport Manager Maroc</font> assure l’acheminement rapide de vos documents et colis, de votre domicile au domicile du destinataire, <font color="black"> dans plus de 220 pays avec un délai de 24h à 72h</font> et des tarifs très économiques.
Pour une raison simple, Transport Manager Maroc, est <font color="black">le transporteur Low Cost le moins cher sur le marché</font> de l’express depuis et vers le Maroc.
Découvrez la vaste gamme de services, de solutions d’expédition et de suivi que nous vous proposons pour répondre à vos besoins.
Pour en savoir plus sur les services de livraison, contactez notre service client.
                    </p>
                    <br/>
                    <img src="../service.png" alt="service"/>
                    <p className="service__client">Service client Tél.: +212(0) 522-272-730 Email: info@tmmorocco.com</p>
                </div>
            </div>
            <div className="service__Bagages" id="2">
                <div className="srvices__header">
                    <img className="service__logo" src="../Bagages.png" alt="logo" />
                    <h1 className="title__service">TMM Bagages</h1>
                </div>
                <div className="service__contenu__black">
                    <h2>Transport Manager Maroc, s’est spécialisé dans la livraison Express d’effets personnels à travers le monde, dans le but de faciliter vos voyages.</h2>
                    <br />
                    <p>
                    Nous proposons ainsi l’acheminement des bagages non accompagnés par avion ou par route, jusqu’a votre destination finale.
Pour répondre au mieux à vos besoins, à votre budget, nous vous proposons différentes formules valables pour le fret aérien comme pour le fret routier.
Voici nos formules pour l’envoi et l’acheminement de vos bagages :
Domicile-Domicile
Formule Eco Domicile-Aéroport
Formule Sup Eco par route avec mise à disposition à l’agence (Uniquement UE)
Pour vos envois au sein de la Communauté Européenne et en France, le service d’expédition économique Domicile â€“ Domicile dont vous avez besoin.
Nous proposons notre prestation de transport de bagages pour toutes les destinations dans le monde, nous acheminons vos valises et autres effets personnels en toute sécurité.
                    </p>
                    <br/>
                    <img src="../service.png" alt="service"/>
                    <p className="service__client">Service client Tél.: +212(0) 522-272-730 Email: info@tmmorocco.com</p>
                </div>
            </div>
            <div className="service__Ecommerce" id="3">
                <div className="srvices__header">
                    <img className="service__logo" src="../ecommerce.png" alt="logo" />
                    <h1 className="title__service">E-commerçants & artisans du Maroc</h1>
                </div>
                <div className="service__contenu__white">
                    <h2>Saviez-vous que les frais de port sont la 1ère cause d’abandon d’achat (panier) ?</h2>
                    <h2>Vous perdez la moitié de vos acheteurs à cette étape cruciale !</h2>
                    <br />
                    <p>
                    Pour répondre à vos besoins, Transport Manager Maroc a intégré pour vous des offres ajustées et a développé des tarifs vous permettant de les incorporer dans vos prix de vente en ligne.
Adoptez les fonctionnalités et offres du site Transport Manager Maroc dans votre boutique en ligne afin d’optimiser votre temps et les frais de port.
Vous pourrez organiser toutes vos expéditions directement avec les outils de Transport Manager Maroc.
Votre boutique en ligne est construite sans partenaire logistique d’E-shipping, avec Transport Manager Maroc, gagnez des parts de marché, tout en faisant des économies sur la part transport.
Sans minimum de volume et sans engagement, vous pourrez proposer à vos acheteurs:
Un partenaire transport reconnu
Le choix entre plusieurs modes de livraison
Le suivi en ligne
                    </p>
                    <br/>
                    <img src="../service.png" alt="service"/>
                    <p className="service__client">Service client Tél.: +212(0) 522-272-730 Email: info@tmmorocco.com</p>
                </div>
            </div>
            <div className="service__Courier" id="1" >
                <div className="srvices__header">
                    <img className="service__logo" src="../images-4-domestique.png" alt="logo" />
                    <h1 className="title__service">National Domestic Express</h1>
                </div>
                <div className="service__contenu__white">
                    <h2>Uniquement pour les envois de moins de 30 Kg ne nécessitant pas de traitement spécifique et dont les dimensions ne dépassent pas 2 m en linéaire cumulé.</h2>
                    <br/>
                    <p>
                    Implanté au Maroc depuis dix ans, notre réseau regroupe des partenaires spécialisés dans le transport de proximité, pour approvisionner nos agents au petit matin.
                    </p>
                    <br/>
                    <ul><font color="black"> <font size="+2">Vos colis sont livrés en 24 h ou moins, selon les options retenues:</font> 
                        <li>Service Standard : Livraison le lendemain, avant 17 h</li>
                        <li>Service Express : Livraison le lendemain, avant 13 h</li>
                        <li>Service Priorité : Livraison le lendemain, avant 10 h</li>
                        </font>
                    </ul>
                    <br/>
                    <p>L’expertise TMM Particulier ou professionnel, quel que soit votre secteur d’activité, nos experts vous écoutent et vous proposent des solutions fiables et économiques.Transport Manager Maroc et ses partenaires mettent leur savoir-faire à votre service, pour vous offrir des prestations de qualité, adaptées à vos besoins.</p>
                    <br/>
                    <ul><font color="black">
                        <li> Colis de plus de 30 Kg</li>
                        <li> Achat sur Internet</li>
                        <li> Distribution de Courrier & Colis</li>
                        <li>Marchandise Fragile</li>
                        </font>
                    </ul>
                    <br />
                    <img src="../service.png" alt="service"/>
                    <p className="service__client">Service client Tél.: +212(0) 522-272-730 Email: info@tmmorocco.com</p>

                </div>
            </div>
            <div className="service__Bagages" id="2">
                <div className="srvices__header">
                    <img className="service__logo" src="../chariot-elevateur.png" alt="logo" />
                    <h1 className="title__service">Logistique High Tech</h1>
                </div>
                <div className="service__contenu__black">
                    <h2>Transport Manager Maroc Logistique œuvre pour devenir un prestataire logistique unique dans son genre.</h2>
                    <br />
                    <p>Avec une réputation de bonne valeur et un excellent service, dans le domaine de la logistique High Tech au Maroc, un choix pour de nombreux clients internationaux.
Nous offrons une solution logistique totalement intégrée, en créant des partenariats avec nos clients qui cherchent à repousser les limites de l’externalisation traditionnelle.
Notre clientèle se place sur un seul marché: la High Tech, nos clients nous respecte pour notre attitude sans compromis envers lalogistique de haute technologie.
De composants vitaux d’oncologie, aux guichets automatiques, systèmes réseaux, TMM offre une gamme multi-facettes de solutions de services de messagerie, à l’entreposage et la gestion de la distribution.
                    </p>
                    <br/>
                    <img src="../service.png" alt="service"/>
                    <p className="service__client">Service client Tél.: +212(0) 522-272-730 Email: info@tmmorocco.com</p>
                </div>
            </div>
            <div className="service__Ecommerce" id="3">
                <div className="srvices__header">
                    <img className="service__logo" src="../colis-reception.png" alt="logo" />
                    <h1 className="title__service">Logistique Express d’événements</h1>
                </div>
                <div className="service__contenu__white">
                    <h2>Transport Manager Maroc, s’est fait un nom dans la logistique express destinée aux manifestations, tel que les conférences, congres, tournage des films, shooting…</h2>
                    <br />
                    <p>
                    Nous mettons notre savoir-faire à votre disposition pour l’organisation du transport de votre matériel, de n’importe quel pays dans le monde, et le mettre à votre disposition à votre lieu de l’événement au Maroc.
Transport Manager Maroc est à votre service, pour vous offrir des prestations de qualité, adaptées à vos besoins.
Nous assurons aussi le retour de tout matériel à son pays d’origine après chaque événement.
                    </p>
                    <br/>
                    <img src="../service.png" alt="service"/>
                    <p className="service__client">Service client Tél.: +212(0) 522-272-730 Email: info@tmmorocco.com</p>
                </div>
            </div>
        </div>
    )
}

export default NosServices

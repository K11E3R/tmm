import React from 'react'
import './ConseilsPratiques.css'

function ConseilsPratiques() {
    return (
        <div className="conseils">
            <div id="Web_1920__17">
                <svg class="Trac_11" viewBox="0 0 2361 1023">
                    <path id="Trac_11" d="M 0 1023 L 0 0 L 2361 0 L 0 1023 Z"></path>
                </svg>
                <img alt="conse" id="ID131-512" src="../Conseil-p.png"/>
                <div id="Conseils_pratiques">
                    <span>Conseils pratiques</span>
                </div>
                <div id="Quelques_rgles_et_conseils_pra">
                    <span>Quelques règles et conseils pratiques<br/>à suivre pour réussir vos envois.</span>
                </div>
            </div>
            <div className="conseils_p_1">
                <br/>
                <div className="conseils_p_title_1">
                    <h2>I - Règles à respecter au départ : </h2>
                </div>
                <div className="conseils_p_det_1">
                    <li><h3 > <font color="red">Vérifier que le poids et les dimensions de l'envoi sont justes</font></h3></li>
                    <br/>
                    <div className="det__conseils">
                    <p >Les dimensions et le poids de votre envoi doivent être conformes à la réalité.
                        Dans le cas contraire, l'envoi sera bloqué par le transporteur et sa récupération
                        sera à votre charge sans remboursement de la prestation payée.
                    </p>
                    </div>
                    <br/>
                    <li><h3> <font color="red">Vérifier que le contenu de l'envoi est bien autorisé et solidement emballé</font></h3></li>
                    <br/>
                    <div className="det__conseils">
                    <p>Le contenu de l'envoi ne doit pas être interdit.Vous devez consulter la liste de marchandises interdites.
                        L'envoi doit obligatoirement être solidement emballé ou préparé de manière à assurer une manutention et un déplacement
                        sans risque pour le contenu de l'envoi, mais aussi pour le sécurité du personnel de transport.Si l'expéditeur ne 
                        respecte pas les règles d'emballage, l'envoi sera bloqué par le transporteur et sa récupération
                        sera à votre charge sans remboursement de la prestation payée.
                    </p>
                    </div>
                    <br/>
                    <li><h3> <font color="red">Vérifier que les adresses du destinataire et de destination sont précises et réelles</font></h3></li>
                    <br/>
                    <div className="det__conseils">
                    <p>Les adresses doivent être écrites uniquement en lettres majuscules, réelles et exacts.Si le transporteur ne peut exécuter
                    la livraison,facilememt,votre envoi prendra du retard pour réaliser la livraison.Votre envoi sera alors bloqué au point distribution
                    et livraison.
                    </p>
                    <br/>
                    <p>Un retard de livraison du fait de l'absence du destinataire ou d'informations incoplètes n'est pas de la responsabilité du transporteur.
                        Pour éviter tout retard ou livraison ratée,l'utilisateur doit:
                        <li>Indiquer un numéro de téléphone du destinataire</li>
                        <li>Donner des informations utiles et précises pour l'enlévement ou la livraison</li>

                    </p>
                    </div>
                </div>
            </div>
            <div className="conseils_p_2">
                    <br/>
                    <div className="conseils_p_title_1">
                        <h2>II - Mesurer les dimensions de votre envoi : </h2>
                    </div>
                    <br/>
                    <img className="conseils_p_det_2" src="../conseilsFiche2.png" alt="fiche2"/>
            </div>
            <div className="conseils_p_3">
                <br/>
                <div className="conseils_p_title_1">
                    <h2>III - Liste des marchandises règlementées : </h2>
                </div>
                <img className="danger__photo" src="../danger.png" alt="danger!!"/>
                <div className="conseils_p_det_3">
                <h3>Les marchandises interdites ou hautement réglementées (sous peine de destruction de la marchandise sans préavis par les transporteurs).</h3>
                <br/>
                <h3>Les produits ci-dessous font l'objet d'autorisations particulières ou sont interdits (sauf conditions spécifiques des sociétés de transport) vers toutes destinations internationales. </h3>
                <br/>
                <div className="conseils_marchandises">
                <font color="black">
                <li>Les matières biologiques périssables,infectieuses ou non infectieuses.</li>
                <li>Les organes et dépouilles humaines.</li>
                <li>Les stupéfiants et les matières psychotropes.</li>
                <li>les objets obscènes ou immoraux.</li>
                <li>Les produits de contrefaçon.</li>
                <li>Les animaux vivants (sauf conditions spécifiques du transporteur).</li>
                <li>Les animaux morts</li>
                <li>Les matières explosives (y compris les munitions inertes ou factices),inflammables(alcools,parfums) radioactives ou corrosives.</li>
                <li>Les matières dangereuses telles que les gaz comprimés ou tout objet contenant du gaz ou de l'air comprimé ou liquide (produits aérosols,canots de sauvetage,extincteurs..).</li>
                <li>Les bijoux, métaux précieux, billets de banque, valeurs au porteur, or ou argent,et autres objets de valeur (sauf conditions spécifiques du transporteur).</li>
                <li>Les objets qui par leur nature ou leur emballage peuvent présenter un danger pour les agents, salir ou détériorer les autres envois ou l'équipement du transporteur.</li>
                </font>
                </div>
                </div>
            </div>
            <div className="conseils_p_4">
                <br/>
                <div className="conseils_p_title_1">
                    <h2>IV - Documents obligatoires :</h2>
                </div>
                <img className="conseils_p_det_2" src="../conseilsFiche4.png" alt="fiche2"/>
            </div>
        </div>
    )
}

export default ConseilsPratiques

import React, { Component } from 'react'
import './FaireEnvoi.css'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class FaireEnvoi extends Component {
    state = { 
        details: [], 
        nom: "", 
        societe: "",
        adresse1: "",
        adresse2: "", 
        codep:"",
        pays:"",
        ville:"",
        codet:"",
        tele:"",
        fax:"",
        email:"",
        noma: "", 
        societea: "",
        adresse1a: "",
        adresse2a: "", 
        codepa:"",
        paysa:"",
        villea:"",
        codeta:"",
        telea:"",
        faxa:"",
        emaila:"",
    }; 

    
    handleInput = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value, 
        }); 
    }; 
  
    handleSubmit = (e) => { 
        e.preventDefault(); 
  
        axios 
            .post("`admin/create/`", { 
                nom: this.state.nom, 
                societe: this.state.societe,
                adresse1: this.state.adresse1,
                adresse2: this.state.adresse2,
                codep: this.state.codep,
                pays: this.state.pays,
                ville: this.state.ville,
                codet: this.state.codet,
                tele: this.state.tele,
                fax: this.state.fax,
                email: this.state.email,
                noma: this.state.noma, 
                societea: this.state.societea,
                adresse1a: this.state.adresse1a,
                adresse2a: this.state.adresse2a,
                codepa: this.state.codepa,
                paysa: this.state.paysa,
                villea: this.state.villea,
                codeta: this.state.codeta,
                telea: this.state.telea,
                faxa: this.state.faxa,
                emaila: this.state.emaila,

            }) 
            .then((res) => { 
                this.setState({ 
                    nom: "", 
        societe: "",
        adresse1: "",
        adresse2: "", 
        codep:"",
        pays:"",
        ville:"",
        codet:"",
        tele:"",
        fax:"",
        email:"",
        noma: "", 
        societea: "",
        adresse1a: "",
        adresse2a: "", 
        codepa:"",
        paysa:"",
        villea:"",
        codeta:"",
        telea:"",
        faxa:"",
        emaila:"",
                }); 
            }) 
            .catch((err) => {}); 
    }; 
    render() {
       
    return (
        <form className="faire__envoi" onSubmit={this.handleSubmit}>
            <div className="envoi__header">
                <h1 className="en">Faire un envoi</h1>
            </div>
            <br/>
            <hr/>
            <div className="de__a">
            <div className="form" >
                <h1>DE :</h1>
                <br />
                <div className="form__">
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Nom"
                    label="Nom et prénom"
                    autoComplete="Nom"
                    autoFocus
                    value={this.state.nom} 
                    name="nom"
                    onChange={this.handleInput}/>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Société"
                    autoComplete="email"
                    autoFocus
                    value={this.state.societe} 
                    name="societe"
                    onChange={this.handleInput}/>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Adresse 1"
                    autoComplete="email"
                    autoFocus
                    value={this.state.adresse1} 
                    name="adresse1"
                    onChange={this.handleInput}/>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Adresse 2"
                    autoComplete="email"
                    autoFocus
                    value={this.state.adresse2} 
                    name="adresse2"
                    onChange={this.handleInput}/>
                    <div className="code">
                        <div className="code__">
                        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Postal"
                    label="Code Postal"
                    name="codep"
                    autoComplete="Code-postal"
                    autoFocus 
                    value={this.state.codep}
                    onChange={this.handleInput}/>
                        </div>
                        <div className="code__">
                        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Pays"
                    label="Pays"
                    name="pays"
                    autoComplete="Pays"
                    autoFocus
                    value={this.state.pays} 
                    onChange={this.handleInput}/>
                        </div>
                        <div className="code__">
                        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Ville"
                    label="Ville"
                    name="ville"
                    autoComplete="Ville"
                    autoFocus
                    value={this.state.ville} 
                    onChange={this.handleInput}/>
                        </div>
                    </div>
                    <div className="code">
                        <div className="code__">
                        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Code"
                    label="Code "
                    name="codet"
                    autoComplete="Code"
                    autoFocus
                    value={this.state.codet} 
                    onChange={this.handleInput}/>
                        </div>
                        <div className="code__">
                        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Telephone"
                    label="Téléphone"
                    name="tele"
                    autoComplete="Telephone"
                    autoFocus
                    value={this.state.tele} 
                    onChange={this.handleInput}/>
                        </div>
                        <div className="code__">
                        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Fax"
                    label="Fax"
                    name="fax"
                    autoComplete="Fax"
                    autoFocus
                    value={this.state.fax} 
                    onChange={this.handleInput}/>
                        </div>
                    </div>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    value={this.state.email} 
                    onChange={this.handleInput}
                    autoFocus/>
                </div>
                
            </div>
            <hr />
            <div className="form" >
                <h1>A :</h1>
                <br />
                <div className="form__">
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Nom et prénom"
                    autoComplete="email"
                    autoFocus
                    value={this.state.noma} 
                    name="noma"
                    onChange={this.handleInput}/>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Société"
                    autoComplete="email"
                    autoFocusvalue={this.state.societea} 
                    name="societea"
                    onChange={this.handleInput}/>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Adresse 1"
                    autoComplete="email"
                    autoFocus
                    value={this.state.adresse1a} 
                    name="adresse1a"
                    onChange={this.handleInput}/>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Adresse 2"
                    autoComplete="email"
                    autoFocus
                    value={this.state.adresse2a} 
                    name="adresse2a"
                    onChange={this.handleInput}/>
                    <div className="code">
                    <div className="code__">
                        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Postal"
                    label="Code Postal"
                    name="codepa"
                    autoComplete="Code-postal"
                    autoFocus 
                    value={this.state.codepa} 
                    onChange={this.handleInput}/>
                        </div>
                        <div className="code__">
                        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Pays"
                    label="Pays"
                    name="paysa"
                    autoComplete="Pays"
                    autoFocus
                    value={this.state.paysa} 
                    onChange={this.handleInput}/>
                        </div>
                        <div className="code__">
                        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Ville"
                    label="Ville"
                    name="villea"
                    autoComplete="Ville"
                    autoFocus
                    value={this.state.villea} 
                    onChange={this.handleInput}/>
                        </div>
                    </div>
                    <div className="code">
                        <div className="code__">
                        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Code"
                    label="Code "
                    name="codeta"
                    autoComplete="Code"
                    autoFocus
                    value={this.state.codeta} 
                    onChange={this.handleInput}/>
                        </div>
                        <div className="code__">
                        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Telephone"
                    label="Téléphone"
                    name="telea"
                    autoComplete="Telephone"
                    autoFocus
                    value={this.state.telea} 
                    onChange={this.handleInput}/>
                        </div>
                        <div className="code__">
                        <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Fax"
                    label="Fax"
                    name="faxa"
                    autoComplete="Fax"
                    autoFocus
                    value={this.state.faxa} 
                    onChange={this.handleInput}/>
                        </div>
                    </div>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="emaila"
                    value={this.state.emaila} 
                    onChange={this.handleInput}
                    autoComplete="emaila"
                    autoFocus/>
                </div> 
            </div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="expedition">
            <h1>Détails de l’expédition :</h1>
            <br/>
            <hr/>
            <br/>
            <div className="details__inf">
            <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Type"
                    label="Type : Colis ou Documents"
                    name="Colis ou Documents"
                    autoComplete="Colis-Documents"
                    autoFocus
                   />
            <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Récapitulatif du contenu de votre expédition :"
                    name="Nom et prénom"
                    autoComplete="email"
                    autoFocus
                   />
            <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Référence / Etiquette d’expédition :"
                    name="Nom et prénom"
                    autoComplete="email"
                    autoFocus
                   />
            <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="La valeur de votre expédition :"
                    name="Nom et prénom"
                    autoComplete="email"
                    autoFocus
                   />
            </div>
            <div className="sui">
            <Button type="submit" variant="contained" color="secondary" to="/admin/">Suivant</Button>
            </div> 
        </div>
        </form>
       
        
    )
}
}

export default FaireEnvoi

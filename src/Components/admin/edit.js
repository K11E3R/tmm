import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory, useParams } from 'react-router-dom';
//MaterialUI
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/esm/Row';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Create() {
	const history = useHistory();
	const { id } = useParams();
	const initialFormData = Object.freeze({
		id: '',
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
		category:"",
		poids: "",
		largeur: "",
		longueur:"",
		hauteur: "",
		valeur:"",
		descriptif:"",
		instruction:"",
		nbcolis:"",
	});

	const [formData, updateFormData] = useState(initialFormData);

	useEffect(() => {
		axiosInstance.get('/admin/edit/postdetail/' + id + '/').then((res) => {
			updateFormData({
				...formData,
				['nom']: res.data.nom,
				['societe']: res.data.societe,
				['adresse1']: res.data.adresse1,
				['adresse2']: res.data.adresse2,
				['codep']: res.data.codep,
				['pays']: res.data.pays,
				['ville']: res.data.ville,
				['codet']: res.data.codet,
				['tele']: res.data.tele,
				['fax']: res.data.fax,
				['email']: res.data.email,
				['noma']: res.data.noma,
				['societea']: res.data.societea,
				['adresse1a']: res.data.adresse1a,
				['adresse2a']: res.data.adresse2a,
				['codepa']: res.data.codepa,
				['paysa']: res.data.paysa,
				['villea']: res.data.villea,
				['codeta']: res.data.codeta,
				['telea']: res.data.telea,
				['faxa']: res.data.faxa,
				['emaila']: res.data.emaila,
				['category']: res.data.category,
				['poids']: res.data.poids,
				['largeur']: res.data.largeur,
				['longueur']: res.data.longueur,
				['hauteur']: res.data.hauteur,
				['valeur']: res.data.valeur,
				['descriptif']: res.data.descriptif,
				['instruction']: res.data.instruction,
				['nbcolis']: res.data.nbcolis,
			});
			console.log(res.data);
		});
	}, [updateFormData]);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance.put(`admin/edit/` + id + '/', {
			    nom: formData.nom,
                societe: formData.societe,
                adresse1: formData.adresse1,
                adresse2: formData.adresse2,
                pays: formData.pays,
                codep: formData.codep,
                codet: formData.codet,
                tele: formData.tele,
                fax: formData.fax,
				author: 1,
				email: formData.email,
                ville: formData.ville,
                noma: formData.noma,
                societea: formData.societea,
                adresse1a: formData.adresse1a,
                adresse2a: formData.adresse2a,
                paysa: formData.paysa,
                codepa: formData.codepa,
                codeta: formData.codeta,
                telea: formData.telea,
                faxa: formData.faxa,
				emaila: formData.emaila,
				villea: formData.villea,
				category: formData.category,
				nbcolis: formData.nbcolis,
				poids: formData.poids,
				largeur: formData.largeur,
				longueur: formData.longueur,
				hauteur: formData.hauteur,
				valeur: formData.valeur,
				descriptif: formData.descriptif,
				instruction: formData.instruction,
				author: 1,
			 
		});
		history.push({
			pathname: '/Gererenvois/',
		});
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Edit Post
				</Typography>
				<form className={classes.form} noValidate>
				<Grid container spacing={2}>
					<Grid container spacing={2} >
						<Grid item xs={12}>
						<br/>
						<h2>Expéditeur :</h2>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="nom"
								label="Nom et prenom :"
								name="nom"
								autoComplete="nom"
								value={formData.nom}
								onChange={handleChange}
							/> 
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="societe"
								label="Societe :"
								name="societe"
								autoComplete="societe"
								value={formData.societe}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="adresse1"
								label="Adresse 1 :"
								name="adresse1"
								autoComplete="adresse"
								value={formData.adresse1}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="adresse2"
								label="Adresse 2 :"
								name="adresse2"
								autoComplete="adresse"
								value={formData.adresse2}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={22}>
							<Row >
							<TextField
								variant="outlined"
								required
								fullWidth
								id="codep"
								label="Code Postal :"
								name="codep"
								autoComplete="codep"
								value={formData.codep}
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="pays"
								label="Pays :"
								name="pays"
								autoComplete="pays"
								value={formData.pays}
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="ville"
								label="Ville :"
								name="ville"
								autoComplete="ville"
								value={formData.ville}
								onChange={handleChange}
							/> 
							</Row>
						</Grid>
						<Grid item xs={12}>
							<Row >
							<TextField
								variant="outlined"
								required
								fullWidth
								id="codet"
								label="Code :"
								name="codet"
								autoComplete="codet"
								value={formData.codet}
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="telephone"
								label="Telephone :"
								name="tele"
								autoComplete="tele"
								value={formData.tele}
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="fax"
								label="Fax :"
								name="fax"
								value={formData.fax}
								autoComplete="fax"
								onChange={handleChange}
							/> 
							</Row>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email :"
								name="email"
								autoComplete="email"
								value={formData.email}
								onChange={handleChange}
							/>
						</Grid>
						
						
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<br/>
							<h2>Déstinataire :</h2>	
							<TextField
								variant="outlined"
								required
								fullWidth
								id="noma"
								label="Nom et prenom :"
								name="noma"
								autoComplete="nom"
								value={formData.noma}
								onChange={handleChange}
							/> 
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="societea"
								label="Societe :"
								name="societea"
								autoComplete="societe"
								value={formData.societea}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="adresse1a"
								label="Adresse 1 :"
								name="adresse1a"
								autoComplete="adresse"
								value={formData.adresse1a}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="adresse2a"
								label="Adresse 2 :"
								name="adresse2a"
								autoComplete="adresse"
								value={formData.adresse2a}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<Row >
							<TextField
								variant="outlined"
								required
								fullWidth
								id="codepa"
								label="Code Postal :"
								name="codepa"
								autoComplete="codepa"
								value={formData.codepa}
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="paysa"
								label="Pays :"
								name="paysa"
								autoComplete="paysa"
								value={formData.paysa}
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="villea"
								label="Ville :"
								name="villea"
								autoComplete="villea"
								value={formData.villea}
								onChange={handleChange}
							/> 
							</Row>
						</Grid>
						<Grid item xs={12}>
							<Row >
							<TextField
								variant="outlined"
								required
								fullWidth
								id="codeta"
								label="Code :"
								name="codeta"
								autoComplete="codeta"
								value={formData.codeta}
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="telephonea"
								label="Telephone :"
								name="telea"
								autoComplete="telea"
								value={formData.telea}
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="faxa"
								label="Fax :"
								name="faxa"
								autoComplete="faxa"
								value={formData.faxa}
								onChange={handleChange}
							/> 
							</Row>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email :"
								name="emaila"
								autoComplete="emaila"
								value={formData.emaila}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2} >
						<Grid item xs={12}>
							<br/>
							<h2>Détails de l’expédition :</h2>

							<TextField
								variant="outlined"
								required
								fullWidth
								id="descriptif"
								label="Descriptif :"
								name="descriptif"
								autoComplete="descriptif"
								value={formData.descriptif}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<Row>
						<TextField
								variant="outlined"
								required
								fullWidth
								id="Nombre de colis"
								label="Nb de colis :"
								name="nbcolis"
								autoComplete="nbcolis"
								value={formData.nbcolis}
								onChange={handleChange}
							/>
						<TextField
								variant="outlined"
								required
								fullWidth
								id="poids"
								label="Poids (Kg) :"
								name="poids"
								autoComplete="poids"
								value={formData.poids}
								onChange={handleChange}
							/>
						<TextField
								variant="outlined"
								required
								fullWidth
								id="largeur"
								label="Largeur (cm) :"
								name="largeur"
								autoComplete="largeur"
								value={formData.largeur}
								onChange={handleChange}
							/>
						</Row>
						</Grid>
						<Grid item xs={12}>
						<Row>
						<TextField
								variant="outlined"
								required
								fullWidth
								id="longueur"
								label="Longueur (cm):"
								name="longueur"
								autoComplete="longueur"
								value={formData.longueur}
								onChange={handleChange}
							/>
						<TextField
								variant="outlined"
								required
								fullWidth
								id="hauteur"
								label="Hauteur (cm) :"
								name="hauteur"
								autoComplete="hauteur"
								value={formData.hauteur}
								onChange={handleChange}
							/>
						<TextField
								variant="outlined"
								required
								fullWidth
								id="valeur"
								label="Valeur :"
								name="valeur"
								autoComplete="valeur"
								value={formData.valeur}
								onChange={handleChange}
							/>
						</Row>
						</Grid>
						<Grid item xs={12}>
							
						</Grid>
					</Grid>
					</Grid>
					<Button
						type="button"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Update Post
					</Button>
				</form>
			</div>
		</Container>
	);
}
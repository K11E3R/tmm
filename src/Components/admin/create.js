import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/esm/Row';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(2),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(6, 0, 6),
	},
}));

export default function Create() {
	function slugify(string) {
		const a =
			'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
		const b =
			'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
		const p = new RegExp(a.split('').join('|'), 'g');

		return string
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
			.replace(/&/g, '-and-') // Replace & with 'and'
			.replace(/[^\w\-]+/g, '') // Remove all non-word characters
			.replace(/\-\-+/g, '-') // Replace multiple - with single -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, ''); // Trim - from end of text
	}

	const history = useHistory();
	const initialFormData = Object.freeze({
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

	const handleChange = (e) => {
		if ([e.target.name] == 'nom') {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
				['nom']: slugify(e.target.value.trim()),
			});setValue(e.target.category);
		} else {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
			});setValue(e.target.category);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.post(`admin/create/`, {
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
			})
			.then((res) => {
				history.push('/Gererenvois/');
			});
    };
    const [category, setValue] = React.useState('Colis');
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Expedition :
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<h2>Type :</h2>
						<FormControl component="fieldset">
							<RadioGroup aria-label="gender" name="category" category={category} onChange={handleChange}>
								<FormControlLabel value="colis" control={<Radio />} label="Colis" />
								<FormControlLabel value="marchandises" control={<Radio />} label="Marchandises" />
							</RadioGroup>
						</FormControl>
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
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="fax"
								label="Fax :"
								name="fax"
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
								autoComplete="codep"
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="paysa"
								label="Pays :"
								name="paysa"
								autoComplete="pays"
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="villea"
								label="Ville :"
								name="villea"
								autoComplete="ville"
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
								autoComplete="codet"
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="telephonea"
								label="Telephone :"
								name="telea"
								autoComplete="tele"
								onChange={handleChange}
							/> 
							<TextField
								variant="outlined"
								required
								fullWidth
								id="faxa"
								label="Fax :"
								name="faxa"
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
								name="emaila"
								autoComplete="email"
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
								onChange={handleChange}
							/>
						</Row>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="instruction"
								label="Instruction de livraison :"
								name="instruction"
								autoComplete="instruction"
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					</Grid>
					
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Create Expedition
					</Button>
				</form>
			</div>
		</Container>
	);
}

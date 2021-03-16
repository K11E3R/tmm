import React from 'react'
import './Manifeste.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      maxWidth: 445,
      marginInline: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    media: {
      height: 190,
    },
  });
function Manifeste() {
    const classes = useStyles();
    return (
        <div className="manifeste">
            <div className="cardd">
            <Card className={classes.root}>
                <Link to="/">
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="../compte.png"
                    title="Contemplative Reptile"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Gerer les comptes
                    </Typography>
                </CardContent>
                </CardActionArea>
                </Link>
            </Card>
            <Card className={classes.root}>
                <Link to="/Gererenvois">
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="../cargo.png"
                    title="Contemplative Reptile"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Gerer les envois
                    </Typography>
                </CardContent>
                </CardActionArea>
                </Link>
            </Card>
            <Card className={classes.root}>
                <Link to="/">
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="../manifeste.png"
                    title="Contemplative Reptile"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Créer un manifeste 
                    </Typography>
                </CardContent>
                </CardActionArea>
                </Link>
            </Card>
            <Card className={classes.root}>
                <Link to="/">
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="../mail.png"
                    title="Contemplative Reptile"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Carnet d'adresse 
                    </Typography>
                </CardContent>
                </CardActionArea>
                </Link>
            </Card>

            </div>
            
            
        </div>
    )
}

export default Manifeste

import React from 'react'
import './Test.css'
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter ,faInstagram } from "@fortawesome/free-brands-svg-icons"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom" ;
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

function Test() {
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

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  

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
                <a id="logo"><img src="../TMM__logo-4.png" alt=""/></a>
                </Link>
                <div className="nav-1">
                    <h2 className="Title" color="secondary">WE DELIVER PEACE OF MIND</h2>
                    <br></br>
                <div className="nav" id="navbar-center">
                <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">

                    <Button component={ Link } to="/Nous">Qui sommes-nous?</Button>
                    <Button component={ Link } to="/NosServices">Nos services</Button>
                    <Button component={ Link } to="/FaireEnvoi">Faire un envoi</Button>
                    <Button component={ Link } to="/ConseilsPratiques">Conseils pratiques</Button>
                </ButtonGroup>
                    
                    <button className="icon" onClick={myFunction}>
                        <FontAwesomeIcon className="Social__media__item" icon={faBars} />
                    </button>
                </div>

                </div> 
                <div id="navbar-right">
                    <a href="#" id="logo"><img src="../envoi__logo_T-.png" alt="" /></a>
                </div>
                <div className="drawe">
      {[ 'Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
            </div>
            


        </div>
            
            
    )

}

export default Test

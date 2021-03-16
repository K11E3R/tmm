import React from 'react';
import "./List.css";
import { Link } from 'react-router-dom';

class List extends React.Component{
  /* 
  constructor(props) {
        super(props);
        this.state = {
          data: [],
          loaded: false,
          placeholder: "Loading"
        };
      }
      
    
      componentDidMount() {
        fetch("http://localhost:8000/wel/")
          .then(response => {
            if (response.status > 400) {
              return this.setState(() => {
                return { placeholder: "Something went wrong!" };
              });
            }
            return response.json();
          })
          .then(data => {
            this.setState(() => {
              return {
                data,
                loaded: true
              };
            });
          });
      }

    render(){
        return (
            <ul>
                <table className="table_list" >
                        <tr>
                            <th>Réf :</th>
                            <th>Expéditeur :</th>
                            <th>Date d'envoi :</th>
                            <th>Destinataire :</th>
                            <th>Pays :</th>
                            <th>Action :</th>
                        </tr>
              {this.state.data.map(contact => {
                return (
                        <tr  >
                            <td>{20210000 + contact.id}</td>
                            <td>{contact.nom}</td>
                            <td>{contact.date_t} </td>
                            <td>{contact.noma}</td>
                            <td>{contact.paysa}</td>
                            <td><Link to={'/Update'+contact.id}>modifier</Link></td>
                        </tr>
                  
                );
              })}
              </table>
            </ul>
          );
        }*/
      }

export default List;
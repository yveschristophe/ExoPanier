import React, { Component } from 'react';
import './App.css';


const Sell = [
  {  prix : 10,nom : "yaourt",src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOD4gbeVGim_9f-ba4jD_nSSK9nVkod18t7FN2oTdFTWa6So7"},
  {  prix : 3,nom : "pain",  src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1g2SlP48v-0j3SUbJMJXwQvfGwDV88JiihzElU_akXTOuytFIFw"},
  {  prix : 1,nom : "chocolat",src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_naJ-Mqs2MhDTRYLwf1_sjt7m2D4mF2HU2X2_MwcAoVi5eti"}
];

class App extends Component {
state={panier :[],}
  Test =  produit =>{
    this.setState({
      panier:[...this.state.panier, produit.nom]
    })
  }

  render() {

    return (
      <div>
      <header className="nav">
          <i tab={this.state.panier} className="fa fa-shopping-cart" aria-hidden="true" ></i>
          {this.state.panier.map((produit,i)=>{
            return(
              console.log(this.state.panier),
              <li key={i}><p>{produit.nom}</p></li>
            )
          })}
      </header>
      <div className="ContainerProduit">

    {Sell.map((produit,index)=>{
      return(
        <div className="App" key={index}>
          <img src={produit.src} alt={produit.nom}/>
          <div className='NomProduit'>
            <h1>{produit.nom}</h1>
          </div>
          <button onClick={()=>this.Test(produit)}>Ajouter au panier {produit.prix} euros</button>
        </div>


      )
    })}
      </div>
      </div>
    );
  }

}

export default App;

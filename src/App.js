import React, {Component} from 'react';
import './App.css';
import BagelList from './components/BagelList';
import AddNewBagel from './components/AddNewBagel';

    
    const BASE_URL = `https://bagel-api-fis.herokuapp.com`

class App extends Component {

  state = {
    bagels: [],
    isAddNewBagelShowing: false
  }


  componentDidMount(){
    fetch(`${BASE_URL}/bagels`)
      .then(response => response.json())
      .then(bagels => this.filterBagels(bagels))
  }

  filterBagels = (bagels) => {
    let goodBagels = bagels.filter(bagel => bagel.rating !== null)
    console.log(goodBagels)
    this.setState({bagels: goodBagels})
  }

  //takes in a bagel and makes post requst to DB, resets state on bagels
  addBagel = bagel => {
    fetch(`${BASE_URL}/bagels`, {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(bagel)
    }).then(response => response.json())
      .then(bagel => 
        this.setState({
          bagels: [...this.state.bagels, bagel],
          //Reinitialize state of newBagel to set text box to blank
          newBagel: {
            type: "",
            rating: 5
          }
        })
        )
  }

  toggleAddNewBagel = () => {
    this.setState({
      isAddNewBagelShowing: !this.state.isAddNewBagelShowing
    })
  }

  render() {
    return (
      <div className="App">
        <header>
        <h1>Bagel Shop</h1>
        </header>
        <main>
            <section>
              <h2>Bagels</h2>
                <BagelList bagels={this.state.bagels} />
            </section>
            <button onClick={this.toggleAddNewBagel}>{this.state.isAddNewBagelShowing ? "-" : "+"}</button>
            {
              this.state.isAddNewBagelShowing ?  <AddNewBagel addBagel={this.addBagel} /> : null
            }

        </main>
      </div>
    );
  }
}

export default App;

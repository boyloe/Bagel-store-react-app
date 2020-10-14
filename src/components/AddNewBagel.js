import React from 'react'
import "./AddNewBagel.css"

export default class AddNewBagel extends React.Component {

    state = {
        newBagel: {
            type: '',
            rating: 5
        }
    }

    handleChange = property => event => {
        const newBagel = this.state.newBagel
        newBagel[property] = event.target.value
        this.setState({ newBagel })
        }
    
    //Handles all form action 
    addBagel = event => {
        event.preventDefault()
        const {type, rating} = this.state.newBagel 

        this.props.addBagel({ type, rating  })

        this.setState({
            newBagel: {
                type: "",
                rating: 5
            }
        })
    }
    render(){
        return (
            <section className="add-bagel">
            <h2>Add a Bagel</h2>
                <form onSubmit={this.addBagel}>
                    <input type='text' placeholder="type" value={this.state.newBagel.type} onChange={this.handleChange("type")}/>
                    <input type='number' min="1" max="10" placeholder="rating" value={this.state.newBagel.rating} onChange={this.handleChange('rating')}/>
                    <input type="submit" value="Add Bagel" />
                </form>
            </section>
            )
        }
    }


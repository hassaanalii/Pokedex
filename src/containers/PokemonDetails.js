import axios from 'axios'
import React, { Component } from 'react'

export default class PokemonDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            ele:null
        }
    }
    componentDidMount(){
            const { match } = this.props
            const { id }=match?.params
            axios.get("https://pokeapi.co/api/v2/pokemon" + "/" + id).then((response)=>{
                if(response.status >=200 && response.status <300){
                    console.log(response.data)
                    this.setState({ele:response.data})
                }
            })
        }
  render() {
    return (
      <div>
        <h1 style={{marginTop:100}}>h1111</h1>
      </div>
    )
  }
}

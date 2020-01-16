import React from 'react';
import Navigationbar from './Navigationbar.js'
import Projects from './projects.js'
import Translateme from './translateme.js'
import Rickandmorty from './rickandmorty.js'
import Tonester from './tonester.js'
import { Embed, Modal, Popup } from 'semantic-ui-react'
import './App.css';
//new UX design will be implemented here....

const style = {
  borderRadius: 40,
  opacity: 1.7,
  padding: '1em',
}


class App extends React.Component {
    constructor(){
      super()
      this.state = {
        pageState: "home",
        open: false
      }
    }


    show = (dimmer) => () => this.setState({dimmer, open: true })
    close = () => this.setState({ open: false })
  
    show2 = (dimmer) => () => this.setState({dimmer, open2: true })
    close2 = () => this.setState({ open2: false })
  
    show3 = (dimmer) => () => this.setState({dimmer, open3: true })
    close3 = () => this.setState({ open3: false })

  handleModalClose=()=>{
    this.setState({ 
      open: false, 
      open2: false, 
      open3: false 
    })
  
  } 
  
  
  handleTranslateme=()=>{
    this.setState({
      pageState: "translateme"
    })
  }
  
  handleRickAndMorty=()=>{
    this.setState({
      pageState: "rickandmorty"
    })
  }

  handleTonester=()=>{
    this.setState({
      pageState: "tonester"
    })
  }

  handlePage=()=>{
    if(this.state.pageState === "translateme"){
      return <Translateme/> 
    }else if (this.state.pageState === "rickandmorty"){
      return <Rickandmorty/>
    }else if (this.state.pageState === "tonester"){
      return <Tonester/> 
    } else {
      return <Projects show={this.show} show2={this.show2} show3={this.show3} handleTranslateme={this.handleTranslateme} handleRickAndMorty={this.handleRickAndMorty} handleTonester={this.handleTonester}/>
    }
  }
 
  render(){
   
  return (
    <div className="App">
      
     <Navigationbar close={this.handleModalClose} handleSection1={this.handleSectionOne}/>
    {this.handlePage()}

    </div>
  );
  }
}

export default App;

import React from 'react';
import { Container } from 'semantic-ui-react'


export default class About extends React.Component{
   
    
    render(){

        return(
            <div >
              <div class="aboutContainer">
            
                <Container textAlign='justified'>
                  <h1 class="aboutheader" >Mario Rodriguez</h1>
                  <h2 class="aboutheader2" >Software Engineer | React.js, Ruby on Rails, Javascript</h2>
                  <p class="aboutcontainer" >Full-stack web developer with a passion for problem-solving. With experience in Ruby on Rails, JavaScript, and React I discovered web development while taking computer science classes and I fell in love with it. I bring strong skills in working with people, communication in English and Spanish as well as managing people. I spend my free time playing guitar as well as building small projects and learning about new technologies.</p>
                </Container>
              </div>
            </div>
        )
    }
}
import React from 'react'
import Textarea from 'muicss/lib/react/textarea';
import Input from 'muicss/lib/react/input';
import { Button } from 'react-bootstrap';
export default class Contact extends React.Component{
    constructor(){
        super()
        this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
    }
    
    handleNameHandling=(e)=>{
        this.setState({
            name: e.currentTarget.value
            })
            console.log('name' + e.currentTarget.value)
    }

    handleEmailHandling=(e)=>{
        this.setState({
            email: e.currentTarget.value
            })
            console.log('email' + e.currentTarget.value)
    }

    handleMsgHandling=(e)=>{
        this.setState({
            feedback: e.currentTarget.value
            })
            console.log('feedback' + e.currentTarget.value)
    }

    handleSubmit=()=>{
        const templateId = 'GmailTemplate4009';
    
        this.sendFeedback(templateId, {message_html: this.state.feedback, 
            from_name: this.state.name, 
            reply_to: this.state.email})
  }
    
      sendFeedback=(templateId, variables)=>{
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log(`Email successfully sent!`)
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }


    render(){

        return(
            
            <div>
                <div class="projectsheadercontact">
                    Contact___
                </div>
                <div class="containerContact">
                    <Input onChange={this.handleNameHandling} placeholder="Enter Full Name" />
                    <Input onChange={this.handleEmailHandling} placeholder="Enter Email" />
                    <Textarea onChange={this.handleMsgHandling} placeholder="How Can I Help You" />
                    <Button onClick={this.handleSubmit} variant="outline-success">Let's Work Together</Button>
                </div>
            </div>
        )
    }
}
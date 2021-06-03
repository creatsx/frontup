import React from 'react'
import "../styles/Contact.css"
import contact from "../../static/contact.svg" 
import {Form, Card} from "react-bootstrap" ;
import Button from "react-bootstrap/Button";
import ScrollAnimation from 'react-animate-on-scroll';


function Contact() {
    return (
        <div className='contact__section'>
               <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
               <h1 className="contact__sectionHeading" >Contact Us</h1>
               </ScrollAnimation>
            
          
        <div className="contact">
         
           <div className="contact__left">
               <img src={contact} alt="contact"  />
           </div>
           <div className="contact__right">
               <h2>
               I have some Questions for Spancer 
               </h2>
            
               <Card className="customCard" >
                   <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' >
                   <Card.Body>
                   <Form>
                   <Form.Group id="name">
                       <Form.Label>Your Name</Form.Label>
                           <Form.Control  type="text" required />   
                   </Form.Group>         
                   <Form.Group id="email">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" required />  
                   </Form.Group>
                   <Form.Group id="message">
                       <Form.Label>Your Message</Form.Label>
                       <Form.Control as="textarea" type="text" rows={7} required />
                   </Form.Group>
                    <div className="d-grid gap-2">
                      <Button variant="primary" className="w-50">Submit  </Button>
                    </div>
                   </Form>
                   </Card.Body>
                   </ScrollAnimation>
               </Card>
               
               </div>
               </div>
               </div>
     
 
    )
}

export default Contact

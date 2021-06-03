import React,{useState, useRef} from 'react'
import "../styles/Contact.css"
import contact from "../../static/contact.svg" 
import {Form, Card, Button, Alert} from "react-bootstrap" ;
import ScrollAnimation from 'react-animate-on-scroll';
import { useHistory } from 'react-router-dom';


function Contact() {
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();
    const [error, setError] = useState("");
    const history = useHistory()
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();

        if (nameRef.current.value==null){
            return setError("Please write your name");
        }
        if (emailRef.current.value==null){
            return setError("Please write a valid email");
        }
        if (messageRef.current.value==null){
            return setError("Please write your message in box!")
        }

        try {
            setError("");
            setLoading(false);
            console.log("successfull");
            history.pushState("/");
        }
        catch{
            setError("Failed to send your message !");
        }
        setLoading(false);
    }

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
                       {error && <Alert variant="danger">{error}</Alert>}
                   <Form onSubmit={handleSubmit}>
                   <Form.Group id="name">
                       <Form.Label>Your Name</Form.Label>
                           <Form.Control autoComplete="off" ref={nameRef} type="text" required />   
                   </Form.Group>         
                   <Form.Group id="email">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control autoComplete="off" type="email" ref={emailRef} required />  
                   </Form.Group>
                   <Form.Group id="message">
                       <Form.Label>Your Message</Form.Label>
                       <Form.Control as="textarea" type="text" rows={7} ref={messageRef} required />
                   </Form.Group>
                    <div className="d-grid gap-2">
                      <Button type="submit" disabled={loading} variant="primary" className="w-50">Submit  </Button>
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

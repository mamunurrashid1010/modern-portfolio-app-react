import React, {useState} from "react";
import {Container,Row,Col} from "react-bootstrap";
import contactImage from '../assets/img/contact-img.svg';

export const Contact = () => {
    const formInitialDetails = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',
    }
    const [formDetails,setFormDetails] = useState(formInitialDetails);
    const [buttonText,setButtonText] = useState('Send');
    const [status,setStatus] = useState({});

    const onFormUpdate =(name,value)=>{
        setFormDetails({
            ...formDetails,
            [name]:value
        })
    }
    const handleSubmit=()=>{
        alert('test');
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row  className="align-items-center">
                    <Col md={6}>
                        <img src={contactImage} />
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName',e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName',e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=> onFormUpdate('email',e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e)=> onFormUpdate('phone',e.target.value)} />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message',e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                <Col>
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success" }> {status.message} </p>
                                        </Col>
                                    }
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
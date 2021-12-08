// styles
import qualiStyles from './qualification.module.scss';
// react bootstrap 
import { Form, Row, Col, Spinner, Modal, Button, ButtonGroup } from 'react-bootstrap';
// phone input 
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 
import { useState } from 'react';

const WriterInformation = (props) => {
    const [validate, setValidate] = useState();
    const [writerID, setWriterID] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [mobile, setMobile] = useState();
    const [gender, setGender] = useState();
    const [country, setCountry] = useState();
    const [state, setState] = useState();
    const [email, setEmail] = useState();
    const [retypeEmail, setRetypeEmail] = useState();
    const [altEmail, setAltEmail] = useState();
    const [whatsApp, setWhatsApp] = useState();
    const [payPal, setPayPal] = useState();
    
    return (
        <div className={qualiStyles.qualiChildWrap}>

            <Form noValidate className={qualiStyles.frmWriterInfo}>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="formWriterId">
                    <Form.Label className={qualiStyles.lblWriter}>Writer ID</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="writer ID" 
                    />
                    <Form.Control.Feedback type="invalid" style={true?{display:'none'}:{display:'block'}}>Invalid</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label className={qualiStyles.lblWriter}>First Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="First Name" 
                    />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName">
                    <Form.Label className={qualiStyles.lblWriter}>Last Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Last Name" 
                    />
                    <Form.Control.Feedback type="invalid" style={true?{display:'none'}:{display:'block'}}>Invalid</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group className="mb-2" controlId="formTelephone">
                        <Form.Label className={qualiStyles.lblWriter}>Mobile Number</Form.Label>
                        <PhoneInput
                        inputClass={qualiStyles.telInput}
                        placeholder="+x (xxx) xxx-xxxx"
                        country={'us'}
                        />
                        <Form.Control.Feedback type="invalid" style={true?{display:'none'}:{display:'block'}}>Invalid</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Label className={qualiStyles.lblWriter}>Gender</Form.Label>
                <ButtonGroup aria-label="gender select" className={qualiStyles.bgGender}>
                    <Button >Male</Button>
                    <Button >Female</Button>
                </ButtonGroup>
                </Row>
                <Row className="mb-2">
                    <Form.Group as={Col} className="mb-2" controlId="formCoutry">
                    <Form.Label className={qualiStyles.lblWriter}>Country</Form.Label>
                    <Form.Select aria-label="select country" placeholder="Select Country">
                    {props.countries?.map((list, index) => (
                        <option key={index} value={list.name}>{list.name}</option>
                    ))}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-2" controlId="formCity">
                    <Form.Label className={qualiStyles.lblWriter}>State</Form.Label>
                        <Form.Control type="text" placeholder="Enter City" />
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="formEmail">
                    <Form.Label className={qualiStyles.lblWriter}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="formRetypeEmail">
                    <Form.Label className={qualiStyles.lblWriter}>Retype Email</Form.Label>
                    <Form.Control type="email" placeholder="Retype email" />
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="formAltEmail">
                    <Form.Label className={qualiStyles.lblWriter}>Alternative Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter alternative email" />
                </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group className="mb-2" controlId="formWhatsApp">
                        <Form.Label className={qualiStyles.lblWriter}>WhatsApp Number</Form.Label>
                        <PhoneInput
                        inputClass={qualiStyles.telInput}
                        placeholder="+x (xxx) xxx-xxxx"
                        country={'us'}
                        />
                        <Form.Control.Feedback type="invalid" style={true?{display:'none'}:{display:'block'}}>Invalid</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-5">
                <Form.Group className="mb-2" controlId="formPayPal">
                    <Form.Label className={qualiStyles.lblWriter}>Do you have PayPal? If yes, what is your PayPal email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                </Row>
                <Row>
                    <div className={qualiStyles.submitWrap}>
                        <span></span>
                        <Button onClick={props.buttonNext}>Next</Button>
                    </div>
                </Row>
            </Form>
            
        </div>
    );
}

export default WriterInformation;
// styles
import qualiStyles from './qualification.module.scss';
// react bootstrap 
import { Form, Row, Col, Spinner, Modal, Button, ButtonGroup } from 'react-bootstrap';

const MoreInformation = (props) => {
    return (
        <div className={qualiStyles.qualiChildWrap}>

            <Form noValidate className={qualiStyles.frmWriterInfo}>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_1">
                    <Form.Label className={qualiStyles.lblWriter}>Have you ever worked for any other online academic assistance companies? if Yes then what is company name?</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Your answer" 
                    />
                    <Form.Control.Feedback type="invalid" style={true?{display:'none'}:{display:'block'}}>Invalid</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_2">
                    <Form.Label className={qualiStyles.lblWriter}>What is your native language?</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Your answer" 
                    />
                    <Form.Control.Feedback type="invalid" style={true?{display:'none'}:{display:'block'}}>Invalid</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="question_3">
                    <Form.Label className={qualiStyles.lblWriter}>What is your second language?</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Your answer" 
                    />
                    <Form.Control.Feedback type="invalid" style={true?{display:'none'}:{display:'block'}}>Invalid</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="question_4">
                <Form.Label className={qualiStyles.lblWriter}>What&apos;s Your available time?</Form.Label>
                    <Form.Select aria-label="select time" placeholder="Choose your available time">
                        <option value="0">Option 1</option>
                        <option value="1">Option 2</option>
                        <option value="2">Option 3</option>
                        <option value="3">Option 4</option>
                    </Form.Select>
                </Form.Group>
                </Row>
                <Row>
                    <div className={qualiStyles.submitWrap}>
                        <span></span>
                        <Button className={qualiStyles.btnPrev} onClick={props.buttonPrev}>Back</Button>
                        <Button onClick={props.buttonNext}>Next</Button>
                    </div>
                </Row>
            </Form>
            
        </div>
    );
}

export default MoreInformation;
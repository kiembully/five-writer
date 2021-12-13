// styles
import panelStyles from '../../styles/ProfilePanels.module.scss'
// react bootstrap 
import { Form, Row, Col, Spinner, Modal, Button, ButtonGroup } from 'react-bootstrap';
import {grammarTest} from './data'

const Grammar = (props) => {
    return (
        <div className={panelStyles.qualiChildWrap}>

            <Form noValidate className={panelStyles.frmPanelWrap}>
                {grammarTest.map((list,index)=>(
                <Row className={`mb-${index<14?2:5}`} key={index}>
                <Form.Group className="mb-2" controlId={`question_${index+1}`}>
                <Form.Label className={panelStyles.lblWriter}>{list.question}</Form.Label>
                    <Form.Select aria-label={`options_${index+1}`} placeholder="Choose" defaultValue="">
                        {list.choices.map((choice, index) => (
                            <option key={index} value={choice.value}>{choice.label}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                </Row>
                ))}
                <Row>
                    <div className={panelStyles.submitWrap}>
                        <span></span>
                        <Button className={panelStyles.btnPrev} onClick={props.buttonPrev}>Back</Button>
                        <Button onClick={props.buttonSubmit}>Submit</Button>
                    </div>
                </Row>
                
            </Form>
            
        </div>
    );
}

export default Grammar;
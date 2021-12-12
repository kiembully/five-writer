// styles
import panelStyles from '../../styles/ProfilePanels.module.scss'
// react bootstrap 
import { Form, Row, Col, Spinner, Modal, Button, ButtonGroup } from 'react-bootstrap';

const Plagiarism = (props) => {
    return (
        <div className={panelStyles.qualiChildWrap}>

            <Form noValidate className={panelStyles.frmPanelWrap}>

                <Row>
                    <div className={panelStyles.submitWrap}>
                        <span></span>
                        <Button className={panelStyles.btnPrev} onClick={props.buttonPrev}>Back</Button>
                        <Button onClick={props.buttonNext}>Next</Button>
                    </div>
                </Row>
                
            </Form>
            
        </div>
    );
}

export default Plagiarism;
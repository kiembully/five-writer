// styles
import panelStyles from '../../styles/ProfilePanels.module.scss'
// react bootstrap 
import { Form, Row, Col, Spinner, Modal, Button, ButtonGroup } from 'react-bootstrap';

const Grammar = (props) => {
    return (
        <div className={panelStyles.qualiChildWrap}>

            <Form noValidate className={panelStyles.frmPanelWrap}>

                <Row>
                    <div className={panelStyles.submitWrap}>
                        <span></span>
                        <Button className={panelStyles.btnPrev} onClick={props.buttonPrev}>Back</Button>
                        <Button >Submit</Button>
                    </div>
                </Row>
                
            </Form>
            
        </div>
    );
}

export default Grammar;
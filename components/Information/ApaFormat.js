// styles
import panelStyles from '../../styles/ProfilePanels.module.scss'
// react bootstrap 
import { Form, Row, Col, Spinner, Modal, Button, ButtonGroup } from 'react-bootstrap';
// mui 
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const ApaFormat = (props) => {
    return (
        <div className={panelStyles.qualiChildWrap}>

            <Form noValidate className={panelStyles.frmPanelWrap}>

                <Row>
                    <div className={panelStyles.submitWrap}>
                        <span></span>
                        <Button onClick={props.buttonNext}>Next</Button>
                    </div>
                </Row>
                
            </Form>
            
        </div>
    );
}

export default ApaFormat;
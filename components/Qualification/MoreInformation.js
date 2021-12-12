// mui 
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// styles
import panelStyles from '../../styles/ProfilePanels.module.scss'
// react bootstrap 
import { Form, Row, Col, Spinner, Modal, Button, ButtonGroup } from 'react-bootstrap';

import {timeAvailability, educAttainment, workAvailability} from './data'

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 18,
  height: 18,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#2CBEFF',
  transition: 'all 0.3s ease',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 18,
    height: 18,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#009ADF',
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const MoreInformation = (props) => {
    
    return (
        <div className={panelStyles.qualiChildWrap}>

            <Form noValidate className={panelStyles.frmPanelWrap}>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_1">
                    <Form.Label className={panelStyles.lblWriter}>Have you ever worked for any other online academic assistance companies? if Yes then what is company name?</Form.Label>
                    <Form.Control 
                    className={panelStyles.fcInputs}
                    type="text" 
                    placeholder="Your answer" 
                    />
                    <Form.Control.Feedback type="invalid" style={true?{display:'none'}:{display:'block'}}>Invalid</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_2">
                    <Form.Label className={panelStyles.lblWriter}>What is your native language?</Form.Label>
                    <Form.Control 
                    className={panelStyles.fcInputs}
                    type="text" 
                    placeholder="Your answer" 
                    />
                    <Form.Control.Feedback type="invalid" style={true?{display:'none'}:{display:'block'}}>Invalid</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_3">
                    <Form.Label className={panelStyles.lblWriter}>What is your second language?</Form.Label>
                    <Form.Control 
                    className={panelStyles.fcInputs}
                    type="text" 
                    placeholder="Your answer" 
                    />
                    <Form.Control.Feedback type="invalid" style={true?{display:'none'}:{display:'block'}}>Invalid</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_4">
                <Form.Label className={panelStyles.lblWriter}>What&apos;s Your available time?</Form.Label>
                    <Form.Select aria-label="select time" placeholder="Choose your available time" defaultValue="">
                        {workAvailability.map((list, index) => (
                            <option key={index} value={list.value}>{list.label}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_5">
                <Form.Label className={panelStyles.lblWriter}>Your available time in your country?</Form.Label>
                    <RadioGroup defaultValue="" aria-label="gender" name="customized-radios">
                        {timeAvailability.map((list, index) => (
                            <FormControlLabel className={panelStyles.fclRadio} key={index} value={list.value} control={<BpRadio />} label={list.label} />
                        ))}
                    </RadioGroup>
                </Form.Group>
                </Row>
                <Row className="mb-5">
                <Form.Group className="mb-2" controlId="question_6">
                <Form.Label className={panelStyles.lblWriter}>Educational attainment:</Form.Label>
                    <RadioGroup defaultValue="" aria-label="gender" name="customized-radios">
                        {educAttainment.map((list, index) => (
                            <FormControlLabel className={panelStyles.fclRadio} key={index} value={list.value} control={<BpRadio />} label={list.label} />
                        ))}
                    </RadioGroup>
                </Form.Group>
                </Row>
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

export default MoreInformation;
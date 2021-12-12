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

// data 
import { rateLabels, pagePerDay, siteRecommend, confirmInfo } from './data'

// rating 
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#2CBEFF',
  },
  '& .MuiRating-iconHover': {
    color: '#2CBEFF',
  },
})

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

function getStyles(name, paperType) {
  return {
    backgroundColor:
      paperType.indexOf(name) === -1
        ? null
        : '#2CBEFF',
    color:
      paperType.indexOf(name) === -1
        ? '#151515'
        : '#151515',
  };
}

const RateYourself = (props) => {
    return (
        <div className={panelStyles.qualiChildWrap}>
            
            <Form noValidate className={panelStyles.frmPanelWrap}>
                
                {rateLabels.map((list, index) => (
                <Row className="mb-2" key={index}>
                <Form.Group className="mb-2" controlId={`personalRate-${index}`}>
                    <Form.Label className={panelStyles.lblWriter}>{list}</Form.Label>
                    <div className={panelStyles.rateWrap}>
                        <span>
                            <label>Poor</label>
                        </span>
                        <span>
                            <StyledRating
                            name={`personal-rate-${index}`}
                            defaultValue={0}
                            max={10}
                            />
                        </span>
                        <span>
                            <label>Professional</label>
                        </span>
                    </div>
                </Form.Group>
                </Row>
                ))}
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="pagePerDay">
                    <Form.Label className={panelStyles.lblWriter}>How many pages are you able to do per day?</Form.Label>
                    <Form.Select aria-label="select time" placeholder="Choose pages per day" defaultValue="">
                        {pagePerDay.map((list, index) => (
                            <option key={index} value={list}>{list}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="describeYourself">
                    <Form.Label className={panelStyles.lblWriter}>Describe yourself in a few words:</Form.Label>
                    <Form.Control as="textarea" rows={5} className={panelStyles.fcTextarea} />
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="siteRecommendation">
                    <Form.Label className={panelStyles.lblWriter}>You have learned about our website from: if Recommendation from friend! then write his First and last name or Writer ID in other box.</Form.Label>
                    <RadioGroup defaultValue="" aria-label="citation" name="citation">
                        {siteRecommend.map((list, index) => (
                            <FormControlLabel className={panelStyles.fclRadio} key={index} value={list.value} control={<BpRadio />} label={list.label} />
                        ))}
                    </RadioGroup>
                </Form.Group>
                </Row>
                <Row className="mb-5">
                <Form.Group className="mb-2" controlId="confirmInfo">
                    <Form.Label className={panelStyles.lblWriter}>When you done with this info page, please confirm us through our email: Writer@CheapestEssay.com. Also remember that you are able to edit it anytime. Click YES if you gonna do it now.</Form.Label>
                    <RadioGroup defaultValue="" aria-label="citation" name="citation">
                        {confirmInfo.map((list, index) => (
                            <FormControlLabel className={panelStyles.fclRadio} key={index} value={list.value} control={<BpRadio />} label={list.label} />
                        ))}
                    </RadioGroup>
                </Form.Group>
                </Row>
                <Row>
                    <div className={panelStyles.submitWrap}>
                        <span></span>
                        <Button className={panelStyles.btnPrev} onClick={props.buttonPrev}>Back</Button>
                        <Button>Submit</Button>
                    </div>
                </Row>
                
            </Form>
            
        </div>
    );
}

export default RateYourself;
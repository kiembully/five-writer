// styles
import panelStyles from '../../styles/ProfilePanels.module.scss'
// react bootstrap 
import { Form, Row, Button } from 'react-bootstrap';
// mui 
import { styled } from '@mui/material/styles';
import {Divider,Rating,Radio,RadioGroup,FormControlLabel} from '@mui/material';
// data 
import {apaFormattingTest} from './data'

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

const ApaFormat = (props) => {
    return (
        <div className={panelStyles.qualiChildWrap}>

            <Form noValidate className={panelStyles.frmPanelWrap}>

                {apaFormattingTest.map((list, index)=>(
                <Row className={`mb-${index<4?2:5}`} key={index}>
                <Form.Group className="mb-2" controlId={`question_${index+1}`}>
                <Form.Label className={panelStyles.lblWriter}>{list.question}</Form.Label>
                    <RadioGroup defaultValue="" aria-label="gender" name={`question_${index+1}`}>
                        {list.choices.map((choice, i) => (
                            <FormControlLabel className={panelStyles.fclRadio} key={i} value={choice.value} control={<BpRadio />} label={choice.label} />
                        ))}
                    </RadioGroup>
                </Form.Group>
                {index<4?<Divider className={panelStyles.rowDivider} />:null}
                </Row>
                ))}
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
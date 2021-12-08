import { styled } from '@mui/material/styles';

// mui 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

// styles
import qualiStyles from './qualification.module.scss';
// react bootstrap 
import { Form, Row, Col, Spinner, Modal, Button, ButtonGroup } from 'react-bootstrap';

import {citations,services,acadLevel,papers} from './data';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

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
    backgroundColor: '#106ba3',
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
    fontWeight:
      paperType.indexOf(name) === -1
        ? 400
        : 600,
  };
}

const FillQualification = (props) => {
    const [paperType, setPaperType] = useState([]);
    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setPaperType(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };
    
    return (
        <div className={qualiStyles.qualiChildWrap}>
            
            <Form noValidate className={qualiStyles.frmWriterInfo}>
                
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_1">
                <Form.Label className={qualiStyles.lblWriter}>What citation styles are you familiar with?</Form.Label>
                    <RadioGroup defaultValue="" aria-label="citation" name="citation">
                        {citations.map((list, index) => (
                            <FormControlLabel className={qualiStyles.fclRadio} key={index} value={list.value} control={<BpRadio />} label={list.label} />
                        ))}
                    </RadioGroup>
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_2">
                <Form.Label className={qualiStyles.lblWriter}>What type of service are you able to do?</Form.Label>
                    <RadioGroup defaultValue="" aria-label="type of service" name="type-of-service">
                        {services.map((list, index) => (
                            <FormControlLabel className={qualiStyles.fclRadio} key={index} value={list.value} control={<BpRadio />} label={list.label} />
                        ))}
                    </RadioGroup>
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_3">
                <Form.Label className={qualiStyles.lblWriter}>What academic level are you able to do?</Form.Label>
                    <RadioGroup defaultValue="" aria-label="academic level" name="academic-level">
                        {acadLevel.map((list, index) => (
                            <FormControlLabel className={qualiStyles.fclRadio} key={index} value={list.value} control={<BpRadio />} label={list.label} />
                        ))}
                    </RadioGroup>
                </Form.Group>
                </Row>
                <Row className="mb-2">
                <Form.Group className="mb-2" controlId="question_4">
                <Form.Label className={qualiStyles.lblWriter}>Preferred Type of paper:</Form.Label>
                    {/* <RadioGroup defaultValue="" aria-label="type of paper" name="type-of-paper">
                        {papers.map((list, index) => (
                            <FormControlLabel className={qualiStyles.fclRadio} key={index} value={list.value} control={<BpRadio />} label={list.label} />
                        ))}
                    </RadioGroup> */}

                    <InputLabel id="paper types" className={qualiStyles.lblChipWrap}>Papers</InputLabel>
                    <Select
                    className={qualiStyles.chipSelectPapers}
                    labelId="paper types"
                    id="paper_type"
                    multiple
                    value={paperType}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <div className={qualiStyles.chipSelectWrap}>
                            {selected.map((value) => (
                                <Chip className={qualiStyles.chipPaper} key={value} label={value} />
                            ))}
                        </div>
                    )}
                    >
                    {papers.map((list) => (
                        <MenuItem
                        key={list.value}
                        value={list.label}
                        style={getStyles(list.label, paperType)}
                        >
                        {list.label}
                        </MenuItem>
                    ))}
                    </Select>
                    
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

export default FillQualification;
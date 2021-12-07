// mui 
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

// styles 
import qualiStyles from './qualification.module.scss'
import { useState } from 'react';

// loadComponents 
import WriterInformation from './WriterInformation';
import MoreInformation from './MoreInformation';
import FillQualification from './FillQualification';
import RateYourself from './RateYourself';


const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'transparent',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'transparent',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : 'transparent',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#96AABE',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#2CBEFF',
  }),
  '& .QontoStepIcon-completedIcon': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '#2CBEFF',
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const steps = ['1. Writer Information', '2. More Information', '3. Your Qualification', '4. Rate your self'];

// tabs 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div sx={{ p: 3 }}>
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Qualification = (props) => {
    // theme 
    const theme = useTheme();
    // stepper 
    const [activeStep, setActiveStep] = useState(0);
    const handleChangeStep = (event, newValue) => {
        setActiveStep(newValue);
        console.log(newValue)
    };
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    return (
        <div>
        <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />} className={qualiStyles.stepperWrap}>
            {steps.map((label, index) => (
            <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon} className={qualiStyles.stepLoc}>
                    <a type="button" className={qualiStyles.stepLbl} style={activeStep<index?{color: '#96AABE'}:{color:'#2CBEFF'}}>{label}</a>
                </StepLabel>
            </Step>
            ))}
        </Stepper>

        <div className={qualiStyles.mobStepLoc}>
            <span>{activeStep > 0 ? steps[activeStep - 1] : null}</span>
            <span></span>
            <span>{steps[activeStep]}</span>
        </div>

        <p className={qualiStyles.pPitch}>If you don't know your writer ID with Cheapest Essay then ask our support to give you your writer ID! Remember that writer ID start with WhatsApp support +1 (909) 441-1414 <span>( * Required )</span></p>

        <TabPanel value={activeStep} index={0}>
            <WriterInformation 
            countries={props.countries} 
            buttonNext={handleNext}
            buttonPrev={handleBack}
            />
        </TabPanel>
        <TabPanel value={activeStep} index={1}>
            <MoreInformation 
            buttonNext={handleNext}
            buttonPrev={handleBack}
            />
        </TabPanel>
        <TabPanel value={activeStep} index={2}>
            <FillQualification />
        </TabPanel>
        <TabPanel value={activeStep} index={3}>
            <RateYourself />
        </TabPanel>

        {/* //mobile stepper  */}
        <MobileStepper
        className={qualiStyles.mobileStepperWrap}
        variant="progress"
        steps={4}
        position="static"
        activeStep={activeStep}
        sx={{ flexGrow: 1, color: 'red' }}
        nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
            Next
            {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
            ) : (
                <KeyboardArrowRight />
            )}
            </Button>
        }
        backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
            ) : (
                <KeyboardArrowLeft />
            )}
            Back
            </Button>
        }
        />
        
        </div>
    );
}

export default Qualification;
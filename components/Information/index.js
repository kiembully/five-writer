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
import Skeleton from '@mui/material/Skeleton';

// styles 
import panelStyles from '../../styles/ProfilePanels.module.scss'
import { useEffect, useState } from 'react';

// loadComponents 
import ApaFormat from './ApaFormat';
import ChicagoTurabianFormat from './ChicagoTurabianFormat';
import Plagiarism from './Plagiarism';
import Grammar from './Grammar';

// api helper 
import { externalApiHelper } from '../../helper/apiHelper';

// common dialog 
import CommonDialog from '../Dialog'
import TestResponse from '../TestResponse';

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

const steps = ['1. APA Formatting test', '2. Chicago/Turabian format Test', '3. Test: Plagiarism Quiz', '4. Grammar Quiz'];

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

const InformationTest = () => {
    useEffect(() => {
      setCountryList();
    }, [])
    const [apiLoader, setApiLoader] = useState(true);
    const [countries, setCountries] = useState();
    const [filled, setFilled] = useState(false);
    const handleFrmFilled = () => {
      setFilled(true)
    }
    const handleEdit = () => {
      localStorage.removeItem('qualification_step');
      localStorage.removeItem('i_step_done');
      setActiveStep(0);
      setFilled(false)
    }

    // dialog 
    const [dialogState, setDialogState] = useState(false);
    const openDialog = () => {
      setDialogState(true);
    };
    const closeDialog = () => {
      setDialogState(false);
    };
    const saveForm = () => {
      localStorage.setItem('i_step_done', 'true');
      setDialogState(false);
      setFilled(true);
    }
  
    // theme 
    const theme = useTheme();
    // stepper 
    const [activeStep, setActiveStep] = useState(0);
    const handleChangeStep = (event) => {
      console.log(event.target.value)
        setActiveStep(newValue);
    };
    const handleNext = () => {
        localStorage.setItem('information_step', (activeStep + 1));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        localStorage.setItem('information_step', (activeStep +-1));
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const mockArr = [0,1,2,3,4,5,6,7,8,9]
    function setCountryList() {

      // retain active tabs when page reloads 
      const information_step = typeof window !== 'undefined' ? localStorage.getItem('information_step') : null;
      setActiveStep(!!information_step ? parseInt(information_step) : 0)

      // sets response message if form is already filled up
      const i_step_done = typeof window !== 'undefined' ? localStorage.getItem('i_step_done') : null;
      setFilled(!!i_step_done);
        
        // set country lists 
        externalApiHelper("https://restcountries.com/v2/all/", "GET", null, null)
        .then((res) => {
            const response = res.data;
            setCountries(response);
            setApiLoader(false);
        })
        .catch((error) => console.error(`Error: ${error}`));
    }

    return filled ? (
      <TestResponse buttonEdit={handleEdit} />
    ) : (
       <div>
        <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />} className={panelStyles.stepperWrap}>
            {steps.map((label, index) => (
            <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon} className={panelStyles.stepLoc}>
                    <a type="button" className={panelStyles.stepLbl} style={activeStep<index?{color: '#96AABE'}:{color:'#2CBEFF'}}>{label}</a>
                </StepLabel>
            </Step>
            ))}
        </Stepper>

        <div className={panelStyles.mobStepLoc}>
            <span>{activeStep > 0 ? steps[activeStep - 1] : null}</span>
            <span></span>
            <span>{steps[activeStep]}</span>
        </div>

        <p className={panelStyles.pPitch}>Make sure that your writer ID start with W. IF YOU not sure with your writer ID then ask our support. WhatsApp: +1 (909) 441-1414</p>

        <TabPanel value={activeStep} index={0}>
            {apiLoader?
            <div className={panelStyles.qualiChildWrap}>
            {mockArr.map((el) => (
                  <div className={panelStyles.formWrapSkel} key={el}>
                      <h6><Skeleton className={panelStyles.formSkel} width={50} /></h6>
                      <h3><Skeleton className={panelStyles.formSkel} /></h3>
                  </div>
              ))}
          </div>
            :
            <ApaFormat 
            buttonNext={handleNext}
            />
            }
        </TabPanel>
        <TabPanel value={activeStep} index={1}>
            <ChicagoTurabianFormat 
            buttonNext={handleNext}
            buttonPrev={handleBack}
            />
        </TabPanel>
        <TabPanel value={activeStep} index={2}>
            <Plagiarism 
            buttonNext={handleNext}
            buttonPrev={handleBack}
            />
        </TabPanel>
        <TabPanel value={activeStep} index={3}>
            <Grammar 
            buttonPrev={handleBack}
            buttonSubmit={openDialog}
            />
        </TabPanel>

        {/* //mobile stepper  */}
        <MobileStepper
        className={panelStyles.mobileStepperWrap}
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
        
        <CommonDialog 
        saveForm={saveForm}
        closeDia={closeDialog}
        diaState={dialogState}
        title="Multiple-choice test"
        />
        </div>
    );
}

export default InformationTest;
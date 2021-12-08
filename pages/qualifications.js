import Qualification from '../components/Qualification';
import qualiStyles from '../components/Qualification/qualification.module.scss';

const qualifications = (props) => {
    
    return (
        <div className={qualiStyles.qualificationStepperWrap}>

            <Qualification />
            
        </div>
    );
}

export default qualifications;
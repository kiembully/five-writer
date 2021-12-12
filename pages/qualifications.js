import Qualification from '../components/Qualification';
import panelStyles from '../styles/ProfilePanels.module.scss'

const qualifications = (props) => {
    
    return (
        <div className={panelStyles.profilePanelsWrap}>
            
            <Qualification />
            
        </div>
    );
}

export default qualifications;
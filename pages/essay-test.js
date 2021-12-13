import panelStyles from '../styles/ProfilePanels.module.scss';
import Essay from '../components/Essay';

const EssayTest = () => {
    return (
        <div className={panelStyles.profilePanelsWrap}>
            <Essay />
        </div>
    );
}

export default EssayTest;
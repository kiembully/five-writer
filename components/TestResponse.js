import panelStyles from '../styles/ProfilePanels.module.scss'
import Button from '@mui/material/Button';

const TestResponse = (props) => {
    return (
        <div className={panelStyles.responseWrap}>
          <h1>You&apos;ve already responded</h1>
          <p>You can fill out this form only once. Try contacting the owner of the form if you think this is a mistake.</p>
          <Button onClick={props.buttonEdit}>Edit your response</Button>
        </div>
    );
}

export default TestResponse;
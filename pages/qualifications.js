import Qualification from '../components/Qualification';
import qualiStyles from '../components/Qualification/qualification.module.scss'

const qualifications = (props) => {
    return (
        <div className={qualiStyles.qualificationStepperWrap}>
            <Qualification countries={props.countries}/>
        </div>
    );
}

export default qualifications;

qualifications.getInitialProps = async (ctx) => {

    const res = await fetch('https://restcountries.com/v2/all/')
    const json = await res.json()
    return { countries: json }

}
import { useState } from 'react';
import Qualification from '../components/Qualification';
import qualiStyles from '../components/Qualification/qualification.module.scss';

// mui 
import Skeleton from '@mui/material/Skeleton';

const qualifications = (props) => {
    const [apiLoader, setApiLoader] = useState(true);
    
    return (
        <div className={qualiStyles.qualificationStepperWrap}>
            {/* {apiLoader?
            <>
            <div className={qualiStyles.stepWrapSkel}>
                <span><caption><Skeleton className={qualiStyles.circularSkel} variant="circular" /></caption></span>
                <span><caption><Skeleton className={qualiStyles.circularSkel} variant="circular" /></caption></span>
                <span><caption><Skeleton className={qualiStyles.circularSkel} variant="circular" /></caption></span>
                <span><caption><Skeleton className={qualiStyles.circularSkel} variant="circular" /></caption></span>
            </div>
            <div className={qualiStyles.stepWrapSkel}>
                <span><caption><Skeleton className={qualiStyles.captionSkel}/></caption></span>
                <span><caption><Skeleton className={qualiStyles.captionSkel}/></caption></span>
                <span><caption><Skeleton className={qualiStyles.captionSkel}/></caption></span>
                <span><caption><Skeleton className={qualiStyles.captionSkel}/></caption></span>
            </div>
            <div className={qualiStyles.pitchSkel}>
                <h5><Skeleton className={qualiStyles.captionSkel}/></h5>
                <h5><Skeleton className={qualiStyles.captionSkel}/></h5>
            </div>
            <div className={qualiStyles.formWrapSkel}>
                <Skeleton
                className={qualiStyles.formSkel}
                variant="rectangular"
                height={118}
                />
            </div>
            </>
            :
            <Qualification countries={props.countries}/>
            } */}

            <Qualification countries={props.countries}/>
            
        </div>
    );
}

export default qualifications;

qualifications.getInitialProps = async (ctx) => {

    const sampArray = [
        {
            "name": "Afghanistan",
            "topLevelDomain": [
            ".af"
            ],
            "alpha2Code": "AF",
            "alpha3Code": "AFG",
            "callingCodes": [
            "93"
            ],
            "capital": "Kabul",
            "altSpellings": [
            "AF",
            "Afġānistān"
            ],
            "subregion": "Southern Asia",
            "region": "Asia",
            "population": 38928341,
            "latlng": [
            33.0,
            65.0
            ],
            "demonym": "Afghan",
            "area": 652230.0,
            "timezones": [
            "UTC+04:30"
            ],
            "borders": [
            "IRN",
            "PAK",
            "TKM",
            "UZB",
            "TJK",
            "CHN"
            ],
            "nativeName": "افغانستان",
            "numericCode": "004",
            "flags": {
            "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
            "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
            },
            "currencies": [
            {
                "code": "AFN",
                "name": "Afghan afghani",
                "symbol": "؋"
            }
            ],
            "languages": [
            {
                "iso639_1": "ps",
                "iso639_2": "pus",
                "name": "Pashto",
                "nativeName": "پښتو"
            },
            {
                "iso639_1": "uz",
                "iso639_2": "uzb",
                "name": "Uzbek",
                "nativeName": "Oʻzbek"
            },
            {
                "iso639_1": "tk",
                "iso639_2": "tuk",
                "name": "Turkmen",
                "nativeName": "Türkmen"
            }
            ],
            "translations": {
            "br": "Afeganistão",
            "pt": "Afeganistão",
            "nl": "Afghanistan",
            "hr": "Afganistan",
            "fa": "افغانستان",
            "de": "Afghanistan",
            "es": "Afganistán",
            "fr": "Afghanistan",
            "ja": "アフガニスタン",
            "it": "Afghanistan",
            "hu": "Afganisztán"
            },
            "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
            "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation"
            }
            ],
            "cioc": "AFG",
            "independent": true
        },
    ]
    
    const res = await fetch('https://restcountries.com/v2/all/')
    const json = await res.json()
    return { countries: json }

}
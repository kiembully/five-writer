import Skeleton from '@mui/material/Skeleton';

// styles 
import panelStyles from '../../styles/ProfilePanels.module.scss'
import { useEffect, useState } from 'react';

// loadComponents 

// api helper 
import { externalApiHelper } from '../../helper/apiHelper';

// common dialog 
import CommonDialog from '../Dialog';
import EssayContent from './EssayContent';
import TestResponse from '../TestResponse';

const Essay = () => {
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
      localStorage.removeItem('essay_step');
      localStorage.removeItem('e_step_done');
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
      localStorage.setItem('e_step_done', 'true');
      setDialogState(false);
      setFilled(true);
    }

    const mockArr = [0,1,2,3,4,5,6,7,8,9]
    function setCountryList() {
      
      // sets response message if form is already filled up
      const e_step_done = typeof window !== 'undefined' ? localStorage.getItem('e_step_done') : null;
      setFilled(!!e_step_done);
        
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

            <p className={panelStyles.pPitch}>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Any files that are uploaded will be shared outside of the organization they belong to.</p>
            
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
            <>
            <EssayContent 
            buttonSubmit={openDialog}
            />
            </>
            }

            <CommonDialog 
            saveForm={saveForm}
            closeDia={closeDialog}
            diaState={dialogState}
            title="Writer Info"
            />
            
        </div>
    );
}

export default Essay;
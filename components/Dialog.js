import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Image from 'next/image';
import mailIcon from '../public/mail-icon.svg'
import dialogStyles from '../styles/Dialog.module.scss'

export default function CommonDialog(props) {

  return (
    <div>
      <Dialog
        open={props.diaState}
        onClose={props.closeDia}
        aria-labelledby="common-dialog"
        className={dialogStyles.dialogWrap}
        fullWidth
      >
        <DialogTitle id="common-dialog">
          <div className={dialogStyles.titleWrap}>
            <Image src={mailIcon} width={83} height={83} alt='mail icon' />
            <span>{props.title}</span>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="common-dialog-description">
           <span className={dialogStyles.contentWrap}>Your response has been recorded.</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={dialogStyles.btnSubmit} onClick={props.saveForm} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

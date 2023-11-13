import Snackbar from '@mui/material/Snackbar';
import {useRecoilState} from "recoil";
import {snackbarState} from '@/state/atoms/snackbarState.atom'
import Alert from "@mui/material/Alert";


const SnackBar = () => {
    const [snackBar, setSnackBarState] = useRecoilState(snackbarState)

    const handleClose = () => {
        setSnackBarState(s => ({...s, open: false}))
    }
    return (
        <Snackbar open={snackBar["open"]} autoHideDuration={3000} anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                  onClose={handleClose}>
            <Alert onClose={handleClose} severity={snackBar['severity']} sx={{width: '100%'}}>
                {snackBar["message"]}
            </Alert>
        </Snackbar>
    )
}


export default SnackBar
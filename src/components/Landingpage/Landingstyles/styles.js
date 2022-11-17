import { makeStyles } from '@material-ui/styles';
import bg from '../../../assets/bg.jpg'

export default makeStyles((theme) => ({
    background: {
        minHeight: '100vh',
        backgroundImage: `url(${bg})`,
        backgroundColor: 'transparent',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    mainTitle: {
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh'
    },
    imageButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '200px',
        height: '100px',
        background: 'none'
        
    },
}));
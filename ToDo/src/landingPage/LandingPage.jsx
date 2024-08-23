import style from './LandingPage.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

const LandingPage = (props) => {
    return (
        <>
         <ul>
            {props.MyToDo.map((item, index)=> {
                return(
                <li key={index}>{item}  <div> <span className={style.spans}>{<ArrowBackIcon />}</span> <span onClick={ () => props.CallForDelete(index)}>{<CloseIcon/>}</span> <span>{<ArrowForwardIcon />}</span> </div> </li>
                )
            })}
        </ul>
        </>
    )
}
export default LandingPage;
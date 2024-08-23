import style from './AddBut.module.scss';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const AddButton = (props) => {
    
    return (
        <>
         <span className={style.AddNew} onClick={props.handleToggle} ><p> {<ControlPointIcon/>} Add new</p></span>
         
        </>
    )
}
export default AddButton;
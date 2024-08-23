import style from './Delete.module.scss'; 
import DeleteIcon from '@mui/icons-material/Delete';
const Delete = (props) => {
    return (
        <>
                {props.MyToDo.length > 1 &&(
                <span className={style.Delete} onClick={props.DeleteAll}> {<DeleteIcon />} </span>
            )} 
        </>
    )
}
export default Delete;
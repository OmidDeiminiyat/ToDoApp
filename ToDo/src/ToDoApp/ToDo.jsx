import { useState } from 'react'
import style from './ToDo.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
const ToDo = (props) => {

  
    return (
        <>
        <div className={style.TodoList} >
            <header className={style.header}> <span> {<ArrowBackIcon />}</span> <h1> To Do </h1> <span onClick={props.hanndleVisible}>  {<ArrowForwardIcon />}</span></header>
            <div className={style.Form}  style={{ display: props.isVisible ? 'block' : 'none' }}>
                <input type="text" value={props.insertValue} onChange={(e) => props.setInsertValue(e.target.value)} />
                <h5 className={style.add} onClick={props.addItems}>Add to list</h5>
            </div>

        </div>
       
        </>
    )
}
export default ToDo;
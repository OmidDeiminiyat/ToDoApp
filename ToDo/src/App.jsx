import ToDo from './ToDoApp/ToDo';
import { useState } from 'react'
import LandingPage from './landingPage/LandingPage';
import style from './mainStyle.module.scss';
import AddButton from './addBut/AddBut';
import Delete from './Delete/Delete';
import Footer from './footer/Footer';

function App() {
  const [MyToDo, setMyToDo] = useState([]);
  const [insertValue, setInsertValue] = useState('');
  const addItems = () => {
      if (insertValue.trim() !== '') {
          setMyToDo([...MyToDo, insertValue]);
           setInsertValue('');
         console.log(MyToDo);
      }

  };


  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
      setIsVisible(!isVisible); 
     };


     const DeleteAll = () => {
           setMyToDo([]);
       }

       const CallForDelete = (index) => {
        console.log(index);
       const newMyToDo = MyToDo.filter((LetsDelete, i ) => i !== index);
        setMyToDo(newMyToDo);
       console.log(newMyToDo);
       }
       
       const [newVisible, setnewVisible] = useState(true);

  const hanndleVisible = () => {
    setnewVisible(!newVisible);
    console.log(newVisible);
    
  };

  return (
    <>
    {newVisible ? 
        <main className={style.mainApp} >
          <ToDo insertValue={insertValue} setInsertValue={setInsertValue} addItems={addItems} isVisible={isVisible} hanndleVisible={hanndleVisible} />
          <LandingPage MyToDo={MyToDo} CallForDelete={CallForDelete} />
          <AddButton handleToggle={handleToggle} />
          <Footer>
          <Delete MyToDo = {MyToDo} DeleteAll={DeleteAll} />
          </Footer>
        </main>
         : 

      <div id='secondPage'>
      </div>
}

    </>
  )
}
export default App

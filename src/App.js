import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './component/Header/Header';
import fakeData from './fakedata/course.json'
import Shop from './component/Shop/Shop';
import Cart from './component/Cart/Cart';
import { useState } from 'react';

function App() {
  const[course , setCourse] = useState([]);
  const addEvent = (data) =>{
    const newCourse = ([...course , data]);
    setCourse(newCourse);
  }
  return (
    <div className="App">
      <Header></Header>
      <div className='main'>
      <div className='shop'>
        
        {
         fakeData.map(fakeData => <div className='kisuna'><Shop data = {fakeData} addEvent = {addEvent}></Shop></div> )
        }
      
        </div>
      <Cart course = {course}></Cart>
      </div>
    </div>
  );
}

export default App;

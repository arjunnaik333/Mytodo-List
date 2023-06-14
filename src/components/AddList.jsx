import React from 'react';
import './AddList.css';

const AddList=()=>{
    return(
        <div>
        <div className='header-container'>
        <header className='header-name'>My To Do List</header>
        <input id='title' type='text' placeholder='Title' /> &nbsp;
        <button>Add</button>
    </div>

    <div className='list-container'>
        <span className='grid-item'>List</span>




    </div>



    </div>
    )
}



export default AddList;
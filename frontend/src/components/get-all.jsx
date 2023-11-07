import React, { useEffect, useState } from 'react'

function Getall() {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/all");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const responseData = await response.json();
        setTasks(responseData.data); 
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData();

  },[])
    
  return (
    <div className='getall_container'>
      {
        tasks.map(task => <p key={task._id}>{task.title}</p>)
      }
    </div>
  )
}

export default Getall

import React, { useState, useEffect, Suspense } from 'react'
import Users from './components/Users';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUsers(data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
      <Suspense fallback={<h3>Loading...</h3>}>
        <div>
          { users.map( user => <Users key={user.id} user={user} />) }
        </div>
      </Suspense>
      
  )
}

export default App
import axios from 'axios';
import React, { useEffect , useState } from 'react'


const UserListe = () => {
 const [users, setUsers]= useState();

useEffect(()=> {
 
 axios.get("https://jsonplaceholder.typicode.com/users").then((resultat) => {

 setUsers(resultat.data);

 //console.log(resultat.data)

 });
});

  return (
    <div>
    {users && users.map((el) =>(
     <p> {el.name } </p>
    )
    )
}
    </div>
  )
};

export default UserListe;
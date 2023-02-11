import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AllUserType = () => {

    const [objects,setObjects] = useState([]);

    useEffect(() => {
        axios.get('/api/types/')
        .then((res) => {
            setObjects(res.data)
            console.log('Types was called')
        })
        .catch(function (err) {
          console.error(err);
         })
    },[])


  return (
    <div>
        {
            objects.map((obj) => (
                <p key={obj.typeID}>{obj.typeID}:{obj.typeUser}</p>
            ))
        }
    </div>
  )
}

export default AllUserType
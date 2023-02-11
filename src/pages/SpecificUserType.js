import { useState, useEffect } from 'react';
import '../stylesheets/App.css';
import axios from 'axios';

function SpecificUserType() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get('/api/type/1/')
    .then((res) => {
      setData(res.data)
      console.log('Specific Type was called')
    })
    .catch(function (err) {
      console.error(err)
     })
  },[])
  

  return (
    <div className="Home">
      <p>Data : {data.typeID}</p>
      <p>Type : {data.typeUser}</p>
    </div>
  );
}

export default SpecificUserType;

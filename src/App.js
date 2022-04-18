import { useEffect, useState } from "react";
import './App.css';

function DisplayData(props) {
  return <div>
    <h1>{props.data.name}</h1>
    <p>{props.data.location}</p>
    <img alt={props.data.login} src={props.data.avatar_url} />
  </div>
}

function App({username}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(setData)
  }, [username])
  if(data) {
    return <DisplayData data={data} />
  } else {
    return <div>No user available</div>
  }
}

export default App;

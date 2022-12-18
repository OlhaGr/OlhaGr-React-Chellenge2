/* eslint-disable jsx-a11y/img-redundant-alt */
import './App.css';
import  React, { useState, useEffect } from 'react' ;
import axios from 'axios';

function App() {
   const [pages, setPages] = useState([]);
   const [repo, setRepo] = useState([]);
   const photo = pages.avatar_url;

   useEffect(() => {
    axios.get('https://api.github.com/users/OlhaGr?client_id=a1a5a13b1e7446f4e730&client_secret=5b4cf0f151ef1ff324ea903ae0146d35d61e26d7&sort=created')
      .then((res) => { 
        setPages(res.data);
      })
      .catch ((err) =>
        console.log(err));
    }, []);

   useEffect(() => {
    axios.get('https://api.github.com/users/OlhaGr/repos')
      .then((repo) =>
        setRepo(repo.data)
      )
      .catch ((err) =>
      console.log(err));
    });

  return (
    <div className="App">
       <div id='user'>
          <div id='pic'><img src={photo} alt="photo" /></div>
          <div id='userinfo'>
           <li>Full Name: {pages.name}</li>
            <li>User Name: {pages.login}</li>
             <li>Email Address: {pages.email}</li>
             <li>Location: {pages.location}</li>
          </div>
      </div>
        <div id='repos'>
          <h3>Repositories</h3>
          <ul>
            {repo.map((item) => {
              return <li key={item.id}><a href={'https://github.com/' + item.full_name}>{item.name}</a></li>
            })}
          </ul>
        </div>
    </div>
  );
}

export default App;

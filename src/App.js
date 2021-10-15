import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState , useEffect } from 'react';
const apiRoot ="https://localhost:44381/api/notes"

function App() {

  const [notes, setnotes] = useState([])

  useEffect(() => {

    fetch(apiRoot)
    .then(Response => Response.json())
    .then(data => setnotes(data));

  }, [notes]);

  return (
    <div className="container mt-3">
      <h1>My Notes</h1>

      <ul>
        {notes.map(x =>

          <li>{x.title}</li>

        )}
      </ul>

    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, button} from 'react-bootstrap';

function App() {
  return (
    <div className="container mt-3">
      <h1>RNote</h1>
      <button className="btn btn-primary">Bir Buton</button>
      <Button variant="danger">Bir Buton</Button>
    </div>
  );
}

export default App;

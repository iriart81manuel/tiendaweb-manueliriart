import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Title from './componentes/Title/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
       
      </header>

      <div className='texto'>
        <Title />
      </div>
    </div>
  );
}
export default App;

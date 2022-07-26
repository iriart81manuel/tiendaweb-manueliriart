import './App.css';
import Counter from './componentes/ItemCount/ItemCount';
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
        <Counter />
      </div>
    </div>
  );
}
export default App;

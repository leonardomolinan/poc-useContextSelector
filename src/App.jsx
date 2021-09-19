import './App.css';
import FakeComponent from './components/FakeComponent'
import FakeComponent2 from './components/FakeComponent2';
import { CounterProvider } from './contexts/CounterContext'

function App() {

  return (
    <div className="App">
      <CounterProvider>
        <FakeComponent />
        <FakeComponent2 />
      </CounterProvider>
    </div>
  );
}

export default App;

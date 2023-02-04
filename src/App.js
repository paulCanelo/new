//import './css/App.css';
import { BrowserRouter } from "react-router-dom"
import Rutas from './routes/rutas'
import ThemeProvider from './components/context/Provider'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

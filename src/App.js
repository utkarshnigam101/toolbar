
import './App.css';
import  {BrowserRouter,Route} from "react-router-dom"
import Navbar from './components/navbar';
import Switch from "react-switch";
import Home from './pages/home';
import Classwork from './pages/classwork';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar>
      <Switch>
        <Route>
                <Route path='/' exact component={Home}></Route>
                <Route path='/services'  component={Classwork}></Route>

        </Route>
      </Switch>
    </Navbar>
    </BrowserRouter>
    </>
  )
}

export default App;

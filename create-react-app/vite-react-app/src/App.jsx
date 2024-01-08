import './App.scss'
import Header from './components/Header/Header'
//import Card from './components/Card/Card'
import Home from './containers/Home/Home'

function App() {
  return (
    //react  fragments are empty <>, but doesnt let you add attributes
    //<React.Fragment>
      <>
      <Header />
        <Home />
      <footer>Copyright</footer></>
    
    //</React.Fragment>
  )
}

export default App

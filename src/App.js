import React from 'react'
import { Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from "./pages/shop/shop.page";
import Header from "./components/header/header.component";
// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       string: 'Hello'
//     }
//   }
//   // componentDidMount() {

//   // }
//   // componentWillUnmount() {

//   // }
//   render() {
//     return (
//       <h1>
//         <HomePage />

//       </h1>

//     )
//   }

// }

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}
export default App;
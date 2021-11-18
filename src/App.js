import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
// import Header from './Pages/Shared/Header/Header';
import Products from './Pages/Products/Products';
import PrivateRoute from './Pages/Shared/PrivateRoute';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Login from './Pages/Register/Login';
import DashBoard from './Pages/DashBoard/DashBoard';
import UpdateOrder from './Pages/DashBoard/UpdateOrder/UpdateOrder';


function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/products'>
            <Products></Products>
          </Route>
          <PrivateRoute path='/product/:id'>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path='/update-order/:id'>
            <UpdateOrder />
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>     
      </AuthProvider> 
    </div>
  );
}

export default App;

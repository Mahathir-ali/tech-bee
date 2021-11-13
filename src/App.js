import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import ContactUs from "./Page/ContactUs/ContactUs";
import Dashboard from "./Page/Dashboard/Dashboard/Dashboard";
import Details from "./Page/Details/Details";
import Home from "./Page/Home/Home/Home";
import Login from "./Page/Login/Login/Login";
import Register from "./Page/Login/Register/Register";
import ProductPage from "./Page/ProductPage/ProductPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="/productPage">
              <ProductPage></ProductPage>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

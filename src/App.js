import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
// import Order from "./Order";
const promise=loadStripe(
  'pk_test_51OPQzIE083Ya9kcUSc33EnCa11PlKGosZ0F5e48cgUOeD1R5lmBoF0jpPotkXn4pxIbmBKNTexf6uvPLmoebfUSM00WVyAK77k'
) 
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("the user is", authUser)
      if (authUser) {
        // the user just looged in / the user was

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders/>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
              <Elements stripe={promise}>
              <Payment/>
              </Elements>
              
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

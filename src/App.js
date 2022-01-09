import React, { Component } from "react";
import "./App.css";
import MenuList from "./components/MenuList/MenuList";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import Logo from "./components/Logo/Logo";
import CategoryList from "./components/CategoryList/CategoryList";
import UserLogOut from "./components/UserLogOut/UserLogOut";

class App extends Component {
  state = {
    email: "",
    orderTotal: 0,
    currentOrderId: "",
    isPaid: false,
    categories: [
      "Sandwiches",
      "Seafood",
      "Mexican",
      "italian",
      "Desserts",
      "Drinks",
    ],
    cartItems: [],
  };
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <Logo />
          <CategoryList />
          <UserLogOut />
        </nav>
        <MenuList />
        <OrderDetail currentOrderId={this.state.currentOrderId} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import "./App.css";
import Scroll from "../Components/Scroll";

class App extends Component {
   constructor() {
      super();
      this.state = {
         robots: [],
         searchField: "",
      };
   }

   componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((users) => this.setState({ robots: users }));
   }

   onChangeSearch = (event) => {
      this.setState({
         searchField: event.target.value,
      });
   };

   render() {
      const filterRobot = this.state.robots.filter((robot) => {
         return robot.name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase());
      });

      if (this.state.robots.length == 0) {
         return <h1 className="tc custom">LOADING</h1>;
      } else {
         return (
            <div className="tc">
               <h1 className="f1 custom">RoboFriends</h1>
               <SearchBox onChangeSearch={this.onChangeSearch} />
               <Scroll>
                  <CardList robots={filterRobot} />
               </Scroll>
            </div>
         );
      }
   }
}

export default App;

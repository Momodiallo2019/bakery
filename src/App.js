import React, { Component } from 'react';
import Add from './component/Add';
import List from './component/List';
import Slider from "rc-slider";
import Button from './component/core/Button';
import 'rc-slider/assets/index.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      item: [],
      price: 0
    };
    // this.onAddItem = this.onAddItem.bind(this);
  }

  onClickTabAdd = () => {
    this.setState({
      activeTab: "add"
    })
  }

  onClickTabList = () => {
    this.setState({
      activeTab: "list"
    })
  }

  onClickTabPay = () => {
    this.setState({
      activeTab: "pay"
    })
  }
  

  render() {
    return (
         <div>
           <h1>Bakery </h1>
           <div>
           <Button onClick={this.onClickTabAdd}>Add</Button>
           <Button onClick={this.onClickTabList}>List</Button>
           <Button onClick={this.onClickTabPay}>Pay</Button>
             {/* <Slider />  */}
             </div>
             <div>
             {this.state.activeTab === 'add'
             <Add.onClick= {this.onAddItem}; />
              }
             </div>
      </div>
    );
  }
}

export default App;





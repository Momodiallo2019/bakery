import React from 'react';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/core/Button';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      items: [],
      product: '',
      price: 1
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeProduct = this.onChangeProduct.bind(this);
  }

  onChangeProduct = (product) => {
    this.setState({
      product
    })
    console.log('product', product);
  }

  onChangePrice = (price) => {
    this.setState({
      price
    })
    console.log('price', price);
  }

  //Permet de stocker le product et le price dans l'array Items
  onAddItem = () => {
    const item = {
      product: this.state.product,
      price: this.state.price
    };
    const newItems = this.state.items;
    newItems.push(item);
    console.log('newItems', newItems);
    this.setState({
      items: newItems
    });
  }
//////////////////////////////////////////////////////////////////////////



//Permet de naviger entre Add, List et Pay
  onClickTabAdd = () => {
    console.log(">> App#onClickTabAdd");
    this.setState({
      activeTab: "add"
    });
    console.log("<< App#onClickTabAdd");
  }

  onClickTabList = () => {
    this.setState({
      activeTab: "list"
    });
  }

  onClickTabPay = () => {
    this.setState({
      activeTab: "pay"
    });
  }

//////////////////////////////////////////////////////////////////////////


  render() {
    return (
        <div className="container">
          <div className="row">
           <h1 className="m-2">Bakery </h1>
           <Button onClick={this.onClickTabAdd}>Add</Button>
           <Button onClick={this.onClickTabList}>List</Button>
           <Button onClick={this.onClickTabPay}>Pay</Button>


            {this.state.activeTab === 'add' && <Add
            product={this.state.product}
            price={this.state.price}
            onChangePrice={this.onChangePrice}
            onChangeProduct={this.onChangeProduct}
            onAddItem={this.onAddItem} />}  


            {this.state.activeTab === 'list' && <List items={this.state.items} />}  


            {this.state.activeTab === 'pay' && <Pay items={this.state.items} />} 
          </div>
        </div>
    );
  }
}

export default App;
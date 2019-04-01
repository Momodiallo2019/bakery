import React from 'react';
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import Button from '../components/core/Button';

class Add extends React.Component {

      render() {
      return (
        <div className="col-12 col-md-12">
          <h1>Add</h1>
          
          <input type="text" 
          className="form-control m-2" 
          value={this.props.product} 
          onChange={(evt) => {
            this.props.onChangeProduct(evt.target.value);
          }} />
          <p>{this.props.price}€</p>
          <Slider min={1} max={10} value={this.props.price} onChange={(val) => this.props.onChangePrice(val)} /> 
          <Button onClick={this.props.onAddItem}>Add</Button>
        </div>
      );
    }
  }

  export default Add;
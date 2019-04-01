import React from 'react';
import Card from './product/Card';

class Pay extends React.Component {
  
  constructor(props) {
    super(props);
    this.onClickCard = this.onClickCard.bind(this)
  }

  onClickCard(item) {
    console.log('item', item);
    // code
  }
  render() {
    return (
      <div>
        {/* <h1>Pay</h1> */}
        {this.props.items.map((item, index) => {
          return (
            <Card key={index} product={item.product} price={item.price} onClick={this.onClickCard} />
          );
        })}
      </div>
    );
  }
}
    
    export default Pay;
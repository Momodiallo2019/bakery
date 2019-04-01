/* import React from 'react';
//import specimen from '../../specimen.jpg';

class Card extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      source : specimen
    }
  }

  componentDidMount() {
    fetch(`http://digitous.konexio.eu/exercises/bakery/api/?q=${this.props.product}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          source : data.source
        })
      })
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          const item = {
            product: this.props.product,
            price: this.props.price
          };
          this.props.onClick(item)
        }}>
          <img src={this.state.source} alt={this.props.product} />
        </button>
      </div>
    );
  }
}

export default Card; */
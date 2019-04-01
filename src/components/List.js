import React from 'react';
// import Slider from "rc-slider";
// import 'rc-slider/assets/index.css';

class List extends React.Component {

    render() {
        return (
        <div>
            {/* <h1>List</h1>    */}
            <ul>
              {this.props.items.map((item, index) => {
                return (
              <li key={index}>{item.product} - {item.price}</li>
            );
          })}
        </ul>     
        </div>

        );
      }
    }
    
    export default List;
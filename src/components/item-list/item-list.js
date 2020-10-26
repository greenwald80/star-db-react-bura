// import React, { Component } from "react";
// import Spinner from "../spinner/spinner";
// import "./item-list.css";

// class ItemList extends Component {
//   state = {
//     itemList: null,
//   };

//   componentDidMount() {
//     const { getData } = this.props;
//     getData().then((itemList) => {
//       this.setState({
//         itemList,
//       });
//     });
//   }

//   renderItems(arr) {
//     return arr.map((item) => {
//       const { id } = item; //получаю id из item
//       const label = this.props.children(item);
//       return (
//         <li
//           className="list-group-item"
//           key={id}
//           onClick={() => this.props.onItemSelected(id)}
//         >
//           {label}
//         </li>
//       );
//     });
//   }

//   render() {
//     const { itemList } = this.state;
//     if (!itemList) {
//       return <Spinner />;
//     }
//     const items = this.renderItems(itemList);
//     return <ul className="item-list list-group">{items}</ul>;
//   }
// }

// const f= ()=>{
//   //return ItemList;
//   return class extends Component{

//     componentDidMount(){
//       console.log(this.props);
//     }

//     render(){
//       return <ItemList {...this.props}/>
//     }
//   }
// }

// export default f();

import React from "react";
import "./item-list.css";

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

export default ItemList;

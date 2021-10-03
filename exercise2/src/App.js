  
import React from "react";
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

class App extends React.Component {
  constructor(props)
  {

    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Apples', qty: 10},
        { id: 2, value: 'Bananas', qty: 3},
        { id: 3, value: 'Bread', qty: 4},
        { id: 4, value: 'Eggs', qty: 7}
      ]
    };


  }

  addItem = (item, quantity) => {
    const searchResult = this.state.items.findIndex((element, index, array) => {
      if(element.value === item) {
        return true;
      } else {
        return false;
      }
    });

    if(searchResult != -1) {
      [...this.state.items][searchResult].qty += quantity;
      this.setState({ items: [...this.state.items] });
    } else {
        this.setState({ items: [...this.state.items, {id: this.state.items.length + 1, value: item, qty: quantity}] });
    }
  }




  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>

      <div className = { styles.title }>
        Exercise2, Shopping list
      </div>

      <ShoppingList items={ this.state.items } />


      <div className={ styles.buttons }>
        
        <button onClick={ () => this.addItem('Carrots', 1) }>Add carrots</button>
        <button onClick={ () => this.addItem('Strawberries', 1) }>Add strawberries</button>
        <button onClick={ () => this.addItem('Yogurt', 1) }>Add yogurt</button>
        <button onClick={ () => this.addItem('Beer', 1) }>Add beer</button>

      </div>

    </div>
  }
}

export default App;
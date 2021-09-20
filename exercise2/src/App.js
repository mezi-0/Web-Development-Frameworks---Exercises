  
import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };


  }

  // A function that adds an item to the list if the is not present, or adds +1 qty to the item, if it is on the list
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
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
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
import React from 'react';
import DataView from './components/DataView';
import data from './data.json';
import styles from './App.module.css';
import EditMode from './components/EditMode';



class App extends React.Component {
  constructor(props) 
  {
      super(props); 
      this.state = {
        items: data.items,
        itemSearch: "", 
        newItemName: "",
        newItemPrice: "",
        newItemProc: "",
        newItemGraph: "",

        deleteMode: false,
      }
  }


  searchFieldChange = (event) => {
    this.setState({ itemSearch: event.target.value });
  }

  addNewItem = () => {
    let newItems = [...this.state.items];
    newItems.push ({
      id: newItems.length + 1,
      name: this.state.newItemName,
      price: this.state.newItemPrice,
      desc_processor: this.state.newItemProc,
      desc_graphCard: this.state.newItemGraph
    });

    this.setState({
      items: newItems
    });
  }

  deleteItem = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})


  render() {

    let output =
      <>
        <div className = { styles.searchField } > 
          Search <input type="text" onChange={this.searchFieldChange} value = { this.state.itemSearch }/>
        </div>

        <div className = { styles.addNewItem }>
          Add new item
          <div className = { styles.newName }>
            Name <input type = "text" onChange={(event) => this.setState({ newItemName: event.target.value }) } />
          </div>

          <div className = { styles.newPrice }>
            Price <input type = "number" step="0.01" min="0" onChange= {(event) => this.setState({ newItemPrice: event.target.value}) } />
          </div>

          <div className = { styles.newProc }>
            Processor <select name = "processor" onChange={(event) => this.setState({newItemProc: event.target.value}) }>
              <option value = "Intelcore">Intel Core I5</option>
              <option value = "AMD">AMD Ryzen 5</option>
            </select>
          </div>

          <div className = { styles.newGraph }>
            Graph card <select name = "graph" onChange={(event) => this.setState({newItemGraph: event.target.value}) }>
              <option value = "gtx"> NVIDIA GeForce 1060</option>
              <option value = "rtx"> GeForce RTX 3060</option>
            </select>
          </div>

          <button onClick= { this.addNewItem }> Add Item </button>
        </div>
        
        <div className = { styles.deleteButton }>
          <button onClick={() => this.setState({deleteMode: !this.state.deleteMode})}>Delete Items</button>
        </div>
        

          <DataView items= { this.state.items.filter((item) => item.name.includes(this.state.itemSearch )) }/>
      </>


    if(this.state.deleteMode) {
      output = <EditMode disableDeleteMode ={() => this.setState({deleteMode: false}) }
      items={ this.state.items }
      deleteItem={ this.deleteItem }
      />;
    }

    return (
      <>
        { output }
      </>
    )
  }
}

export default App;

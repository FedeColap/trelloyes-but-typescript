import React from 'react';
import "./App.css";
import List from './components/List'


type ExampleCard = {
  id: string,
  title: string,
  content: string
}

type AppProps ={
  store: {
    lists: 
      {
        id: string, 
        header: string,
        cardIds: string[] 
      }[],
    allCards: {
        [id: string]:ExampleCard
    }
  }
}

const App: React.FC<AppProps> =(props) =>{
  let listOfLists = props.store.lists.map(singleList => <List key={singleList.id} header={singleList.header} cards={singleList.cardIds.map(id => props.store.allCards[id])}></List>)

  return (
    <div className="App">
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {listOfLists}
        </div>
    </div>
  );
}

export default App;

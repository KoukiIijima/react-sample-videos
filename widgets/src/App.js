import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordions from "./components/Accordions";
import Search from './components/Search'

const items = [
    {
        title: '1.What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: '2.Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: '3.why use React?',
        content: 'You use React by createing components',
    }
]

const App = () => {
  return (
    <div>
      <Search />
      <Accordions items={items} />
    </div>
  );
};

export default App;

import React from 'react';
import Header from './components/Header/Header';
import Setting from './components/Setting/Setting';
import Search from './components/Search/Search'
import Cards from './components/Cards/Cards'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Setting />
                <Search />
                <Cards />
            </div>
        )
    }
}

export default App;

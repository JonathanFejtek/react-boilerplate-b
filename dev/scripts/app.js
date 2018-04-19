import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends React.Component {
    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
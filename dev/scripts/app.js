import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/'
import ItemListContainer from './containers/ItemListContainer';
import {ItemCreator} from './components/ItemCreator.js'
import {PresetList} from './components/PresetList.js'

import {PartialSliderGroupContainer} from './containers/PartialSliderGroupContainer'


export const store = createStore(rootReducer);

store.subscribe(()=>{console.log(store.getState())});

class App extends React.Component {
    render() {
        return (
            <div>
                <PartialSliderGroupContainer />
            </div>
        )
    }
}

class Root extends React.Component{
    render(){
        return (
            <Provider store = {store} >
                <App />
            </Provider>
        )
    }
}


ReactDOM.render(<Root />, document.getElementById('app'));
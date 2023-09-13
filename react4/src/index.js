import ReactDOM from 'react-dom/client';
import App3 from './App3';

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'

let store = configureStore({
    preloadedState : { name : "rohit", age : 25 },
    reducer : (data)=>{
        return data
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App3 />
        </BrowserRouter>
    </Provider>
  
);

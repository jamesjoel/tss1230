import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import TeacherSlice from './redux/TeacherSlice'

let store = configureStore({
   reducer : TeacherSlice
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <Provider store={store}>
        <App />
   </Provider>
   </BrowserRouter>
);

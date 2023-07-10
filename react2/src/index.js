
import ReactDOM from 'react-dom/client';
import Abc from './box'
import Xyz from './box2'

const root = ReactDOM.createRoot(document.getElementById('box'));

root.render(
  <>
    <Xyz />
    <Abc />
  </>
);



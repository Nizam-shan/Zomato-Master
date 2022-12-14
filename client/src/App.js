
import './App.css';
import HomeLayoutHoc from './layout/HomeLayoutHoc';
import Temp from './components/temp';
import Master from './components/master';

function App() {
  return (
   <> 
    <HomeLayoutHoc path="/" exact component={Temp} />
    <HomeLayoutHoc path="/:type" exact component={Master} />
   </>
  );
}

export default App;

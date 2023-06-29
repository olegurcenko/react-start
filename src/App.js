import './App.css';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Nav } from './components/Nav';

// function App() {
//   return (
//     <div className="App">
//       simple html
//     </div>
//   );
// }
const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Content/>
    </div>
  )
}


export default App;

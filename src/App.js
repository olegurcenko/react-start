import './App.css';
import { Content } from './components/main/content/content';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Dialogs } from './components/main/dialogs/dialogs';
import { News } from './components/main/news/news';
import { Music } from './components/main/music/music';
import { Settings } from './components/main/settings/settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       simple html
//     </div>
//   );
// }
const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='appWrapperContent'>
          <Routes>
          <Route path='/dialogs' Component={Dialogs} />
          <Route path='/' Component={Content} />
          <Route path='/news' Component={News} />
          <Route path='/music' Component={Music} />
          <Route path='/settings' Component={Settings} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}


export default App;

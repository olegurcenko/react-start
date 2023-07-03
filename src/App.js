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



const App = (props) => {
  return (
    <div className='app-wrapper'>
        <Header />
        <BrowserRouter>
        <Nav />
        <div className='appWrapperContent'>
          <Routes>
          <Route path='/dialogs' element={<Dialogs/>} />
          <Route path='/' element={<Content posts={props.posts}/>} />
          <Route path='/news' element={<News/>} />
          {/* <Route path='/music' Component={Music} /> */}
          {/* <Route path='/settings' Component={Settings} /> */}

          <Route path='/settings' element={<Settings text='hello'/>} />
          <Route path='/music' element={<Music/>} />
           {/* instead of rendering  */}
          </Routes>
        </div>
    </BrowserRouter>
        <Footer />
      </div>
  )
}


export default App;

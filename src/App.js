import './App.css';
import { Content } from './components/main/content/content';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Dialogs } from './components/main/dialogs/dialogs';
import { News } from './components/main/news/news';
import { Music } from './components/main/music/music';
import { Settings } from './components/main/settings/settings';
import { Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       simple html
//     </div>
//   );
// }


// posts={state.postsData} dialogElems={state.dialogsData} messageData={state.messageData}
const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
        <Nav />
        <div className='appWrapperContent'>
          <Routes>
            <Route path='/dialogs'
              element={<Dialogs  state={props.state.messagesPage}/>} />
              {/* dialogsData={props.state.messagesPage.dialogsData} messageData={props.state.messagesPage.messageData} */}
            <Route path='/profile'
              element={<Content posts={props.state.profilePage} />} />
            <Route path='/news'
              element={<News />} />
            {/* <Route path='/music' Component={Music} /> */}
            {/* <Route path='/settings' Component={Settings} /> */}

            <Route path='/settings' element={<Settings text='hello' />} />
            <Route path='/music' element={<Music />} />
            {/* instead of rendering  */}
          </Routes>
        </div>
      <Footer />
    </div>
  )
}


export default App;

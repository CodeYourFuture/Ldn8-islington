import './App.css'
import Main from './component/Main';

function App() {
  return (
    <div>
      <header>
      <h1>London Mini Guide</h1>
      </header>

      <div className="content">
      </div>
      {/* {localStorage.setItem('name','Chris')} */}
      <Main />
    </div>
  )
}

export default App

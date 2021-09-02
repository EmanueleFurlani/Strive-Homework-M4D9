import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import MyNav from './components/MyNav'
import MyJumbotron from './components/MyJumbotron'
import MyFooter from './components/MyFooter'
import Registration from './components/Registration'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
        <MyNav title="Stribook" color="dark"/>
      <header className="App-header">
        {/*<MyJumbotron />*/}
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}
        {/* <SingleBook book={fantasyBooks[0]} /> */}
          <Route path="/home" exact render={() => <BookList books={fantasyBooks} />} />
          <Route path="/register" exact component={Registration} />
      </header>
       <MyFooter />
    </div>
    </Router>
  )
}

export default App

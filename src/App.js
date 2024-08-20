import Navbar from './Navbar';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  /*const title = "My Blog"
  const l = 50
  const person = {name : 'Yassine', age : 30} // we can not display a object like this  <p>{person}</p>
  const link = "https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4"
*/
//route "/" : is the path after the path of the root in web
//Notfound the path to * + the last router 
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path= "/">
            <Home/>
          </Route> 
          <Route path= "/create">
            <Create/>
          </Route>
          <Route path= "/blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path= "*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

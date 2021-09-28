import { Topbar } from "./component/topbar/Topbar";
import "./App.css"
import { Sidebar } from "./component/sidebar/Sidebar";
import { Homepage } from "./component/homepage/Homepage";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { Postlist } from "./component/postlist/Postlist";
import { Post } from "./component/post/Post";
import { Newpost } from "./component/newpost/Newpost";

function App() {
  return (
    <Router>
    <div >
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/"><Homepage /></Route>
          <Route exact path="/postlist"><Postlist /></Route>
          <Route exact path="/post/:id"><Post /></Route>
          <Route exact path="/newpost"><Newpost /></Route>
        </Switch>
        </div>
        
      </div>
      </Router>

  );
}

export default App;

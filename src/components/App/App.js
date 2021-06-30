import { useState } from "react";
import RandomButton from "../RandomButton/RandomButton";
import AuthorQuotes from "../AuthorQuotes/AuthorQuotes";
import RandomQuote from "../RandomQuote.js/RandomQuote";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./css/App.css"

function App() {
  const [reloadCount, setReloadCount] = useState(0)

  return (
    <div className="App">
      <header>
        {
          //increase reloadCount to update/reload component
          //trigger new fetch
        }
        <RandomButton onClick={e => setReloadCount(reloadCount + 1)} />
      </header>
      <main aria-live="polite">
        <Router basename={process.env.PUBLIC_URL}>
          <Route path="/author=:author" exact>
            <AuthorQuotes reloadCount={reloadCount} />
          </Route>
          <Route path="/" exact>
            <RandomQuote reloadCount={reloadCount} />
          </Route>
        </Router>
      </main>
    </div>
  );
}

export default App;

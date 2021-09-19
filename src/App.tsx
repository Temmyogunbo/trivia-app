import { Home } from './Pages/Home';
import { ResultsPage } from './Pages/Results';
import { Quiz } from './Pages/Quiz';
import { Layout } from './component/common/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
console.log(process)
function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/results">
            <ResultsPage />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;

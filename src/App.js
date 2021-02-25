import { Route, Switch } from 'react-router-dom'
import Content from './containers/Content/Content'
import ChooseService from './components/ChooseService/ChooseService'
import Layout from './hoc/Layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/buying" exact component={ Content } />
        <Route path="/selling" exact component={ Content } />
        <Route path="/" exact component={ ChooseService } />
      </Switch>
    </Layout>   
  );
}

export default App;

import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './component/Home'
import CourseItemDetails from './component/CourseItemDetails'
import NotFound from './component/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App

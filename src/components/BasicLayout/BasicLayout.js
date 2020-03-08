import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Castle from './Homepage/Castle'
import HomepageLayout from './Homepage/HomepageLayout'
import WebDevLayout from './WebDev/WebDevLayout'
import ProjectsLayout from './Projects/ProjectsLayout'
import PreviousLifeLayout from './PreviousLife/PreviousLifeLayout'

function BasicLayout() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomepageLayout} />
        <Route path='/web-dev' exact component={WebDevLayout} />
        <Route path='/projects' exact component={ProjectsLayout} />
        <Route path='/previous-life' exact component={PreviousLifeLayout} />
      </Switch>
    </Router>
  )
}

export default BasicLayout

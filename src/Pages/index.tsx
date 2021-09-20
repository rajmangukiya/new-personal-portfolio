import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import About from './about/About'
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import Error from './error/Error'
import Home from './home/Home'
import OpenProject from './portfolio/OpenProject'
import Portfolio from './portfolio/Portfolio'
import Project from './portfolio/Project'

const Index: React.FC = () => {
    return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/portfolio/:id" component={OpenProject}/>
                <Route exact path="/blog" component={Blog}/>
                <Route exact path="/contact" component={Contact}/>
                <Route path="/error" component={Error} /> 
                <Redirect from="**" to="/error" />
            </Switch>
    )
}

export default Index

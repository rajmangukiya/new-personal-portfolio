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
                <Route exact path="rajmangukiya.github.io/new-personal-portfolio/" component={Home}/>
                <Route exact path="rajmangukiya.github.io/new-personal-portfolio/about" component={About}/>
                <Route exact path="rajmangukiya.github.io/new-personal-portfolio/portfolio" component={Portfolio}/>
                <Route exact path="rajmangukiya.github.io/new-personal-portfolio/portfolio/:id" component={OpenProject}/>
                <Route exact path="rajmangukiya.github.io/new-personal-portfolio/blog" component={Blog}/>
                <Route exact path="rajmangukiya.github.io/new-personal-portfolio/contact" component={Contact}/>
                <Route path="rajmangukiya.github.io/new-personal-portfolio/error" component={Error} /> 
                <Redirect from="**" to="rajmangukiya.github.io/new-personal-portfolio/error" />
            </Switch>
    )
}

export default Index
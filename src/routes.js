import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app/app'
import Home from './components/home/home'
import Users from './components/users/users_index'
import User from './components/users/users_show'
import UsersNew from './components/users/users_new'
import UsersEdit from './components/users/users_edit'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/users' component={Users}/>
    <Route path='/users/new' component={UsersNew}/>
    <Route path='/users/:userId' component={User}/>
    <Route path='/users/:userId/edit' component={UsersEdit}/>
  </Route>
)

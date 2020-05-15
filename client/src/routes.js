import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import { Users } from './components/Users'
import { UserAlbum } from './components/UserAlbums'
import { ListAlbum } from './components/ListAlbum'


export const useRoutes = () =>{

        return(
            <Switch>
                <Route path ='/users' title="usersList" exact>
                    <Users />
                </Route>
                <Route path ='/users/:id' title="userAlbums" exact>
                    <UserAlbum />
                </Route>
                <Route path ='/users/:id/album/:id' title="photoList" exact>
                    <ListAlbum />
                </Route>
                <Redirect to ='/users' />
            </Switch>
        )
}
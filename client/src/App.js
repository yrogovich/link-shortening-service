import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes"
import {useAuth} from "./hooks/auth.hook"
import {AuthContext} from "./context/AuthContext"
import {Navbar} from "./components/Navbar"
import Loader from "./components/Loader"
import {Footer} from "./components/Footer"
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
// loads the Icon plugin
UIkit.use(Icons)

function App() {
    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return <Loader />
    }

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <Router>
                <Navbar/>
                <main>
                    {routes}
                </main>
                <Footer/>
            </Router>
        </AuthContext.Provider>
    )
}

export default App

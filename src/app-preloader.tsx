import * as React from 'react'

import { routes } from 'settings/routes'
import { isUndefined } from 'helpers/predicts'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

// import { MainPage } from 'pages'

// import { Provider } from 'mobx-react'

// import { ui, app } from 'store'

import { CoreLayout } from 'layouts'

import { Preloader } from 'utils'

import { Header } from 'segments'

// const store = {
//     ui, app
// }

class App extends React.Component<{}, {}> {
    render () {
        return (
            // <Provider {...store}>
            <Router>
                <CoreLayout>
                    <Header />

                    <Switch>

                        {routes.map(({ resolve, ...rest }: any, key) => {
                            if (!isUndefined(resolve)) {
                                rest.component = Preloader({
                                    loader: resolve
                                })
                            }

                            return <Route {...rest} key={key} />
                        })}

                        {/*
                        {routes.map(({ component: Component, ...rest }: any, key) => (
                            <Route {...rest} key={key} render={(props: any) =>
                                <Component {...props} className={`fade fade-${status}`} />
                            } />
                        ))}
                        */}
                    </Switch>

                    {/* <Route path="/main" exact={true} component={MainPage} /> */}
                </CoreLayout>
            </Router>
            // </Provider>
        )
    }
}

export { App }
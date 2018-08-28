/* eslint-disable */
/* tslint:disable:max-line-length */

// import { routes } from 'pages/main-page'
// import { routes } from 'pages/example-page'
// import { routes } from 'pages/nomatch-page'

import { loadComponent } from 'utils'

export const MainPage = loadComponent(
    () => import(/* webpackMode: "lazy", webpackChunkName: "MainPage" */ 'pages/main-page')
)

export const ExamplePage = loadComponent(
    () => import(/* webpackMode: "lazy", webpackPrefetch: true, webpackChunkName: "ExamplePage" */ 'pages/example-page')
)

export const NoMatchPage = loadComponent(
    () => import(/* webpackMode: "lazy", webpackPrefetch: true, webpackChunkName: "NoMatch" */ 'pages/nomatch-page')
)

const locale: string = '/:locale(ru|en|de)'

export const routes: any = [
    {
        exact: true,
        path: `${locale}?`,
        component: MainPage
    },
    {
        path: `${locale}/example`,
        component: ExamplePage,
    },
    {
        status: 404,
        statusCode: 404,
        component: NoMatchPage
    }
]

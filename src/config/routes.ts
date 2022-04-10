import { lazy } from 'react'

const PageNotFound = lazy(() => import('components/pages/page-not-found'))
const Home = lazy(() => import('components/pages/home'))

export interface IRoutes {
  [key: string]: IRoute
}

export interface IRoute {
  component: React.LazyExoticComponent<() => JSX.Element>
  name: string
  path: string
}

const routes: IRoutes = {
  home: {
    component: Home,
    name: 'home',
    path: '/',
  },
  pageNotFound: {
    component: PageNotFound,
    name: 'Page not found',
    path: '/page-not-found',
  },
}

export default routes

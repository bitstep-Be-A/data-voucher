export interface Route {
  path: string;
  re: RegExp;
}

export const publicRoutes: { [key: string]: Route } = {
  'home': {
    path: '/',
    re: new RegExp('^/$')
  },
  'login': {
    path: '/login',
    re: new RegExp('^/login')
  }
}

export const authPermissionRoutes: { [key: string]: Route } = {
  'search': {
    path: '/search',
    re: new RegExp('^/search')
  }
}

export const routes: { [key: string]: Route } = {
  ...publicRoutes,
  ...authPermissionRoutes
}

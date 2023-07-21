export interface Route {
  path: string;
  re: RegExp;
}

export const publicRoutes: { [key: string]: Route } = {
  home: {
    path: '/',
    re: new RegExp('^/$')
  },
  login: {
    path: '/login',
    re: new RegExp('^/login')
  },
  register: {
    path: '/register',
    re: new RegExp('^/register')
  },
  findCredentialId: {
    path: '/login?find=id',
    re: new RegExp('^/login?find=id')
  },
  findCredentialPw: {
    path: '/login?find=pw',
    re: new RegExp('^/login?find=pw')
  }
}

export const authPermissionRoutes: { [key: string]: Route } = {
  search: {
    path: '/search',
    re: new RegExp('^/search')
  },
  bookmark: {
    path: '/bookmark',
    re: new RegExp('^/bookmark')
  },
  docs: {
    path: '/docs',
    re: new RegExp('^/docs')
  },
  my: {
    path: '/my',
    re: new RegExp('^/my')
  }
}

export const routes: { [key: string]: Route } = {
  ...publicRoutes,
  ...authPermissionRoutes
}

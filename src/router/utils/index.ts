import { RouteLocationNormalized, Router } from 'vue-router'

import { router } from '..'

type RouteMiddlewareFn = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) => void

function runMiddlewares(...middlewares: Function[]) {
  middlewares.forEach((middleware) => middleware(router))
}

const defineRouteMiddleware =
  (callback: RouteMiddlewareFn) => (router: Router) => {
    router.beforeEach(callback)
  }

export { runMiddlewares, defineRouteMiddleware }

import { RouteLocationNormalized, Router } from 'vue-router'

import { router } from '..'

export const defineRouteMiddleware =
  (callback: RouteMiddlewareCallback) => (router: Router) => {
    router.beforeEach(callback)
  }

export function runMiddlewares(...args: RouteMiddleware[]) {
  args.forEach((arg) => arg(router))
}

type RouteMiddlewareCallback = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) => void

type RouteMiddleware = ReturnType<typeof defineRouteMiddleware>

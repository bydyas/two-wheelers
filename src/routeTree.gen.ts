/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as authLayoutImport } from './routes/(auth)/_layout'
import { Route as landingLayoutImport } from './routes/(!landing)/_layout'
import { Route as landingLayoutIndexImport } from './routes/(!landing)/_layout.index'
import { Route as authLayoutLoginImport } from './routes/(auth)/_layout.login'
import { Route as landingLayoutContactUsImport } from './routes/(!landing)/_layout.contact-us'

// Create Virtual Routes

const authImport = createFileRoute('/(auth)')()
const landingImport = createFileRoute('/(!landing)')()

// Create/Update Routes

const authRoute = authImport.update({
  id: '/(auth)',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const landingRoute = landingImport.update({
  id: '/(!landing)',
  getParentRoute: () => rootRoute,
} as any)

const authLayoutRoute = authLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => authRoute,
} as any)

const landingLayoutRoute = landingLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => landingRoute,
} as any)

const landingLayoutIndexRoute = landingLayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => landingLayoutRoute,
} as any)

const authLayoutLoginRoute = authLayoutLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => authLayoutRoute,
} as any)

const landingLayoutContactUsRoute = landingLayoutContactUsImport.update({
  id: '/contact-us',
  path: '/contact-us',
  getParentRoute: () => landingLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(!landing)': {
      id: '/(!landing)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof landingImport
      parentRoute: typeof rootRoute
    }
    '/(!landing)/_layout': {
      id: '/(!landing)/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof landingLayoutImport
      parentRoute: typeof landingRoute
    }
    '/(auth)': {
      id: '/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/_layout': {
      id: '/(auth)/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authLayoutImport
      parentRoute: typeof authRoute
    }
    '/(!landing)/_layout/contact-us': {
      id: '/(!landing)/_layout/contact-us'
      path: '/contact-us'
      fullPath: '/contact-us'
      preLoaderRoute: typeof landingLayoutContactUsImport
      parentRoute: typeof landingLayoutImport
    }
    '/(auth)/_layout/login': {
      id: '/(auth)/_layout/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLayoutLoginImport
      parentRoute: typeof authLayoutImport
    }
    '/(!landing)/_layout/': {
      id: '/(!landing)/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof landingLayoutIndexImport
      parentRoute: typeof landingLayoutImport
    }
  }
}

// Create and export the route tree

interface landingLayoutRouteChildren {
  landingLayoutContactUsRoute: typeof landingLayoutContactUsRoute
  landingLayoutIndexRoute: typeof landingLayoutIndexRoute
}

const landingLayoutRouteChildren: landingLayoutRouteChildren = {
  landingLayoutContactUsRoute: landingLayoutContactUsRoute,
  landingLayoutIndexRoute: landingLayoutIndexRoute,
}

const landingLayoutRouteWithChildren = landingLayoutRoute._addFileChildren(
  landingLayoutRouteChildren,
)

interface landingRouteChildren {
  landingLayoutRoute: typeof landingLayoutRouteWithChildren
}

const landingRouteChildren: landingRouteChildren = {
  landingLayoutRoute: landingLayoutRouteWithChildren,
}

const landingRouteWithChildren =
  landingRoute._addFileChildren(landingRouteChildren)

interface authLayoutRouteChildren {
  authLayoutLoginRoute: typeof authLayoutLoginRoute
}

const authLayoutRouteChildren: authLayoutRouteChildren = {
  authLayoutLoginRoute: authLayoutLoginRoute,
}

const authLayoutRouteWithChildren = authLayoutRoute._addFileChildren(
  authLayoutRouteChildren,
)

interface authRouteChildren {
  authLayoutRoute: typeof authLayoutRouteWithChildren
}

const authRouteChildren: authRouteChildren = {
  authLayoutRoute: authLayoutRouteWithChildren,
}

const authRouteWithChildren = authRoute._addFileChildren(authRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof landingLayoutIndexRoute
  '/contact-us': typeof landingLayoutContactUsRoute
  '/login': typeof authLayoutLoginRoute
}

export interface FileRoutesByTo {
  '/': typeof landingLayoutIndexRoute
  '/contact-us': typeof landingLayoutContactUsRoute
  '/login': typeof authLayoutLoginRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(!landing)': typeof landingRouteWithChildren
  '/(!landing)/_layout': typeof landingLayoutRouteWithChildren
  '/(auth)': typeof authRouteWithChildren
  '/(auth)/_layout': typeof authLayoutRouteWithChildren
  '/(!landing)/_layout/contact-us': typeof landingLayoutContactUsRoute
  '/(auth)/_layout/login': typeof authLayoutLoginRoute
  '/(!landing)/_layout/': typeof landingLayoutIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/contact-us' | '/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/contact-us' | '/login'
  id:
    | '__root__'
    | '/(!landing)'
    | '/(!landing)/_layout'
    | '/(auth)'
    | '/(auth)/_layout'
    | '/(!landing)/_layout/contact-us'
    | '/(auth)/_layout/login'
    | '/(!landing)/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  landingRoute: typeof landingRouteWithChildren
  authRoute: typeof authRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  landingRoute: landingRouteWithChildren,
  authRoute: authRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(!landing)",
        "/(auth)"
      ]
    },
    "/(!landing)": {
      "filePath": "(!landing)",
      "children": [
        "/(!landing)/_layout"
      ]
    },
    "/(!landing)/_layout": {
      "filePath": "(!landing)/_layout.tsx",
      "parent": "/(!landing)",
      "children": [
        "/(!landing)/_layout/contact-us",
        "/(!landing)/_layout/"
      ]
    },
    "/(auth)": {
      "filePath": "(auth)",
      "children": [
        "/(auth)/_layout"
      ]
    },
    "/(auth)/_layout": {
      "filePath": "(auth)/_layout.tsx",
      "parent": "/(auth)",
      "children": [
        "/(auth)/_layout/login"
      ]
    },
    "/(!landing)/_layout/contact-us": {
      "filePath": "(!landing)/_layout.contact-us.tsx",
      "parent": "/(!landing)/_layout"
    },
    "/(auth)/_layout/login": {
      "filePath": "(auth)/_layout.login.tsx",
      "parent": "/(auth)/_layout"
    },
    "/(!landing)/_layout/": {
      "filePath": "(!landing)/_layout.index.tsx",
      "parent": "/(!landing)/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
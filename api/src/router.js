const express = require('express')

const router = express.Router()

const { query, getById, create, authenticate, refreshToken } = require('./../controllers/customer.controller')

const AuthService = require('./../services/auth.service')

/** routers users */
router.get('users/', query)
router.get('users/:id', getById)
router.post('users/', create)
router.post('users/authenticate', authenticate)
router.post('users/refresh-token', AuthService.authorize, refreshToken)

/** routers orders */
router.get('orders/', query)
router.get('orders:id', getById)
router.post('orders/', AuthService.authorize, create)

/** routers products */
router.get('products/', query)
router.get('products/:id', getById)
router.get('products/slug/:slug', getBySlug)
router.get('products/tags/:tag', getByTags)
router.post('products/', AuthService.isAdmin, create)
router.put('products/:id', AuthService.isAdmin, update)
router.delete('products/:id', AuthService.isAdmin, destroy)

module.exports = router
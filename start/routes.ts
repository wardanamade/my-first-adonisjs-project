/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('login', 'AuthController.login')
  Route.post('register', 'AuthController.register')
}).prefix('auth')

Route.group(() => {
  Route.get('me', 'AuthController.me')
  Route.post('logout', 'AuthController.logout')
}).middleware('auth')

Route.group(() => {
  Route.get('users', 'UsersController.index')
  Route.get('users/:id', 'UsersController.show')
  Route.post('users', 'UsersController.store')
  Route.put('users/:id', 'UsersController.update')
  Route.delete('users/:id', 'UsersController.destroy')

  Route.get('posts', 'PostsController.index')
  Route.get('posts/:id', 'PostsController.show')
  Route.post('posts', 'PostsController.store')
  Route.put('posts/:id', 'PostsController.update')
  Route.delete('posts/:id', 'PostsController.destroy')
}).prefix('api/v1')

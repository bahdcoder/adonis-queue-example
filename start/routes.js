'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/test', () => {
  const Queue = use('Queue')

  Queue.get().create('notify_users', {
    title: 'EXAMPLE JOB DATA '
  }).save()

  return 'DONE.'
})

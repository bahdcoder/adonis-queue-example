'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class QueueProvider extends ServiceProvider {
  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    this.app.singleton('Queue', () => {
      const Queue = require('../Queue/index.js')
      return new Queue
    })
  }
}

module.exports = QueueProvider

'use strict'

const kue = use('kue')

class Queue {
  /**
   * Initialize the queue
   */
  constructor (config) {
    this.queue = kue.createQueue(config)
  }

  /**
   * Get the queue
   */
  get () {
    return this.queue
  }
}

module.exports = Queue

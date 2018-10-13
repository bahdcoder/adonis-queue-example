const queue = require('kue').createQueue()

console.log(`
  ---- QUEUE WORKER STARTED ------
`)

queue.process('notify_users', (job) => {
  console.log(`
    -------- PROCESSING JOB -------
  `)
  
  displayData(job.data.title, () => {
    console.log(`
      -------- DONE PROCESSING JOB -------
    `)
  })
})

const displayData = (data, cb) => {
  setTimeout(() => {
    console.log(data)
    cb()
  }, 5000)
}

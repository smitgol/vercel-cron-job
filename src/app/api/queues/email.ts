import { Queue } from "quirrel/next-app"

export const emailQueue = Queue(
  "api/queues/email", // 👈 the route it's reachable on
  async job => {
    console.log('suii')
  }
)

export const POST = emailQueue
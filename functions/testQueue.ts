import { Queue } from "quirrel/netlify"

export const emailQueue = Queue(
  ".netlify/functions/email", // 👈 the route it's reachable on
  async job => {
    console.log('suii')
  }
)

export const POST = emailQueue
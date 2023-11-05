import { Handler } from "@netlify/functions";
import emailQueue from "./testQueue";

export const handler: Handler = async (request) => {
  const { body } = request;

  await emailQueue.enqueue("suii", {
    delay: "5min",
  });

  return {
    statusCode: 200,
  };
};
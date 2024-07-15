import Redis from "ioredis";
import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT, REDIS_USERNAME } from "./index.js";

// for dev
// let redis;
// try {
//   redis = new Redis({
//     port: Number(REDIS_PORT), // Redis port
//     host: REDIS_HOST, // Redis host
//     username: "default", // needs Redis >= 6
//     password: REDIS_PASSWORD,
//     db: 0, // Defaults to 0
//   });
// } catch (err) {
//   console.log("err", err);
// }

import createClient from 'ioredis';

console.log("REDIS:", REDIS_HOST, REDIS_PORT, REDIS_PASSWORD)

const redis = new createClient({
  password: REDIS_PASSWORD,
  socket: {
    host: REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT)
  }
});

// const redis = new createClient({
//   url: "redis://redis-docker-service:6379",  // works from Docker!
// });

export default redis;

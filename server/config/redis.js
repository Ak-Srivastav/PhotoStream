import Redis from "ioredis";
import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT, REDIS_USERNAME } from "./index.js";
let redis;
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

try {
  redis = new Redis({
    port: REDIS_PORT, // Redis port
    host: REDIS_HOST, // Redis host
    username: REDIS_USERNAME, // needs Redis >= 6
    password: REDIS_PASSWORD,
    // db: 0, // Defaults to 0
  });
  // await redis.connect(() => console.log('Redis Connected'));
} catch (err) {
  console.log("err", err);
}

export default redis;

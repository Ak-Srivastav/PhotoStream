import Redis from "ioredis";
import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from "./index.js";
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
    port: 6379, // Redis port
    host: 'oregon-redis.render.com', // Redis host
    username: 'red-cqanmbaju9rs739bhi50', // needs Redis >= 6
    password: 'r5U9MUkrkmrS6zOgUmEWr4wHQhyCK9Fu',
    // db: 0, // Defaults to 0
  });
  // await redis.connect(() => console.log('Redis Connected'));
} catch (err) {
  console.log("err", err);
}

export default redis;

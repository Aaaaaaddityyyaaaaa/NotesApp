const {Ratelimit} = require("@upstash/ratelimit")

const {Redis} = require("@upstash/redis")

const dotenv = require("dotenv")

dotenv.config() ; 

const rateLimit = new Ratelimit({
  redis:Redis.fromEnv(),
  limiter:Ratelimit.slidingWindow(5 , "20 s")
})

module.exports= rateLimit;
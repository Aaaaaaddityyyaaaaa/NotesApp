const rateLimit = require("../config/upstash");

const rateLimiter  = async(req,res,next)=> {
  try {
    const {success} = await rateLimit.limit("my-limit-ley")
    if(!success)
    {
      return res.status(429).json("too many request")
    }
    next()
  } catch (error) {
    console.error("Rate limiter error:", error);
    res.status(500).json("server error")
  }
}
module.exports = rateLimiter
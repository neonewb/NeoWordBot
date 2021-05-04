import { Context } from 'telegraf'
import logger from './logger'

/**
 * Wrapper to catch async errors within a stage. Helps to avoid try catch blocks in there
 * @param fn - function to enter a stage
 */
export const errorHandler = (fn: Function) => {
  return async function (ctx: Context, next: Function) {
    try {
      return await fn(ctx)
    } catch (error) {
      logger.error(ctx, 'errorHandler error, %O', error)
      await ctx.reply('Something went wrong')
      return next()
    }
  }
}

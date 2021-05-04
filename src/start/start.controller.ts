import { CMDA, TXT } from '../constants/'
import { Scenes, Markup } from 'telegraf'

// import logger from '../../util/logger';
// import User from '../../models/User';

// import { getMainKeyboard } from '../../util/keyboards';
const { enter, leave } = Scenes.Stage

export const startScene = new Scenes.BaseScene<Scenes.SceneContext>('start')

startScene.leave((ctx) => ctx.reply('Bye'))
startScene.hears('hi', enter<Scenes.SceneContext>('start'))
startScene.on('message', (ctx) => ctx.replyWithMarkdown('Send `hi`'))

startScene.enter((ctx) => ctx.reply(TXT.greeting, Markup.keyboard(CMDA).resize()))

// start.enter(async (ctx: Context) => {
//   const uid = String(ctx.from.id);
//   const user = await User.findById(uid);
//   const { mainKeyboard } = getMainKeyboard(ctx);

//   if (user) {
//     await ctx.reply(ctx.i18n.t('scenes.start.welcome_back'), mainKeyboard);
//   } else {
//     logger.debug(ctx, 'New user has been created');
//     const now = new Date().getTime();

//     const newUser = new User({
//       _id: uid,
//       created: now,
//       username: ctx.from.username,
//       name: ctx.from.first_name + ' ' + ctx.from.last_name,
//       observableMovies: [],
//       lastActivity: now,
//       totalMovies: 0,
//       language: 'en'
//     });

//     await newUser.save();
//     await ctx.reply('Choose language / Выбери язык', getLanguageKeyboard());
//   }
// });

// start.leave(async (ctx: ContextMessageUpdate) => {
//   const { mainKeyboard } = getMainKeyboard(ctx);

//   await ctx.reply(ctx.i18n.t('shared.what_next'), mainKeyboard);
// });

// start.command('saveme', leave());
// start.action(/languageChange/, languageChangeAction);
// start.action(/confirmAccount/, async (ctx: ContextMessageUpdate) => {
//   await ctx.answerCbQuery();
//   ctx.scene.leave();
// });

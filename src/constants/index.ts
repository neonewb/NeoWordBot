export const CMD = {
  CHOOSE_TIME: '/choose_time',
  GET_WORD: '/get_word',
  HELP: '/help',
} as const

export const CMDA = Object.values(CMD)

const CMDDesc = {
  [CMD.CHOOSE_TIME]: 'choose time to receive word',
  [CMD.GET_WORD]: 'get the word right now',
  [CMD.HELP]: 'show help message',
} as const

type CMDDescKeys = keyof typeof CMDDesc

const getCmdAndDesc = () =>
  Object.keys(CMDDesc)
    .map((key) => `${key} - ${CMDDesc[key as CMDDescKeys]}\n`)
    .join('')

const cmddesc = getCmdAndDesc()

export const TXT = {
  greeting:
    'Welcome my friend!\n\nNow you can /choose_time for receiving words\nOr you can /get_word right now',
  chooseHour:
    'Choose the hour at which i will send you a word every day (from 00 to 24):',
  sendAt: 'Ok, i will send you word every day at',
  help: `I can send you one new english word with translate every day for improve your vocabulary!\n\nAvailable commands:\n${cmddesc}`,
} as const

export const HOURS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
]

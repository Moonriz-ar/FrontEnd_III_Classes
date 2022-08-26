import { useMemo, useState } from 'react'
import { autoId, filter, sort } from './utils'

export interface ScoreI {
  content?: number
  lore?: number
  mechanics?: number
  bosses?: number
  controls?: number
  music?: number
  graphics?: number
  extra?: Array<{ bias: number; info: string }>
  finalMark: number
}

export interface GameI {
  id: string
  name: string
  image: string
  fav?: boolean
  start: string
  tags: Array<string>
  state: string
  end?: string
  price?: number
  achievements?: [number, number]
  score?: ScoreI
}

const gameList: GameI[] = [
  {
    id: 'HUjUCxVUS3NK',
    name: 'The binding of Isaac: Repentance',
    start: '2022-02-02T03:00:00.000Z',
    tags: ['Roguelike'],
    state: 'Playing',
    end: '2022-07-22T03:00:00.000Z',
    price: 489,
    achievements: [590, 637],
    score: {
      controls: 7,
      graphics: 7,
      content: 10,
      finalMark: 8,
      music: 7,
      mechanics: 9,
      lore: 6,
      extra: [
        { info: 'Delirium', bias: -2 },
        { info: 'Unfair', bias: -1 },
        { bias: 2, info: "Creative character's gimmick" },
      ],
      bosses: 4,
    },
    fav: true,
    image: 'http://placekitten.com/200/200?image=2',
  },
  {
    id: 'RW9ROxPCqe7x',
    name: "Shantae and the Pirate's Curse",
    start: '2022-06-18T03:00:00.000Z',
    tags: ['Platformer', 'Metroidvania'],
    state: 'Completed',
    end: '2022-07-02T03:00:00.000Z',
    price: 11.1,
    achievements: [28, 44],
    score: { lore: 6, bosses: 7, content: 8, mechanics: 7, music: 8, finalMark: 8, controls: 8, graphics: 8 },
    image: 'http://placekitten.com/200/200?image=5',
  },
  {
    id: 'XO91iBdOY4Xm',
    name: 'Enter the gungeon',
    start: '2017-12-21T03:00:00.000Z',
    tags: ['Roguelike'],
    state: 'Dropped',
    end: '2022-05-14T03:00:00.000Z',
    price: 84.5,
    achievements: [19, 54],
    score: { finalMark: 9, bosses: 10, music: 8, lore: 6, controls: 10, graphics: 9, mechanics: 8, content: 10 },
    image: 'http://placekitten.com/200/200?image=10',
  },
  {
    id: '2IkfH9Qg3MBk',
    name: 'It takes two',
    start: '2021-12-04T03:00:00.000Z',
    tags: ['Platformer', 'Cooperative', 'Puzzles'],
    state: 'Won',
    end: '2022-03-05T03:00:00.000Z',
    price: 25.1,
    achievements: [12, 20],
    score: { music: 7, mechanics: 8, finalMark: 8, lore: 7, content: 10, graphics: 9, bosses: 6, controls: 9 },
    image: 'http://placekitten.com/200/200?image=13',
  },
  {
    id: 'VC4NTWsfKj72',
    name: 'Super meat boy forever',
    start: '2020-12-25T03:00:00.000Z',
    tags: ['Precision', 'Platformer'],
    state: 'Completed',
    end: '2022-01-27T03:00:00.000Z',
    price: 126,
    achievements: [31, 36],
    score: {
      mechanics: 10,
      extra: [{ bias: -1, info: 'Autorun makes hard to understand and solve some levels' }],
      finalMark: 10,
      content: 10,
      lore: 6,
      controls: 10,
      music: 8,
      bosses: 8,
      graphics: 10,
    },
    image: 'http://placekitten.com/200/200?image=1',
  },
  {
    id: 'VTWDtzGfP1Ri',
    name: 'Sockventure',
    start: '2021-12-24T03:00:00.000Z',
    tags: ['Precision', 'Platformer'],
    state: 'Won',
    end: '2021-12-28T03:00:00.000Z',
    price: 4.5,
    achievements: [33, 60],
    score: {
      content: 9,
      controls: 10,
      graphics: 7,
      music: 6,
      lore: 4,
      finalMark: 9,
      extra: [{ bias: -1, info: 'No quick save system' }],
      mechanics: 8,
    },
    image: 'http://placekitten.com/200/200?image=12',
  },
  {
    id: '73h2oLqSeX0R',
    name: 'Milli & Greg',
    start: '2021-12-16T03:00:00.000Z',
    tags: ['Precision', 'Platformer'],
    state: 'Achievements',
    end: '2021-12-21T03:00:00.000Z',
    price: 2.7,
    achievements: [13, 13],
    score: { controls: 9, content: 6, finalMark: 8, lore: 3, graphics: 5, music: 7, mechanics: 4 },
    image: 'http://placekitten.com/200/200?image=1',
  },
  {
    id: 'wxkM5WXDpRoE',
    name: 'Unbound: Worlds Apart',
    start: '2021-11-27T03:00:00.000Z',
    tags: ['Platformer', 'Puzzles'],
    state: 'Achievements',
    end: '2021-11-28T03:00:00.000Z',
    price: 6.8,
    achievements: [36, 36],
    score: { bosses: 8, lore: 6, music: 6, finalMark: 8, mechanics: 8, content: 8, controls: 8, graphics: 10 },
    image: 'http://placekitten.com/200/200?image=12',
  },
  {
    id: '99byGCyMKl6h',
    name: 'Astalon: tears of the earth',
    start: '2021-11-21T03:00:00.000Z',
    tags: ['Metroidvania', 'Platformer'],
    state: 'Achievements',
    end: '2021-11-27T03:00:00.000Z',
    price: 26.8,
    achievements: [30, 30],
    score: {
      lore: 6,
      finalMark: 9,
      mechanics: 8,
      bosses: 6,
      graphics: 8,
      content: 10,
      controls: 8,
      music: 10,
      extra: [
        { info: 'good map', bias: 1 },
        { bias: -0.5, info: 'broken abilities, or useless' },
        { info: 'boring characters', bias: -0.5 },
      ],
    },
    image: 'http://placekitten.com/200/200?image=14',
  },
  {
    id: 'W0f1XZ8808o9',
    name: 'Super Magbot',
    start: '2021-10-08T03:00:00.000Z',
    tags: ['Precision', 'Platformer'],
    state: 'Completed',
    end: '2021-11-21T03:00:00.000Z',
    price: 9.2,
    achievements: [15, 32],
    score: { graphics: 6, bosses: 10, content: 10, music: 6, controls: 8, lore: 6, mechanics: 10, finalMark: 10 },
    image: 'http://placekitten.com/200/200?image=16',
  },
  {
    id: 'Ge5Hu0PpqQ0J',
    name: 'Kaze and the wild masks',
    start: '2021-11-07T03:00:00.000Z',
    tags: ['Platformer', 'Collectathon'],
    state: 'Achievements',
    end: '2021-11-15T03:00:00.000Z',
    price: 9.5,
    achievements: [25, 25],
    score: { lore: 6, content: 8, music: 8, controls: 10, finalMark: 10, graphics: 10, bosses: 8, mechanics: 10 },
    image: 'http://placekitten.com/200/200?image=4',
  },
  {
    id: 'rWvDBy4sKlNv',
    name: 'SunBlaze',
    start: '2021-10-02T03:00:00.000Z',
    tags: ['Precision', 'Platformer'],
    state: 'Completed',
    end: '2021-10-11T03:00:00.000Z',
    price: 7.4,
    achievements: [21, 33],
    score: { graphics: 6, music: 6, content: 10, lore: 5, mechanics: 8, finalMark: 10, controls: 10 },
    image: 'http://placekitten.com/200/200?image=9',
  },
  {
    id: 'ETJqyCUEpQ22',
    name: 'Hades',
    start: '2021-08-08T03:00:00.000Z',
    tags: ['Roguelike', 'Action'],
    state: 'Achievements',
    end: '2021-09-22T03:00:00.000Z',
    price: 88.9,
    achievements: [49, 49],
    score: { mechanics: 8, music: 9, graphics: 10, lore: 7, finalMark: 9, bosses: 8, controls: 10, content: 8 },
    image: 'http://placekitten.com/200/200?image=15',
  },
  {
    id: '6ldhm750jrGa',
    name: 'Aviary attorney',
    start: '2021-07-28T03:00:00.000Z',
    tags: ['MuchoTexto'],
    state: 'Completed',
    end: '2021-08-07T03:00:00.000Z',
    price: 15.8,
    score: { controls: 6, lore: 10, content: 6, mechanics: 7, finalMark: 8 },
    image: 'http://placekitten.com/200/200?image=1',
  },
  {
    id: 'Ob8qEg1MPx4X',
    name: 'Bug fables',
    start: '2021-06-24T03:00:00.000Z',
    tags: ['RPG', 'TurnBased'],
    state: 'Completed',
    end: '2021-07-10T03:00:00.000Z',
    price: 46.2,
    achievements: [24, 30],
    score: { graphics: 10, mechanics: 10, controls: 10, finalMark: 10, content: 10, lore: 10, bosses: 10 },
    image: 'http://placekitten.com/200/200?image=9',
  },
  {
    id: 'AEqDL8Zmhvzm',
    name: 'DYE',
    start: '2021-06-05T03:00:00.000Z',
    tags: ['Precision', 'Platformer'],
    state: 'Achievements',
    end: '2021-06-23T03:00:00.000Z',
    price: 18.8,
    achievements: [41, 41],
    score: { bosses: 8, graphics: 6, music: 8, content: 8, mechanics: 4, finalMark: 9, lore: 4, controls: 8 },
    image: 'http://placekitten.com/200/200?image=12',
  },
  {
    id: 'YmO1CgcLJVlW',
    name: 'Levelhead',
    start: '2021-05-30T03:00:00.000Z',
    tags: ['Platformer'],
    state: 'Completed',
    end: '2021-06-19T03:00:00.000Z',
    price: 20.8,
    achievements: [12, 44],
    score: { mechanics: 10, finalMark: 8, content: 10, controls: 10, graphics: 8, music: 6 },
    image: 'http://placekitten.com/200/200?image=13',
  },
  {
    id: 'R1HU2CAj7zhk',
    name: 'Iconoclasts',
    start: '2018-07-01T03:00:00.000Z',
    tags: ['Metroidvania', 'Platformer'],
    state: 'Completed',
    end: '2020-12-13T03:00:00.000Z',
    price: 18.6,
    achievements: [10, 11],
    score: { mechanics: 8, music: 8, controls: 10, finalMark: 10, bosses: 10, lore: 10, graphics: 10, content: 10 },
    fav: true,
    image: 'http://placekitten.com/200/200?image=4',
  },
  {
    id: 'LeJqmOOG4KRl',
    name: 'Splasher',
    start: '2020-12-08T03:00:00.000Z',
    tags: ['Precision', 'Platformer'],
    state: 'Completed',
    end: '2020-12-12T03:00:00.000Z',
    price: 4.7,
    achievements: [25, 47],
    score: { controls: 8, music: 6, bosses: 4, graphics: 10, mechanics: 8, lore: 2, content: 8, finalMark: 9 },
    image: 'http://placekitten.com/200/200?image=5',
  },
  {
    id: 'gkuulzAgmoe2',
    name: 'Hollow knight',
    start: '2019-11-17T03:00:00.000Z',
    tags: ['Metroidvania', 'Platformer'],
    state: 'Won',
    end: '2020-11-22T03:00:00.000Z',
    price: 41.1,
    achievements: [45, 63],
    score: { mechanics: 8, music: 6, finalMark: 10, content: 10, bosses: 10, graphics: 10, lore: 4, controls: 10 },
    image: 'http://placekitten.com/200/200?image=11',
  },
  {
    id: 'yz6gT9orPdr2',
    name: 'Celeste',
    start: '2018-06-24T03:00:00.000Z',
    tags: ['Precision', 'Platformer'],
    state: 'Achievements',
    end: '2020-10-26T03:00:00.000Z',
    price: 41.3,
    achievements: [32, 32],
    score: { controls: 10, graphics: 10, mechanics: 10, finalMark: 10, content: 10, music: 7, lore: 10 },
    fav: true,
    image: 'http://placekitten.com/200/200?image=16',
  },
  {
    id: '1gRpOw74zKMI',
    name: 'Rayman legends',
    start: '2020-09-18T03:00:00.000Z',
    tags: ['Platformer', 'Collectathon'],
    state: 'Completed',
    end: '2020-09-21T03:00:00.000Z',
    price: 17.7,
    score: { content: 8, finalMark: 8, controls: 10, mechanics: 6, graphics: 10, lore: 1, bosses: 1 },
    image: 'http://placekitten.com/200/200?image=2',
  },
  {
    id: 'ljXHaAuqCpFj',
    name: 'Rayman origins',
    start: '2020-09-14T03:00:00.000Z',
    tags: ['Collectathon', 'Platformer'],
    state: 'Completed',
    end: '2020-09-18T03:00:00.000Z',
    price: 16.6,
    score: { controls: 10, content: 8, finalMark: 10, lore: 4, graphics: 10, bosses: 1, mechanics: 6 },
    image: 'http://placekitten.com/200/200?image=3',
  },
  {
    id: 'myWmhypF6xWK',
    name: 'Rayman 2',
    start: '2020-08-01T03:00:00.000Z',
    tags: ['Collectathon', 'Platformer'],
    state: 'Completed',
    end: '2020-08-20T03:00:00.000Z',
    score: { finalMark: 8, graphics: 8, music: 6, content: 6, mechanics: 6, controls: 8, bosses: 8, lore: 8 },
    image: 'http://placekitten.com/200/200?image=5',
  },
  {
    id: 'qo8k4pdttkQL',
    name: 'Dungeon defenders',
    start: '2013-01-01T03:00:00.000Z',
    tags: ['RPG', 'TowerDefense'],
    state: 'Won',
    end: '2020-08-08T03:00:00.000Z',
    price: 332.3,
    achievements: [55, 118],
    score: { mechanics: 8, graphics: 10, finalMark: 10, controls: 9, content: 10, lore: 6 },
    image: 'http://placekitten.com/200/200?image=6',
  },
  {
    id: 'zP3cEFoRyyFh',
    name: 'Crash Bandicoot N. Sane Trilogy',
    start: '2020-01-26T03:00:00.000Z',
    tags: ['Collectathon', 'Platformer'],
    state: 'Won',
    end: '2020-07-11T03:00:00.000Z',
    price: 18,
    achievements: [47, 74],
    score: { content: 10, bosses: 8, finalMark: 10, graphics: 10, music: 8, controls: 10, mechanics: 6, lore: 5 },
    image: 'http://placekitten.com/200/200?image=12',
  },
  {
    id: 'KJFfv0BKVigf',
    name: 'Spyro Reignited Trilogy',
    start: '2020-01-19T03:00:00.000Z',
    tags: ['Collectathon', 'Platformer'],
    state: 'Completed',
    end: '2020-07-10T03:00:00.000Z',
    price: 39.8,
    achievements: [80, 105],
    score: { bosses: 8, content: 8, graphics: 10, music: 8, finalMark: 10, controls: 10, mechanics: 6, lore: 5 },
    image: 'http://placekitten.com/200/200?image=13',
  },
  {
    id: 'RUbE7eydagmi',
    name: 'Shovel knight',
    start: '2020-03-20T03:00:00.000Z',
    tags: ['Platformer'],
    state: 'Won',
    end: '2020-06-18T03:00:00.000Z',
    price: 32.2,
    achievements: [32, 138],
    score: { controls: 10, lore: 7, content: 10, finalMark: 10, graphics: 8, mechanics: 7, music: 8, bosses: 8 },
    image: 'http://placekitten.com/200/200?image=15',
  },
  {
    id: '6OND6zbnkq3o',
    name: 'Gemcraft Frostborn Wrath',
    start: '2020-01-10T03:00:00.000Z',
    tags: ['TowerDefense'],
    state: 'Won',
    end: '2020-04-04T03:00:00.000Z',
    price: 188.4,
    achievements: [619, 636],
    score: { controls: 10, graphics: 3, music: 1, bosses: 3, lore: 5, mechanics: 8, content: 8, finalMark: 10 },
    image: 'http://placekitten.com/200/200?image=4',
  },
  {
    id: 'ratTyFemRcCH',
    name: 'Phoenix Wright: Ace attorney trilogy',
    start: '2019-12-01T03:00:00.000Z',
    tags: ['MuchoTexto'],
    state: 'Dropped',
    end: '2020-03-24T03:00:00.000Z',
    price: 45.8,
    achievements: [13, 30],
    score: { controls: 7, content: 10, music: 9, finalMark: 9, lore: 10, mechanics: 8, graphics: 9 },
    image: 'http://placekitten.com/200/200?image=6',
  },
  {
    id: 'FjiN25b8FfVc',
    name: 'Gemcraft chasing shadows',
    start: '2015-05-01T03:00:00.000Z',
    tags: ['TowerDefense'],
    state: 'Achievements',
    end: '2020-03-11T03:00:00.000Z',
    price: 282,
    achievements: [419, 419],
    score: { content: 8, bosses: 2, graphics: 3, controls: 10, lore: 5, finalMark: 10, mechanics: 8, music: 1 },
    image: 'http://placekitten.com/200/200?image=7',
  },
  {
    id: 'sEdlHpV3P6Fq',
    name: 'Oneshot',
    start: '2019-12-27T03:00:00.000Z',
    tags: ['Puzzles', 'MuchoTexto'],
    state: 'Won',
    end: '2020-01-03T03:00:00.000Z',
    price: 11,
    achievements: [9, 11],
    score: {
      lore: 10,
      content: 5,
      finalMark: 9,
      extra: [{ bias: 1, info: 'Creative puzzles' }],
      mechanics: 7,
      graphics: 6,
    },
    image: 'http://placekitten.com/200/200?image=10',
  },
  {
    id: 'gjKaY1bDwhWy',
    name: 'The messenger',
    start: '2019-11-28T03:00:00.000Z',
    tags: ['Metroidvania', 'Platformer'],
    state: 'Completed',
    end: '2019-12-01T03:00:00.000Z',
    price: 21,
    achievements: [42, 48],
    score: {
      finalMark: 10,
      extra: [{ info: 'Humor', bias: 1 }],
      content: 8,
      mechanics: 6,
      controls: 10,
      lore: 8,
      music: 10,
      bosses: 8,
      graphics: 10,
    },
    image: 'http://placekitten.com/200/200?image=12',
  },
  {
    id: 'VT29bjPKoghE',
    name: 'Ys origin',
    start: '2018-12-12T03:00:00.000Z',
    tags: ['RPG', 'Action'],
    state: 'Completed',
    end: '2019-11-15T03:00:00.000Z',
    price: 30,
    achievements: [20, 46],
    score: { controls: 10, mechanics: 8, music: 10, lore: 8, bosses: 10, finalMark: 9, content: 8, graphics: 10 },
    image: 'http://placekitten.com/200/200?image=14',
  },
  {
    id: 'FOItJ51I4qR5',
    name: 'Cuphead',
    start: '2017-10-15T03:00:00.000Z',
    tags: ['Precision', 'Action'],
    state: 'Won',
    end: '2018-11-14T03:00:00.000Z',
    price: 16.6,
    achievements: [21, 28],
    score: { music: 9, controls: 8, finalMark: 9, bosses: 10, lore: 5, content: 7, graphics: 10, mechanics: 6 },
    image: 'http://placekitten.com/200/200?image=12',
  },
  {
    id: '2XCK5CcSR11R',
    name: 'Undertale',
    start: '2018-08-27T03:00:00.000Z',
    tags: ['RPG', 'MuchoTexto'],
    state: 'Completed',
    end: '2018-08-27T03:00:00.000Z',
    score: { bosses: 10, lore: 10, graphics: 6, music: 10, finalMark: 10, content: 10, mechanics: 8 },
    image: 'http://placekitten.com/200/200?image=16',
  },
  {
    id: 'JovdTJoOZJ4O',
    name: 'Axiom verge',
    start: '2018-02-04T03:00:00.000Z',
    tags: ['Metroidvania'],
    state: 'Won',
    end: '2018-02-15T03:00:00.000Z',
    price: 11.4,
    achievements: [16, 29],
    score: {
      lore: 8,
      content: 10,
      controls: 8,
      extra: [{ info: 'Unique hidden rooms on each save file', bias: 1 }],
      bosses: 7,
      mechanics: 10,
      finalMark: 8,
      graphics: 8,
    },
    image: 'http://placekitten.com/200/200?image=7',
  },
  {
    id: 'QJQhHQADJ83p',
    name: 'Ori and the blind forest',
    start: '2017-12-31T03:00:00.000Z',
    tags: ['Metroidvania', 'Platformer'],
    state: 'Won',
    end: '2018-02-04T03:00:00.000Z',
    price: 6.8,
    achievements: [29, 57],
    score: { mechanics: 6, music: 7, content: 10, lore: 6, bosses: 4, finalMark: 8, graphics: 10, controls: 10 },
    image: 'http://placekitten.com/200/200?image=8',
  },
  {
    id: '0AdIvmk1mRt4',
    name: 'Super meat boy',
    start: '2012-01-01T03:00:00.000Z',
    tags: ['Precision', 'Platformer'],
    state: 'Completed',
    end: '2017-10-22T03:00:00.000Z',
    price: 34.8,
    achievements: [28, 48],
    score: { lore: 5, graphics: 7, controls: 10, content: 10, mechanics: 10, bosses: 8, music: 10, finalMark: 10 },
    image: 'http://placekitten.com/200/200?image=10',
  },
  {
    id: 'zJBm7rrIw5y8',
    name: 'Toki tori',
    start: '2016-04-21T03:00:00.000Z',
    tags: ['Puzzles'],
    state: 'Won',
    end: '2017-09-26T03:00:00.000Z',
    price: 13,
    achievements: [22, 38],
    score: { content: 8, controls: 10, mechanics: 7, graphics: 7, finalMark: 8 },
    image: 'http://placekitten.com/200/200?image=11',
  },
  {
    id: 'RRGQ4P0kyvjY',
    name: 'Sonic mania',
    start: '2017-08-29T03:00:00.000Z',
    tags: ['Platformer'],
    state: 'Won',
    end: '2017-09-06T03:00:00.000Z',
    price: 30,
    achievements: [14, 18],
    score: { lore: 4, bosses: 8, controls: 10, graphics: 10, mechanics: 8, finalMark: 10, music: 10, content: 8 },
    image: 'http://placekitten.com/200/200?image=12',
  },
  {
    id: '31DI3DtUe3u2',
    name: 'The witness',
    start: '2016-10-30T03:00:00.000Z',
    tags: ['Puzzles'],
    state: 'Won',
    end: '2016-11-19T03:00:00.000Z',
    price: 30.5,
    achievements: [1, 2],
    score: {
      finalMark: 10,
      lore: 2,
      mechanics: 10,
      extra: [{ info: 'Creative puzzles', bias: 1 }],
      graphics: 8,
      controls: 10,
      content: 10,
    },
    image: 'http://placekitten.com/200/200?image=4',
  },
  {
    id: 'ayKyBG8wxrh1',
    name: 'Toki tori 2',
    start: '2016-04-23T03:00:00.000Z',
    tags: ['Puzzles', 'Platformer'],
    state: 'Won',
    end: '2016-05-02T03:00:00.000Z',
    price: 9.7,
    achievements: [15, 38],
    score: { mechanics: 5, lore: 4, content: 7, controls: 10, finalMark: 8, graphics: 10 },
    image: 'http://placekitten.com/200/200?image=6',
  },
  {
    id: 'C5gS5On1SA0e',
    name: 'Portal 2',
    start: '2015-11-27T03:00:00.000Z',
    tags: ['Puzzles'],
    state: 'Won',
    end: '2015-12-03T03:00:00.000Z',
    price: 6.8,
    achievements: [19, 51],
    score: { mechanics: 10, controls: 9, graphics: 9, bosses: 5, lore: 10, finalMark: 10, content: 10 },
    image: 'http://placekitten.com/200/200?image=14',
  },
  {
    id: 'M3LJ0HmXpb9H',
    name: 'Cave story',
    start: '2013-01-01T03:00:00.000Z',
    tags: ['Metroidvania', 'Platformer'],
    state: 'Completed',
    end: '2013-01-01T03:00:00.000Z',
    price: 11.6,
    achievements: [43, 76],
    score: { lore: 10, controls: 10, music: 10, bosses: 10, finalMark: 10, graphics: 10, content: 8, mechanics: 6 },
    fav: true,
    image: 'http://placekitten.com/200/200?image=14',
  },
  {
    id: 'jvvA4HpORgXa',
    name: 'Eversion',
    start: '2013-01-01T03:00:00.000Z',
    tags: ['Horror', 'Platformer'],
    state: 'Achievements',
    end: '2013-01-01T03:00:00.000Z',
    price: 2.4,
    achievements: [14, 14],
    score: { mechanics: 3, controls: 8, finalMark: 8, music: 5, graphics: 4, lore: 2, content: 5 },
    image: 'http://placekitten.com/200/200?image=6',
  },
  {
    id: 'wNf8yS5ztuN7',
    name: 'Braid',
    start: '2012-01-01T03:00:00.000Z',
    tags: ['Puzzles', 'Platformer'],
    state: 'Won',
    end: '2012-01-01T03:00:00.000Z',
    score: { content: 8, finalMark: 9, lore: 4, controls: 10, mechanics: 10 },
    image: 'http://placekitten.com/200/200?image=9',
  },
  {
    id: 'bhaKllebDjxs',
    name: 'Fez',
    start: '2012-01-01T03:00:00.000Z',
    tags: ['Puzzles', 'Platformer'],
    state: 'Won',
    end: '2012-01-01T03:00:00.000Z',
    price: 3.6,
    achievements: [7, 12],
    score: { lore: 5, graphics: 7, content: 9, finalMark: 8, mechanics: 10, controls: 10 },
    image: 'http://placekitten.com/200/200?image=10',
  },
  {
    id: 'nmk6B7WA3YBh',
    name: 'Portal',
    start: '2012-01-01T03:00:00.000Z',
    tags: ['Puzzles'],
    state: 'Completed',
    end: '2012-01-01T03:00:00.000Z',
    price: 6.4,
    achievements: [8, 15],
    score: { graphics: 9, finalMark: 9, lore: 7, content: 6, mechanics: 8, controls: 9 },
    image: 'http://placekitten.com/200/200?image=1',
  },
]

export function getGames() {
  return gameList
}

export function getFavGames() {
  return gameList.filter((game) => game.fav)
}

export interface FiltersI {
  name?: string
  start?: Date
  end?: Date
  state?: string[]
  tags?: string[]
}

export interface SorterI {
  by: 'name' | 'start' | 'end' | 'state' | 'price' | 'achievements' | 'score'
  direction: 'asc' | 'desc'
}

export interface variablesI {
  filters?: FiltersI
  skip?: number
  first?: number
  sorter?: SorterI
}

export function useApi(initialVariables?: variablesI) {
  const [variables, setVariables] = useState<variablesI | undefined>(initialVariables)
  const [games, setGames] = useState<GameI[]>(gameList)
  const [loading, setLoading] = useState(false)

  const createGame = async (game: any) => {
    const id = autoId()
    setGames([
      {
        ...game,
        id: id,
        price: Number(game?.price || 0),
        image: `http://placekitten.com/200/200?image=${Math.floor(Math.random() * 16)}`,
      },
      ...games,
    ])
    return id
  }

  const updateGame = async (gameId: string, game: GameI) => {
    const actualGame = games.find((g) => g.id === gameId)
    setGames([
      {
        ...actualGame,
        ...game,
        price: Number(game?.price || 0),
      },
      ...games.filter((g) => g.id !== gameId),
    ])
  }

  const deleteGame = async (gameId: string) => {
    setGames([...games.filter((g) => g.id !== gameId)])
  }

  const filteredGames = useMemo(() => {
    if (!games) return undefined
    let data = games
    if (variables) {
      if (variables.filters) {
        data = filter(data, variables.filters)
      }
      if (variables.sorter) {
        data = sort(data, variables.sorter)
      }
    }

    data = data?.slice(variables?.skip || 0, variables?.first ? (variables.skip || 0) + variables.first : data.length)

    return data
  }, [games, variables])

  return {
    games,
    filteredGames,
    loading,
    refetch: setVariables,
    createGame,
    updateGame,
    deleteGame,
  }
}

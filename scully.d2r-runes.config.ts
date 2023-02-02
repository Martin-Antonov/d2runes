import {ScullyConfig} from '@scullyio/scully';

import {HandledRoute, registerPlugin} from "@scullyio/scully"
import {RUNES_D2R} from "./src/app/services/runes/models/Runes";
import {RUNEWORDS_D2R} from "./src/app/services/runes/models/Runewords";
import {ALL_ITEMS} from "./src/app/services/uniques/models/Items";

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'd2r-runes',
  distFolder: './dist/d2r-runes',
  outDir: './dist/static',
  defaultPostRenderers: [],
  routes: {
    // '/runewords/:runewordId': {
    //   type: 'runewords',
    // },
    '/runes/:runeId': {
      type: 'runes',
    },
    // '/uniques/:item': {
    //   type: 'uniques',
    // },
  },
};


// function runewordsPlugin(route: string, config = {}): Promise<HandledRoute[]> {
//   const rws = RUNEWORDS_D2R.map((rw) => {
//     return {route: '/runewords/' + rw.name.split(' ').join('').toLowerCase()};
//   })
//
//   return Promise.resolve(rws);
// }
//
// const validatorRunewords = async (conf) => [];
// registerPlugin('router', 'runewords', runewordsPlugin, validatorRunewords);

function runesPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  const rs = RUNES_D2R.map((r) => {
    return {route: '/runes/' + r.key}
  })

  return Promise.resolve(rs);
}

const validatorRunes = async (conf) => [];
registerPlugin('router', 'runes', runesPlugin, validatorRunes);

// function uniquesPlugin(route: string, config = {}): Promise<HandledRoute[]> {
//   const us = [];
//   ALL_ITEMS.forEach((ig) => {
//     ig.items.forEach((item) => {
//       us.push({route: '/uniques/' + item.name.toLowerCase().split(' ').join('-').split('\'').join('')})
//     });
//   })
//   return Promise.resolve(us);
// }
//
// const validatorUniques = async (conf) => [];
// registerPlugin('router', 'uniques', uniquesPlugin, validatorUniques);

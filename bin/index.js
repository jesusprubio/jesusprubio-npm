#!/usr/bin/env node

/**
 * @license
 *
 * Copyright (c) 2019, Jesús Rubio <jesusprubio@member.fsf.org>
 *
 * This source code is licensed under the MIT License found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

const { site, twitter } = require('..');
const opn = require('opn');
const link = require('terminal-link');
const chalk = require('chalk');
const play = require('audio-play');
const load = require('audio-loader');
const ora = require('ora');


load('./artifacts/waves.mp3').then(play);

// eslint-disable-next-line no-console
console.log(`\t${link(' 🏴 ‍☠️', chalk.keyword('orange')(site))}\n`);

const spinner = ora('Loading unicorns').start();
spinner.color = 'green';

setTimeout(() => {
  spinner.color = 'magenta';
  spinner.text = 'Loading rainbows';
}, 1000);

opn(twitter).then(() => {
  spinner.stop();
  // eslint-disable-next-line no-console
  console.log(chalk.keyword('grey')('😽\n'));
});

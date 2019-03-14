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

const path = require('path');

const { site, twitter } = require('..');

const opn = require('opn');
const link = require('terminal-link');
const chalk = require('chalk');
const play = require('audio-play');
const load = require('audio-loader');
const ora = require('ora');
const CFonts = require('cfonts');
// TODO: Change for a promise based solution when we have top level await.
const sleep = require('system-sleep');


load(path.resolve(__dirname, '../artifacts/waves.mp3')).then(play);

CFonts.say('Hi world! :)');
// eslint-disable-next-line no-console
console.log(`${link(' 🏴 ‍☠️', chalk.keyword('orange')(site))}\n`);

const spinner = ora('Loading unicorns\n\n').start();
spinner.color = 'green';

sleep(1000);

spinner.color = 'magenta';
spinner.text = 'Loading rainbows\n\n';

opn(twitter)

sleep(1000);

spinner.stop();
// eslint-disable-next-line no-console
console.log(chalk.keyword('grey')('😽\n'));

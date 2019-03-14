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
const ora = require('ora');
const CFonts = require('cfonts');

CFonts.say('Hi world! :)', {
  letterSpacing: 0.5,
	lineHeight: 0.5
});
// eslint-disable-next-line no-console
console.log(`${link(' 🏴 ‍☠️', chalk.keyword('orange')(site))}\n`);

const spinner = ora('Loading unicorns\n\n').start();
spinner.color = 'green';

setTimeout(() => {
  spinner.color = 'magenta';
  spinner.text = 'Loading rainbows\n\n';
  opn(twitter);

  setTimeout(() => {  
    spinner.stop();
    // eslint-disable-next-line no-console
    console.log(chalk.keyword('grey')('😽\n'));
  }, 2000);
}, 1000);

/* eslint-env node */
'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  description: 'Adds language files for the ember-kioskboard addon.',

  normalizeEntityName() {},

  afterInstall() {
    if (!fs.existsSync('public')) {
      fs.mkdirSync('public');
    }

    const languages = ['english', 'french', 'german', 'spanish', 'turkish'];

    languages.forEach(language => {
      const inputFile = path.join('node_modules', 'kioskboard', 'dist', `kioskboard-keys-${language}.json`);

      const outputFile = path.join('public', `${language}-keys.json`);

      if (!fs.existsSync(outputFile)) {
        this.ui.writeLine(`Created ${outputFile}`);

        return fs.copyFile(inputFile, outputFile, err => {
          if (err) throw err;
        });
      }
    });
  }
};

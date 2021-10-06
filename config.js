const _ = require('lodash');
const fs = require('fs');
const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: `tailwind`,
  formatter: _.template(
    fs.readFileSync(__dirname + '/templates/tailwind.template'),
  ),
});

module.exports = {
  source: ['tokens/**/*.json5'],
  platforms: {
    tailwindConfig: {
      transformGroup: 'css',
      buildPath: './dist/',
      files: [
        {
          destination: 'tailwind.config.js',
          format: 'tailwind',
          // Ignore any component tokens
          filter: (token) => !token.filePath.includes(`tokens/components`),
        },
      ],
    },
  },
};

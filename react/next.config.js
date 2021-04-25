
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: '',
        titleDescription: '',
    },
};

module.exports = withPlugins([withImages(), nextSettings]);

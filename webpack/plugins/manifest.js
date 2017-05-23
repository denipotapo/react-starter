'use strict';

const webpack = require('webpack');
const define  = require('../define');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const WebappManifest = require('webapp-manifest-plugin');
const WebappManifestPlugin = WebappManifest.default;
const FAVICON_PLUGIN = WebappManifest.FAVICON_PLUGIN;

const plugins = [
    new FaviconsWebpackPlugin({
        logo: 'assets/favicon/favicon.svg',
        // The prefix for all image files (might be a folder or a name)
        prefix: 'fav-[hash:5]/',
        // Emit all stats of the generated icons
        emitStats: false,
        // The name of the json containing all favicon information
        statsFilename: 'iconstats-[hash].json',
        // Generate a cache file with control hashes and
        // don't rebuild the favicons until those hashes change
        persistentCache: true,
        // Inject the html into the html-webpack-plugin
        inject: true,
        // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
        background: '#673ab8',
        // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
        title: 'React starter',
        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        icons: {
            firefox: true,
            android: true,
            favicons: true,
            appleIcon: true,
            opengraph: false,
            appleStartup: false,
            coast: false,
            twitter: false,
            yandex: false,
            windows: true
        }
    }),
    new WebappManifestPlugin({
        name: "React Starter",
        shortName: "React Starter",
        description: null,
        dir: 'auto',
        // dir: define.rs_dist,
        lang: 'en-US',
        display: 'standalone',
        orientation: 'any',
        startUrl: '/',
        backgroundColor: '#fff',
        themeColor: '#2185d0',
        icons: FAVICON_PLUGIN,
        preferRelatedApplications: false,
        relatedApplications: [],
        scope: '/'
    })
];

module.exports.config = plugins;
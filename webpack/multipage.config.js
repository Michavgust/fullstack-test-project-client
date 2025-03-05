const path = require('path');
const { Template } = require('webpack');

result = {};

result.entry = {
    'main': path.join(__dirname, '../src/js/main.js'),
    'form': path.join(__dirname, '../src/js/form.js')
};

result.pages = [
    { chunks: ['main'], page: 'index.html', template: path.join(__dirname, '../src/pages/main.html') },
    { chunks: ['form'], page: 'pages/form.html', template: path.join(__dirname, '../src/pages/form.html') },
]

module.exports = result;
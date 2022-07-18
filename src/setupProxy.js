const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
    const url = process.env.REACT_APP_PROXY_URL;
    if (url) {
        const config = {
            target: url,
            changeOrigin: true,
            secure: false,
            logLevel: 'debug'
        };
        app.use(createProxyMiddleware('/api', config));
    }
};

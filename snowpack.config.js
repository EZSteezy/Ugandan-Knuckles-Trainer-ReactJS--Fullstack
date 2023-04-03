import httpProxy from 'http-proxy';
const proxy = httpProxy.createProxyServer({});

export default {
  mount: {
    public: '/',
    src: '/dist',
  },
  routes: [
    {
      src: '/api/.*',
      dest: (req, res) => {
        proxy.web(req, res, { target: 'http://localhost:3000' });
      },
    },
  ],
};
module.exports = {
  development: {
    isProduction: false,
    port: 3001,
    apiPort: 3030,
    app: {
      name: 'QLMBV (development)'
    }
  },
  production: {
    isProduction: true,
    port: process.env.PORT,
    apiPort: 8100,
    app: {
      name: 'QLMBV (production)'
    }
  }
}[process.env.NODE_ENV || 'development'];

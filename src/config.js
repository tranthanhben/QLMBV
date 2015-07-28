module.exports = {
  development: {
    isProduction: false,
    port: 3000,
    apiPort: 3030,
    app: {
      name: 'Adjobs Back (development)'
    }
  },
  production: {
    isProduction: true,
    port: process.env.PORT,
    apiPort: process.env.API_PORT,
    app: {
      name: 'Adjobs Back (production)'
    }
  }
}[process.env.NODE_ENV || 'development'];

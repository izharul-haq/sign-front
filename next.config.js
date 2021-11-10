const baseUrl = '';

module.exports = {
  poweredByHeader: false,
  trailingSlash: true,
  basePath: baseUrl,
  env: {
    baseUrl: baseUrl,
    NEXT_PUBLIC_API_URL: 'http://localhost:5000',
  },
}

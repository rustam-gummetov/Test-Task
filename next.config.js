/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['promedianews.ru', 'xn--b1amnebili4i.xn--p1ai', 'skesov.ru'],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}


import withNextIntl from 'next-intl/plugin';

const withIntl = withNextIntl('./next-intl.config.ts');

export default withIntl({
  reactStrictMode: true,
  typedRoutes: true 
});
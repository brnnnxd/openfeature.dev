import ConfigCatSvg from '@site/static/img/config-cat-no-fill.svg';
import { Provider } from '.';

export const ConfigCat: Provider = {
  name: 'ConfigCat',
  logo: ConfigCatSvg,
  technologies: {
    JavaScript: {
      vendorOfficial: false,
      href: 'https://www.npmjs.com/package/@openfeature/config-cat-provider',
    },
    Go: {
      vendorOfficial: false,
      href: 'https://github.com/open-feature/go-sdk-contrib/tree/main/providers/configcat',
    },
  },
};

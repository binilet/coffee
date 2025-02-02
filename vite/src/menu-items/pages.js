// assets
import { IconKey,IconBrandProducthunt } from '@tabler/icons-react';

// constant
const icons = {
  IconKey,IconBrandProducthunt

};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Products',
  caption: 'Products and Items',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Product And Items',
      type: 'collapse',
      icon: icons.IconBrandProducthunt,

      children: [
        {
          id: 'products_',
          title: 'Product',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'items_',
          title: 'Item',
          type: 'item',
          url: '/pages/register/register3',
          target: true,
          icon: icons.IconBrandChrome,
        }
      ]
    }
  ]
};

export default pages;

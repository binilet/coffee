// assets
import { IconKey,IconBrandProducthunt } from '@tabler/icons-react';

// constant
const icons = {
  IconKey,IconBrandProducthunt

};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const products = {
  id: 'products',
  title: 'Products',
  caption: 'Products and Items',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Products and Items',
      type: 'collapse',
      icon: icons.IconBrandProducthunt,

      children: [
        {
          id: 'product_',
          title: 'Product',
          type: 'item',
          url: '/products/default',
          //target: true
        },
        // {
        //   id: 'register3',
        //   title: 'Item',
        //   type: 'item',
        //   url: '/pages/register/register3',
        //   target: true,
        //   icon: icons.IconBrandChrome,
        // }
      ]
    }
  ]
};

export default products;

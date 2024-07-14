// assets
import { IconBuilding } from '@tabler/icons-react';

// constant
const icons = {
    IconBuilding

};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const party = {
  id: 'parties',
  title: 'Party',
  caption: 'Company,Suppliers and Customers',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Company,Suppliers and Customers',
      type: 'collapse',
      icon: icons.IconBuilding,

      children: [
        {
          id: 'company_',
          title: 'Company',
          type: 'item',
          url: '/parties/company',
          target: false
        },
        {
          id: 'customer_',
          title: 'Customer',
          type: 'item',
          url: '/parties/customer',
          target: false,
          icon: icons.IconBrandChrome
        },
        {
          id: 'bank_',
          title: 'Banks',
          type: 'item',
          url: '/parties/bank',
          target: false,
          icon: icons.IconBrandChrome
        },

        {
          id: 'user_',
          title: 'Users',
          type: 'item',
          url: '/parties/user',
          target: false,
          icon: icons.IconBrandChrome
        }
      ]
    }
  ]
};

export default party;

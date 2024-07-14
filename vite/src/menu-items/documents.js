// assets
import { IconReceipt } from '@tabler/icons-react';

// constant
const icons = {
    IconReceipt

};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const documents = {
  id: 'documents',
  title: 'Documents',
  caption: 'Transaction documents',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'transaction documents',
      type: 'collapse',
      icon: icons.IconReceipt,
      children: [
        {
          id: 'sales_contract_',
          title: 'Sales Contract',
          type: 'item',
          url: '/documents/salesContract/salesContract',
          target: false,
          icon: icons.IconBrandChrome,
        },
        {
          id: 'purchase_contract_',
          title: 'Purchase Contract',
          type: 'item',
          url: '#',
          target: true
        }
      ]
    }
  ]
};

export default documents;

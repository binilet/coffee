// assets
import { IconReportAnalytics } from '@tabler/icons-react';

// constant
const icons = {
    IconReportAnalytics

};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const reports = {
  id: 'reports',
  title: 'Report',
  caption: 'Transaction Reports Per Document',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Documents',
      type: 'collapse',
      icon: icons.IconReportAnalytics,

      children: [
        {
          id: 'login3',
          title: 'Purchase Contract',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Sales Contract',
          type: 'item',
          url: '/pages/register/register3',
          target: true,
          icon: icons.IconBrandChrome,
        },
        {
            id: 'register3',
            title: 'Customer',
            type: 'item',
            url: '/pages/register/register3',
            target: true,
            icon: icons.IconBrandChrome,
          }
      ]
    }
  ]
};

export default reports;

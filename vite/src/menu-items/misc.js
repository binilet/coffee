// assets
import { IconDatabase } from '@tabler/icons-react';

// constant
const icons = {
    IconDatabase
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const misc = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-lookup',
      title: 'Lookup',
      type: 'item',
      url: '/utils/util-typography',
      icon: icons.IconDatabase,
      breadcrumbs: false
    },
    // {
    //   id: 'util-color',
    //   title: 'Color',
    //   type: 'item',
    //   url: '/utils/util-color',
    //   icon: icons.IconPalette,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'util-shadow',
    //   title: 'Shadow',
    //   type: 'item',
    //   url: '/utils/util-shadow',
    //   icon: icons.IconShadow,
    //   breadcrumbs: false
    // }
  ]
};

export default misc;

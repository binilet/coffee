import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Company from 'views/parties/company';



// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

const ProductPage = Loadable(lazy(() => import('views/products/index')))
const Bank = Loadable(lazy(() => import('views/parties/bank')))
const CustomerPage = Loadable(lazy(() => import('views/parties/customer')))
const UserPage = Loadable(lazy(() => import('views/parties/users')))
const CompanyPage = Loadable(lazy(() => import('views/parties/company')))
const SalesContractPage = Loadable(lazy(() => import('views/documents/salesContract/salesContract')))

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'products',
      children: [
        {
          path: 'default',
          element: <ProductPage />
        }
      ]
    },
    {
      path: 'parties',
      children: [
        {
          path: 'customer',
          element: <CustomerPage />
        },
        {
          path: 'company',
          element: <CompanyPage />
        },
        {
          path: 'bank',
          element: <Bank />
        },
        {
          path: 'user',
          element: <UserPage/>
        }
      ]
    },
    {
      path: 'documents',
      children: [
        {
          path: 'salesContract/salesContract',
          element: <SalesContractPage />
        },
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;

import Ware from '../component/Ware';
import Account from '../component/Account';
import Dashborad from '../component/Dashborad';
import Reg from '../component/Regestieren';
import Log from '../component/Login';
import Load from '../component/Load';


import { Router, Route } from 'react-location';







export const routes: Route[] = [
  {
    element: <Ware />,
    path: "/",

  },

  {
    path: "/about",
    element: <Dashborad />
  },
  {
    path: "/reg",
    element: <Reg />
  },
  {
    path: "/log",
    element: <Log />
  },
  {
    path: "/account",
    element: <Account />
  },
  {
    path: "/wareCorp",
    element: <Log />
  }
];



/*

 const routes = [
   {
     path: 'about',
     children: [
       {
         path: 'me', // matches /about/me
             load: async () => {
      const dispatch = useAppDispatch();

    },
    pendingElement: async () => <Load />,
    pendingMs: 1000, if load data still for 1 secound not here
    pendingMinMs: 500 // If it's shown, ensure the pending element is rendered for at least 500ms
       },
       {
         path: 'you', // matches /about/you
       },
     ],
   },
 ]


 */
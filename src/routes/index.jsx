import Home from "../pages/home";
import Stars from "../pages/stars";
import Education from '../pages/education'
import Mascot from '../pages/mascot'

export const Routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/stars",
    component: Stars,
  },
  {
    path: '/education',
    component: Education
  },
  {
    path: '/mascot',
    component:Mascot
  }
];

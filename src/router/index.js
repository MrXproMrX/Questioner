import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexViews'
import AboutVompanyViews from '../views/AboutVompanyViews'
import ContactsViews from '../views/ContactsViews'
import OurProductsViews from '../views/OurProductsViews'
import ProfessionalServicesViews from '../views/ProfessionalServicesViews'
import ResearchStoreViews from '../views/ResearchStoreViews'
import OurConstructorRatesViews from '../views/OurConstructorRatesViews'
import InformationResourceViews from '../views/InformationResourceViews'
import ResearchStoreInViews from '../views/ResearchStoreInViews'
import InformationResourceInViews from '../views/InformationResourceInViews'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutVompanyViews
  },

  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsViews
  },

  {
    path: '/OurProducts',
    name: 'OurProducts',
    component: OurProductsViews
  },

  {
    path: '/Services',
    name: 'Services',
    component: ProfessionalServicesViews
  },

  {
    path: '/ResearchStore',
    name: 'ResearchStore',
    component: ResearchStoreViews
  },

  {
    path: '/OurConstructor',
    name: 'OurConstructorRates',
    component: OurConstructorRatesViews
  },

  {
    path: '/InformationResource',
    name: 'InformationResourceList',
    component: InformationResourceViews
  },

  {
    path: '/ResearchStoreIn/:id',
    name: 'ResearchStoreIn',
    component: ResearchStoreInViews
  },

  {
    path: '/InformationResourceIn/:id',
    name: 'InformationResourceIn',
    component: InformationResourceInViews
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

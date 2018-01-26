import Card from './views/Card.vue';
const Carousel = () => System.import('./views/Carousel.vue');
const Msgbox = () => System.import('./views/Msgbox.vue');
const Slider = () => System.import('./views/Slider.vue');
const UcGallery = () => System.import('./views/UcGallery.vue');

export default [
  {
    path: '/card',
    component: Card,
  },
  {
    path: '/carousel',
    component: Carousel,
  },
  {
    path: '/msgbox',
    component: Msgbox,
  },
  {
    path: '/slider',
    component: Slider,
  },
  {
    path: '/uc-gallery',
    component: UcGallery,
  },
  {
    path: '/',
    redirect: '/card',
  },
];

import Card from '../view/Card.vue';
const Carousel = () => System.import('../view/Carousel.vue');
const Msgbox = () => System.import('../view/Msgbox.vue');
const Slider = () => System.import('../view/Slider.vue');
const UcGallery = () => System.import('../view/UcGallery.vue');

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
import Card from '../view/Card.vue';
import Carousel from '../view/Carousel.vue';
import Msgbox from '../view/Msgbox.vue';
import Slider from '../view/Slider.vue';
import UcGallery from '../view/UcGallery.vue';

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
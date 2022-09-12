<template>
    <div class="marketing__brand">
        <Carousel class="marketing__brand__list" :settings="settings" :breakpoints="breakpoints">
            <Slide class="marketing__brand__item" v-for="(brand,index) in brands" :key="index">
                <a :href="brand.link">
                    <img :src="brand.img" :alt="brand.img">
                </a>
            </Slide>

            <template #addons>
                <navigation />
            </template>
        </Carousel>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
    props:['brands'],
    components:{
        Carousel,
        Slide,
        Navigation,
    },

    data() {
    return {
      settings: {
        itemsToShow: 7,
        wrapAround: true,
        snapAlign: "center",
      },

      breakpoints: {
            300: {
                itemsToShow: 1,
                snapAlign: 'center',
            },

            500: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1000: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
            1550:{
                itemsToShow: 5,
                snapAlign: 'center',
            },
            1920: {
                itemsToShow: 7,
                snapAlign: 'start',
            },
        },
    };
  },
}
</script>
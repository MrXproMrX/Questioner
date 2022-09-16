<template>
    <Carousel class="ResearchStore__list" :settings="settings" :breakpoints="breakpoints">

        <Slide class="ResearchStore__item" v-for="(research,index) in researchs" :key="index">
            <router-link :to="research.link + research.id">
                <h4 class="ResearchStore__data"><span><i class="fas fa-calendar-day"></i></span> {{research.data}}</h4>
                <div class="ResearchStore__img">
                    <img :src="research.img" :alt="research.data">
                </div>
                <h3 class="ResearchStore__title__h3">{{research.title}}</h3>
            </router-link>
        </Slide>

        <template #addons>
                <navigation />
        </template>

    </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
    props:['researchs'],
    components:{
        Carousel,
        Slide,
        Navigation,
    },
    
    data() {
        return {
                settings: {
                itemsToShow: 5,
                itemsToScroll:1,
                wrapAround: true,
                snapAlign: "center",
                transition:1500,
                autoplay:3000,
            },

            breakpoints: {
                100:{
                    itemsToShow: 1,
                    snapAlign: 'center',
                },

                700: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },

                1550:{
                        itemsToShow: 3,
                        snapAlign: 'center',
                },
               
                1920: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                },
            },
       };
    },
}
</script>
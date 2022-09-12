<template>
    <Carousel class="Information__list" :settings="settings" :breakpoints="breakpoints">
        <Slide class="Information__item" v-for="(resource,index) in resources" :key="index">
            <a :href="resource.link">
                <div class="Information__img">
                    <img :src="resource.img" :alt="resource.title">
                </div>
            
                <div class="Information__icons">
                    <h4 class="Information__data__title"><span><i class="fas fa-calendar-day"></i></span> {{resource.data}}</h4>
                    <h4 class="Information__data__title"><span><i class="fa-solid fa-eye"></i></span> {{resource.eyes}}</h4>
                </div>

                <h2 class="Information__title__h2">{{resource.title}}</h2>

                <div class="Information__text">
                    <p>{{resource.text}}</p>
                </div>
            </a>
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
        props:['resources'],
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
                    100: {
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
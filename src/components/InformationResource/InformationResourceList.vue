<template>
    <div class="Information__list__cart">
        <div class="Information__item__cart" v-for="(resource,index) in resources" :key="index">
            <router-link :to="resource.link + resource.id">
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
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props:['resources'],
}
</script>
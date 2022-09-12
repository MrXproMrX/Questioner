<template>
    <ul class="professional__list">
        <li class="professional__item" v-for="(service,index) in services" :key="index">    
            <img class="professional__img" :src="service.img" :alt="service.title">
            <h2 class="professional__title__h2">{{service.title}}</h2>
            <a class="professional__link" :href="service.link">{{service.linkText}}</a>
        </li>

        <li class="professional__itemFixed">
            <a href="#">
                <img class="professional__itemFixed__img" src="../../assets/foto/services_6.png" alt="services_6">
                <h2 class="professional__Fixed__title">Получить консультацию бесплатно</h2>
            </a>
        </li>
    </ul>
</template>


<script>
export default {
    props:['services']
}
</script>
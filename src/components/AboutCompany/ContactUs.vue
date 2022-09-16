<template>
    <ul class="contact_us__list">
        <li class="contact_us__item" v-for="(contact_u,index) in contact_us" :key="index">
            <div class="contact_us__img">
                <img :src="contact_u.img" :alt="contact_u.title">
            </div>
            <h2 class="contact_us__title__h2">{{contact_u.title}}</h2>
            <a class="contact_us__email" :href="'mailto:' + contact_u.email">{{contact_u.email}}</a> 

            <ul v-if="contact_u.numbers" class="contact_us__number">
                <li v-for="(number,index) in contact_u.numbers" :key="index + number.num">
                    <a class="contact_us__number__link" :href="'tel:'+number.num">{{number.num}}</a>
                </li>
            </ul>

        </li>
    </ul>
</template>


<script> 
export default {
    props:['contact_us'],
}
</script>
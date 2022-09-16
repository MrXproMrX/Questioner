<template>
    <ul class="persons__list">
        <li class="persons__item" v-for="(person,index) in persons" :key="index">
            <div class="persons__img">
                <img :src="person.img" :alt="person.name">
            </div>

            <h2 class="persons__name">{{person.name}}</h2>
            <h4 class="persons__text">{{person.text}}</h4>
        </li>
    </ul>
</template>

<script>
export default {
    props:['persons'],
}
</script>
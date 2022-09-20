<template>
    <section>
        <ul class="DatabaseFAQ__list">
            <li class="DatabaseFAQ__item" v-for="(database,index) in databases" :key="index">
                <h2 class="DatabaseFAQ__title" @click="database.none = !database.none">{{database.title}} 
                    <span v-if="database.none == false"><i class="fa-solid fa-angle-right"></i></span>
                    <span v-else><i class="fa-solid fa-angle-down"></i></span>
                </h2>
                
                <div class="DatabaseFAQ__text" v-if="database.none">{{database.text}}</div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props:['databases'],
}
</script>
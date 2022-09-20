<template>
    <section>
        <div class="SampleQuestionnaires__list">
            <div class="SampleQuestionnaires__item" @click="sample.none =! sample.none" v-for="(sample,index) in samples" :key="index">
                <h2 class="SampleQuestionnaires__title">
                    <span>
                        <img :src="sample.img" :alt="sample.title">
                        {{sample.title}}
                    </span>

                    <span v-if="sample.none == false"><i class="fa-solid fa-angle-right"></i></span>
                    <span v-else><i class="fa-solid fa-angle-down"></i></span>
                </h2>

                <div v-if="sample.none">
                    <ul v-if="sample.menusmax" class="SampleQuestionnaires__menu">
                        <li class="SampleQuestionnaires__menu__item" v-for="(menu,index) in sample.menusmax" :key="index + menu.linkText">
                            <a class="SampleQuestionnaires__link" :href="menu.link"> <span><i class="fa-solid fa-book"></i></span> {{menu.linkText}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props:['samples'],
}
</script>
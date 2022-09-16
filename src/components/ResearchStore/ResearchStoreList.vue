<template>
    <div class="ResearchStore__list__cart">
        <div class="ResearchStore__item__cart" v-for="(research,index) in researchs" :key="index">
            <router-link :to="research.link + research.id">
                <h4 class="ResearchStore__data"><span><i class="fas fa-calendar-day"></i></span> {{research.data}}</h4>
                <div class="ResearchStore__img">
                    <img :src="research.img" :alt="research.data">
                </div>
                <h3 class="ResearchStore__title__h3">{{research.title}}</h3>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props:['researchs'],
}
</script>
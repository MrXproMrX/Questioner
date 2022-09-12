<template>
    <ul class="ResearchStore__number">
        <li v-for="(number,index) in numbers" :key="index">
            <h2 class="ResearchStore__number__title__h2">
                <span><i class="fas fa-chevron-right"></i></span> 
                {{number.title}} 
                <span v-if="number.span">{{number.span}}</span>
            </h2>
            <h3 class="ResearchStore__number__title__h3">{{number.text}}</h3>
        </li>
    </ul>
</template>

<script>
export default {
    props:['numbers'],
}
</script>
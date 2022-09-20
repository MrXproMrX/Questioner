<template>
    <section>
        <!-- About company start -->

        <div class="about">
            <img class="about__fon" src="../../assets/foto/fon.png" alt="about">

            <section class="container">
                <div class="about__cart">
                    <h2 class="about__title__h2">Вопросы и ответы</h2>
                </div>
            </section>
        </div>

        <!-- About company end -->


        <!-- Database FAQ start -->

        <div class="DatabaseFAQ">
            <section class="container">
                <div class="products__cart">
                    <h2 class="products__title__h2">FAQ  по базе респондентов</h2>
                </div>
                <DatabaseFAQItem :databases="databases"></DatabaseFAQItem>
            </section>
        </div>

        <!-- Database FAQ end -->
    </section>
</template>

<script>
import DatabaseFAQItem from '@/components/DatabaseFAQ/DatabaseFAQItem.vue';
import DatabaseFAQJs from '@/data/DatabaseFAQJs';
export default {
    components:{
        DatabaseFAQItem,
    },

    data(){
        return{
            databases:DatabaseFAQJs,
        }
    }
}
</script>
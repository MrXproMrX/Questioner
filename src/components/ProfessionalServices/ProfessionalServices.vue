<template>
    <section>
        <!-- About company start -->

        <div class="about">
            <img class="about__fon" src="../../assets/foto/fon.png" alt="about">

            <section class="container">
                <div class="about__cart">
                    <h2 class="about__title__h2">Профессиональные услуги</h2>
                </div>
            </section>
        </div>

        <!-- About company end -->

    <!-- Professional Services start -->

    <div class="professional">
        <section class="container">
            <div class="products__cart">
                <h2 class="products__title__h2">Профессиональные услуги</h2>
            </div>

            <Services :services="services"></Services>
        </section>
    </div>

    <!-- Professional Services end -->
    </section>
</template>


<script>
    import Services from '@/components/Index/Services.vue';
    import ServicesJs from '@/data/ServicesJs';
export default {
    components:{
        Services,
    },

    data(){
        return{
            services:ServicesJs,
        }
    }
}
</script>
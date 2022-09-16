<template>
    <section>

    <!-- About company start -->

    <div class="about">
            <img class="about__fon" src="../../assets/foto/fon.png" alt="about">

            <section class="container">
                <div class="about__cart">
                    <h2 class="about__title__h2">Тарифы нашего конструктора</h2>
                </div>
            </section>
    </div>

    <!-- About company end -->


    <!-- Our constructor rates start -->

    <div class="our_constructor">
        <section class="container">
            <div class="products__cart">
                <h2 class="products__title__h2">Тарифы нашего конструктора</h2>
            </div>
            
            <OurConstructor :constructors="constructors"></OurConstructor>
        </section>
    </div>

    <!-- Our constructor rates end -->

   </section>
</template>

<script>
import OurConstructor from '@/components/Index/OurConstructor.vue';
import OurConstructorJs from '@/data/OurConstructorJs';
export default {
    components:{
        OurConstructor,
    },

    data(){
        return{
            constructors:OurConstructorJs,
        }
    }
}
</script>
<template>
    <section>
        <!-- About company start -->

        <div class="about">
            <img class="about__fon" src="../../assets/foto/fon.png" alt="about">

            <section class="container">
                <div class="about__cart">
                    <h2 class="about__title__h2">Наши продукты</h2>
                </div>
            </section>
        </div>

        <!-- About company end -->


        <!-- OurConstructor start -->

        <div class="products">
            <section class="container">
                <div class="products__cart">
                    <h2 class="products__title__h2">Наши продукты</h2>
                </div>
                <ProductsList :products="products"></ProductsList>
            </section>
        </div>

        <!-- OurConstructor end -->


    </section>
</template>

<script>
import ProductsList from '@/components/Index/ProductsList.vue';
import ProductsJs from '@/data/ProductsJs';
export default {
    components:{
        ProductsList,
    },

    data(){
        return{
            products:ProductsJs
        }
    }
}
</script>
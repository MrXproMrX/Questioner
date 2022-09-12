<template>
   <section>

    <!-- Marketing start -->
        <div class="marketing">
            <img class="marketing__fon" src="../../assets/foto/fon.png" alt="fon">
            <section class="container">
                <div class="marketing__list">
                    <h1 class="marketing__title__h1">Маркетинговые<br>онлайн-исследования</h1>
                    <h3 class="marketing__title__h3">Онлайн-опросы оперативно и качественно</h3>
                    <a href="#!" class="marketing__link">Начать пользоваться сервисом</a>
                </div>

                <BrandSlick :brands="brands"></BrandSlick>
            </section>
        </div>
    <!-- Marketing ent -->


    <!-- Our products start -->

    <div class="products">
        <section class="container">
            <div class="products__cart">
                <h2 class="products__title__h2">Наши продукты</h2>
                <a href="#" class="products__link">Узнать больше <span><i class="fa-solid fa-angle-right"></i></span></a>
            </div>

            <ProductsList :products="products"></ProductsList>
        </section>
    </div>

    <!-- Our products end -->


    <!-- Professional Services start -->

    <div class="professional">
        <section class="container">
            <div class="products__cart">
                <h2 class="products__title__h2">Профессиональные услуги</h2>
                <a href="#" class="products__link">все услуги <span><i class="fa-solid fa-angle-right"></i></span></a>
            </div>

            <Services :services="services"></Services>
        </section>
    </div>

    <!-- Professional Services end -->


    <!-- Our constructor rates start -->

    <div class="our_constructor">
        <section class="container">
            <div class="products__cart">
                <h2 class="products__title__h2">Тарифы нашего конструктора</h2>
                <a href="#" class="products__link">Все тарифы <span><i class="fa-solid fa-angle-right"></i></span></a>
            </div>
            
            <OurConstructor :constructors="constructors"></OurConstructor>
        </section>
    </div>

    <!-- Our constructor rates end -->
   </section>


   <!-- Research Store start -->

   <div class="ResearchStore">
       <section class="container">
            <div class="products__cart">
                <h2 class="products__title__h2">Магазин исследований</h2>
                <a href="#" class="products__link">Все исследования <span><i class="fa-solid fa-angle-right"></i></span></a>
            </div>
            
            <ResearchStore :researchs="researchs"></ResearchStore>
       </section>

        <div class="ResearchStore__cart">
            <img class="ResearchStore__cart__fon" src="../../assets/foto/fonSlick.png" alt="fonSlick">

            <section class="container">
                <div class="ResearchStore__cart__list">
                
                    <div class="ResearchStore__cart__item">
                        <div class="ResearchStore__img__item">
                            <img src="../../assets/foto/logo2.svg" alt="logo">
                        </div>

                        <div class="ResearchStore__text__item">
                            <p>
                                - это компания, предоставляющая комплексные решения для проведения онлайн-опросов. К нашим услугам обращаются рекламные и маркетинговые агентства, производители и ретейлеры, маркетологи и маркетинговые подразделения корпораций. С 2011 г. успешно реализуем общероссийские и региональные проекты по исследованию потребителей, тестированию рекламных макетов, опросу сотрудников компаний и сбору общественного мнения.
                                Наша цель – сделать онлайн-опросы эффективнее, проще и доступнее как в России, так и за ее пределами.
                            </p>
                        </div>

                        <div class="ResearchStore__iso">
                            <div class="ResearchStore__iso__logo">
                                <img src="../../assets/foto/ISO.svg" alt="">
                            </div>

                            <div>
                                <div class="ResearchStore__iso__text">
                                    <p>
                                    Компания сертифицирована по стандарту ISO 20252:2019
                                    </p>
                                </div>

                                <a href="#!" class="ResearchStore__iso__link">Посмотреть сертификат</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>

        <section class="container">
            <ResearchNumber :numbers="numbers"></ResearchNumber>
        </section>
   </div>

   <!-- Research Store end -->


   <!-- Information resource start -->

   <div class="Information">
       <section class="container">
            <div class="products__cart">
                <h2 class="products__title__h2">Инфоресурс</h2>
                <a href="#" class="products__link">Смотреть все <span><i class="fa-solid fa-angle-right"></i></span></a>
            </div>

            <InformationSlick :resources="resources"></InformationSlick>
       </section>
   </div>

   <!-- Information resource end -->

</template>

<script>
import BrandSlick from '@/components/Index/BrandSlick.vue';
import MarketingBrandJs from '@/data/MarketingBrandJs';
import ProductsList from '@/components/Index/ProductsList.vue';
import ProductsJs from '@/data/ProductsJs';
import Services from '@/components/Index/Services.vue';
import ServicesJs from '@/data/ServicesJs';
import OurConstructor from '@/components/Index/OurConstructor.vue';
import OurConstructorJs from '@/data/OurConstructorJs';
import ResearchStore from '@/components/Index/ResearchStore.vue';
import ResearchStoreJs from '@/data/ResearchStoreJs';
import ResearchNumber from '@/components/Index/ResearchNumber.vue';
import ResearchNumberJs from '@/data/ResearchNumberJs';
import InformationSlick from '@/components/Index/InformationSlick.vue';
import InformationSlickJs from '@/data/InformationSlickJs';
export default {
    components:{
        BrandSlick,
        ProductsList,
        Services,
        OurConstructor,
        ResearchStore,
        ResearchNumber,
        InformationSlick,
    },

    data(){
        return{
            brands:MarketingBrandJs,
            products:ProductsJs,
            services:ServicesJs,
            constructors:OurConstructorJs,
            researchs:ResearchStoreJs,
            numbers:ResearchNumberJs,
            resources:InformationSlickJs,
        }
    }
}
</script>
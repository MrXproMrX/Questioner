<template>
    <section>
        <!-- About company start -->

        <div class="about">
            <img class="about__fon" src="../../assets/foto/fon.png" alt="about">

            <section class="container">
                <div class="about__cart">
                    <h2 class="about__title__h2">{{ResearchStorIn.title}}</h2>
                </div>
            </section>
        </div>

        <!-- About company end -->


        <!-- ResearchStoreIn start -->

        <div class="ResearchStoreIn">
            <section class="container">
                <div class="products__cart">
                    <h2 class="products__title__h2">{{ResearchStorIn.title}}</h2>
                </div>

                <div class="ResearchStoreIn__list clearfix">
                    <div class="ResearchStoreIn__img">
                        <img :src="ResearchStorIn.img" :alt="ResearchStorIn.title">
                    </div>
                    <div>
                        <h4 class="ResearchStore__data"><span><i class="fas fa-calendar-day"></i></span>{{ResearchStorIn.data}}</h4>
                        <div class="ResearchStoreIn__text">
                            <p>{{ResearchStorIn.text}}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- ResearchStoreIn end -->

    </section>
</template>

<script>
import ResearchStoreJs from '@/data/ResearchStoreJs';
export default {
    computed:{
        ResearchStorIn(){
        return ResearchStoreJs.find(researchs => researchs.id === +this.$route.params.id);
      },
    }
}
</script>
<template>
    <section>
        <!-- About company start -->

        <div class="about">
            <img class="about__fon" src="../../assets/foto/fon.png" alt="about">

            <section class="container">
                <div class="about__cart">
                    <h2 class="about__title__h2">{{InformationSlickIn.title}}</h2>
                </div>
            </section>
        </div>

        <!-- About company end -->


        <!-- ResearchStoreIn start -->

        <div class="ResearchStoreIn">
            <section class="container">
                <div class="products__cart">
                    <h2 class="products__title__h2">{{InformationSlickIn.title}}</h2>
                </div>

                <div class="ResearchStoreIn__list clearfix">
                    <div class="ResearchStoreIn__img">
                        <img :src="InformationSlickIn.img" :alt="InformationSlickIn.title">
                    </div>
                    <div>
                        <h4 class="ResearchStore__data"><span><i class="fas fa-calendar-day"></i></span>{{InformationSlickIn.data}}</h4>
                        <div class="ResearchStoreIn__text">
                            <p>{{InformationSlickIn.text}}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- ResearchStoreIn end -->

    </section>
</template>

<script>
import InformationSlickJs from '@/data/InformationSlickJs';
export default {
    computed:{
        InformationSlickIn(){
        return InformationSlickJs.find(resources => resources.id === +this.$route.params.id);
      },
    }
}
</script>InformationResourceIn
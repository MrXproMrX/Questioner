<template>
    <section>
        <!-- About company start -->

        <div class="about">
            <img class="about__fon" src="../../assets/foto/fon.png" alt="about">

            <section class="container">
                <div class="about__cart">
                    <h2 class="about__title__h2">Инфоресурс</h2>
                </div>
            </section>
        </div>

        <!-- About company end -->

    <!-- Information resource start -->

   <div class="Information">
       <section class="container">
            <div class="products__cart">
                <h2 class="products__title__h2">Инфоресурс</h2>
            </div>

            <InformationResourceList :resources="resources"></InformationResourceList>
       </section>
   </div>

   <!-- Information resource end -->

    </section>
</template>

<script>
import InformationResourceList from '@/components/InformationResource/InformationResourceList.vue'
import InformationSlickJs from '@/data/InformationSlickJs';
export default {
    components:{
        InformationResourceList,
    },

    data(){
        return{
            resources:InformationSlickJs,
        }
    }
}
</script>
<template>
    <section>
        <!-- About company start -->

        <div class="about">
            <img class="about__fon" src="../../assets/foto/fon.png" alt="about">

            <section class="container">
                <div class="about__cart">
                    <h2 class="about__title__h2">Магазин исследований</h2>
                </div>
            </section>
        </div>

        <!-- About company end -->

    <!-- Research Store start -->

   <div class="ResearchStore">
       <section class="container">
            <div class="products__cart">
                <h2 class="products__title__h2">Магазин исследований</h2>
            </div>
            
            <ResearchStoreList :researchs="researchs"></ResearchStoreList>
            
       </section>
   </div>

   <!-- Research Store end -->
    </section>
</template>

<script>
import ResearchStoreList from '@/components/ResearchStore/ResearchStoreList.vue'
import ResearchStoreJs from '@/data/ResearchStoreJs';
export default {
    components:{
        ResearchStoreList,
    },

    data(){
        return{
            researchs:ResearchStoreJs,
        }
    }
}
</script>
<template>
    <section>
        <!-- About company start -->

        <div class="about">
            <img class="about__fon" src="../../assets/foto/fon.png" alt="about">

            <section class="container">
                <div class="about__cart">
                    <h2 class="about__title__h2">Образцы анкет и примеры опросов</h2>
                </div>
            </section>
        </div>

        <!-- About company end -->


        <!-- Sample questionnaires start -->

        <div class="SampleQuestionnaires">
            <section class="container">
                <SampleQuestionnairesItem :samples="samples"></SampleQuestionnairesItem>
            </section>
        </div>

        <!-- Sample questionnaires end -->
    </section>
</template>

<script>
import SampleQuestionnairesItem from '@/components/SampleQuestionnaires/SampleQuestionnairesItem.vue';
import SampleQuestionnairesJs from '@/data/SampleQuestionnairesJs';
export default {
    components:{
        SampleQuestionnairesItem,
    },

    data(){
        return{
            samples:SampleQuestionnairesJs,
        }
    }
}
</script>
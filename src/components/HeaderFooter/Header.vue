<template>
    <header>
        <div class="header">
            <div class="header__list">

                <div class="header__form_constructor" :class="{ header__formActive: burger }">
                    <div class="header__constructor__list">
                        <div class="header__logo">
                            <router-link to="/">
                                <img src="../../assets/foto/logo.svg" alt="logo">
                            </router-link>
                        </div>

                        <div class="header__burger" @click="burger = !burger">
                            <button v-if="burger" class="header__burger__text"><i class="fas fa-bars"></i></button>
                            <button v-else class="header__burger__text"><i class="fas fa-times"></i></button>
                        </div>

                        <h2 class="header__title">Анкетолог</h2>
                    </div>
                    <HeaderFormConstructor v-if="!burger"></HeaderFormConstructor>
                </div>

                <div class="header__menu">
                    <section class="container">
                        <HeaderMenu :menus="menus"></HeaderMenu>
                    </section>
                </div>

                <div class="header__to_come_in">
                     <button class="header__to_come_in__button">
                        <span><i class="fa-solid fa-arrow-right-long"></i></span>Войти 
                     </button>

                     <button class="header__question__button">
                        <i class="fa-solid fa-question"></i>
                     </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import HeaderFormConstructor from '@/components/HeaderFooter/HeaderFormConstructor.vue';
import HeaderMenu from '@/components/HeaderFooter/HeaderMenu.vue';
import HeaderLinkJs from '@/data/HeaderLinkJs';
export default {
    data(){
        return{
            burger:true,
            menus:HeaderLinkJs
        }
    },

    components:{
        HeaderFormConstructor,
        HeaderMenu
    },
}
</script>
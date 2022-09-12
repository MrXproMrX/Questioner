<template>
    <div class="header__form_constructor_in">
        <div class="header__form__to_come_in">
            <a href="#!" class="header__to_come_in__link">Войти в аккаунт</a>
            <a href="#!" class="header__to_come_in__link">Регистрация</a>
        </div>

        <HeaderFormItem :formLists="formLists"></HeaderFormItem>

        <ul class="header__form__icons">
            <li>
                <a href="#!" class="header__form__icons__link"><i class="fa-brands fa-facebook-f"></i></a>
            </li>

            <li>
                <a href="#!" class="header__form__icons__link"><i class="fa-brands fa-vk"></i></a>
            </li>

            <li>
                <a href="#!" class="header__form__icons__link"><i class="fa-brands fa-twitter"></i></a>
            </li>

            <li>
                <a href="#!" class="header__form__icons__link"><i class="fa-brands fa-instagram"></i></a>
            </li>
        </ul>
    </div>
</template>

<script>
import HeaderLinkJs from '@/data/HeaderLinkJs';
import HeaderFormItem from '@/components/HeaderFooter/HeaderFormItem.vue';
export default {
    components:{
        HeaderFormItem,
    },

    data(){
        return{
            formLists:HeaderLinkJs
        }
    }
}
</script>
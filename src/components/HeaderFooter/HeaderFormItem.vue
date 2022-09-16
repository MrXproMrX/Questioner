<template>
    <ul class="header__form__list">
        <li v-for="(formList,index) in formLists" :key="index">
            <router-link class="header__form__link" :to="formList.link">{{formList.text}} <span><i class="fas fa-angle-right"></i></span></router-link>

            <ul class="header__name_m" v-if="formList.menuNone">
                <li v-for="menu in formList.menuNone" :key="menu.id">
                    <router-link class="header__none__link" :to="menu.link">{{menu.text}}</router-link>
                </li>
            </ul>

        </li>
    </ul>
</template>


<script>
export default {
    props:['formLists']
}
</script>
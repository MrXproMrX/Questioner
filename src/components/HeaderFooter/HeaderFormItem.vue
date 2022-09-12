<template>
    <ul class="header__form__list">
        <li v-for="(formList,index) in formLists" :key="index">
            <a class="header__form__link" :href="formList.link">{{formList.text}} <span><i class="fas fa-angle-right"></i></span></a>

            <ul class="header__name_m" v-if="formList.menuNone">
                <li v-for="menu in formList.menuNone" :key="menu.id">
                    <a class="header__none__link" :href="menu.link">{{menu.text}}</a>
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
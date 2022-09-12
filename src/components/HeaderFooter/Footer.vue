<template>
    <!-- footer start -->

    <footer>
        <div class="footer">
            <section class="container">
                <div class="footer__list">
                    <FooterMenu :menus="menus"></FooterMenu>

                    <div class="footer__item">
                        <h2 class="footer__h2__title">Подпишитесь на нашу рассылку</h2>

                        <form action="#!" class="footer__from">
                            <input class="footer__from__index" type="email" placeholder="Ваш E-mail">
                            <button class="footer__from__button" type="submit"><img src="../../assets/foto/button.png" alt="button"></button>
                        </form>

                        <h2 class="footer__h2__title">Мы в соцсетях:</h2>

                        <ul class="footer__icons">
                            <li>
                                <a href="#!" class="footer__icons__link"><img src="../../assets/foto/f.png" alt="icons"></a>
                            </li>

                            <li>
                                <a href="#!" class="footer__icons__link"><img src="../../assets/foto/vk.png" alt="icons"></a>
                            </li>

                            <li>
                                <a href="#!" class="footer__icons__link"><img src="../../assets/foto/ok.png" alt="icons"></a>
                            </li>

                            <li>
                                <a href="#!" class="footer__icons__link"><img src="../../assets/foto/instagram.png" alt="icons"></a>
                            </li>
                        </ul>

                        <div class="footer__logo">
                            <a href="#!">
                                <img src="../../assets/foto/footer__logo.svg" alt="footer__logo">
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </footer>

   <!-- footer end -->
</template>

<script>
import FooterMenu from '@/components/HeaderFooter/FooterMenu.vue';
import HeaderLinkJs from '@/data/HeaderLinkJs';
export default {
    components:{
        FooterMenu,
    },

    data(){
        return{
            menus:HeaderLinkJs
        }
    }
}
</script>
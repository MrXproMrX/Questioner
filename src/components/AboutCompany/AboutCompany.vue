<template>
    <section>
        <!-- About company start -->

        <div class="about">
            <img class="about__fon" src="../../assets/foto/fon.png" alt="about">

            <section class="container">
                <div class="about__cart">
                    <h2 class="about__title__h2">О компании</h2>
                </div>
            </section>
        </div>

        <!-- About company end -->


        <!--About Questioner start-->

            <div class="questioner_qbout">
                <section class="container">
                     <div class="questioner_qbout__list">
                        <div class="questioner_qbout__item">
                            <div class="ResearchStore__img__item">
                                <img src="../../assets/foto/logo2.svg" alt="logo">
                            </div>

                            <div class="ResearchStore__text__item">
                                <p>
                                    Анкетолог - это компания, предоставляющая комплексные решения для проведения онлайн-опросов. К нашим услугам обращаются рекламные и маркетинговые агентства, производители и ретейлеры, маркетологи и маркетинговые подразделения корпораций. С 2011 г. успешно реализуем общероссийские и региональные проекты по исследованию потребителей, тестированию рекламных макетов, опросу сотрудников компаний и сбору общественного мнения.
                                    Наша цель – сделать онлайн-опросы эффективнее, проще и доступнее как в России, так и за ее пределами.
                                </p>
                            </div>

                            <div class="ResearchStore__iso">
                                <div class="ResearchStore__iso__logo">
                                    <img src="../../assets/foto/ISO.svg" alt="">
                                </div>

                                <div>
                                    <div class="ResearchStore__iso__text">
                                        <p>
                                            Компания сертифицирована по стандарту ISO 20252:2019
                                        </p>
                                    </div>

                                    <a href="#!" class="ResearchStore__iso__link">Посмотреть сертификат</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="questioner_qbout__right">
                            <img src="../../assets/foto/about_fon_2.png" alt="about_fon_2">
                        </div>
                    </div>
                </section>

            </div>
            
            <div class="questioner_qbout">
                <section class="container">
                    <ResearchNumber :numbers="numbers"></ResearchNumber>
                </section>
            </div>
            
        <!--About Questioner end-->


        <!-- We don't stand still start -->

            <div class="we_don">
                <section class="container">
                    <div class="we_don__list">
                        

                        <div class="we_don__item">
                            <h2 class="products__title__h2">Мы не стоим на месте</h2>

                            <div class="we_don__text">
                                <p>
                                    Основная цель нашего развития – создание полноценной исследовательской инфраструктуры, чтобы еще лучше помогать клиентам добиваться успеха.<br>
                                    Приоритетные направления нашей работы:
                                </p>
                            </div>

                            <ul class="we_don__menu">
                                <li>
                                    <h3 class="we_don__title__h3">Улучшение конструктора анкет и тестов, чтобы вы могли провести опрос любой сложности;</h3>
                                </li>

                                <li>
                                    <h3 class="we_don__title__h3">Наращивание численности онлайн-панели респондентов, чтобы вы могли найти нужную вам целевую аудиторию;</h3>
                                </li>

                                <li>
                                    <h3 class="we_don__title__h3">Совершенствование наших коробочных продуктов для тех, кто занимается опросами профессионально;</h3>
                                </li>

                                <li>
                                    <h3 class="we_don__title__h3">Ззапуск новых онлайн-сервисов, чтобы вы не ограничивались в своих исследованиях опросами;</h3>
                                </li>

                                <li>
                                    <h3 class="we_don__title__h3">Выход на международный уровень, потому что еще столько людей не оценили удобство нашего сервиса.</h3>
                                </li>
                            </ul>
                        </div>

                        <div class="we_don__left">
                            <img src="../../assets/foto/fon_about.png" alt="about">
                        </div>
                    </div>
                </section>
            </div>

        <!-- We don't stand still end -->


        <!-- The first persons of the company start -->

            <div class="persons">
                <section class="container">
                    <div class="persons__cart">
                        <h2 class="products__title__h2">Первые лица компании</h2> 
                        <Persons :persons="persons"></Persons>
                    </div>
                </section>
            </div>

        <!-- The first persons of the company end -->


        <!-- You can always contact us start -->

            <div class="contact_us">
                <section class="container">
                    <div class="contact_us__cart">
                        <h2 class="products__title__h2">С нами всегда можно связаться</h2>
                        <div class="contact_us__text">
                            <p>
                                Если вы заинтересованы и хотите присоединиться к нам в качестве инвестора, партнера или <br> клиента, пишите или звоните
                            </p>
                        </div>

                        <ContactUs :contact_us="contact_us"></ContactUs>

                        <div class="contact_us__text"> 
                            <p>Узнайте подробнее о том, как мы можем помочь вам</p>
                        </div>
                    </div>
                </section>
            </div>

        <!-- You can always contact us end -->

        
        <!-- Team start -->

        <div class="team">
            <section class="container">
                <img class="team__fon" src="../../assets/foto/team.png" alt="team">
                <div class="team__cart">
                    <div class="team__text">
                        <p>
                            Команда Анкетолога создана для решения ваших задач, руками настоящих профессионалов.  С нами, любое исследование станет аксиомой!
                        </p>
                    </div>
                </div>
            </section>
        </div>

        <!-- Team end -->


    </section>
</template>


<script>
import ResearchNumber from '@/components/Index/ResearchNumber.vue';
import ResearchNumberJs from '@/data/ResearchNumberJs';
import Persons from '@/components/AboutCompany/Persons.vue';
import PersonsJs from '@/data/PersonsJs';
import ContactUs from '@/components/AboutCompany/ContactUs.vue';
import ContactUsJs from '@/data/ContactUsJs';

export default {
    components:{
        ResearchNumber,
        Persons,
        ContactUs,
    },

    data(){
        return{
            numbers:ResearchNumberJs,
            persons:PersonsJs,
            contact_us:ContactUsJs,
        }
    }
}
</script>
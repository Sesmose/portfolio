<template>
    <section id="experiences" >
        <div class="container my-24 px-6 mx-auto ">
            <section class="mb-64 text-gray-800">
                <div class="max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-4">
                    <div class="font-light text-white sm:text-lg dark:text-white">
                        <h2 class="mb-4 text-4xl   dark:text-white"><span class="numberSection">02.</span>Mon parcours
                        </h2>
                        <p class="mb-4"></p>
                        <app-tabs :tabList="tabList" variant="horizontal">
                            <template class="ml-5" v-slot:tabPanel-1>
                                <p class="font-bold">Bac +2 Développeur Web full-stack (WebForce3)</p>
                                <p class="mb-4"></p>
                                <ol class="list-disc">
                                    <li>Apprentissage du front-end et back-end</li>
                                    <li>Apprentissage du framework Symfony</li>
                                    <li>Présentation d'un projet complet</li>
                                </ol>
                            </template>
                            <template class="ml-5" v-slot:tabPanel-2>
                                <p class="font-bold">Bac +3 Responsable Ingénierie Logiciel (CESI)</p>
                                <p class="mb-4"></p>
                                <ol class="list-disc">
                                    <li>Solidification des compétences techniques</li>
                                    <li>Apprentissage de la gestion de projet</li>
                                </ol>
                            </template>
                            <template class="ml-5" v-slot:tabPanel-3>
                                <p class="font-bold">Bac +5 Manager Systèmes d'Informations (CESI)</p>
                                <p class="mb-4"></p>
                                <ol class="list-disc">
                                    <li>Techniques de développement</li>
                                    <li>Gestion de projet</li>
                                    <li>Gestion d'une DSI</li>
                                    <li>Processus ITIL</li>
                                    <li>Apprentissage du management d'équipe</li>
                                </ol>
                            </template>
                        </app-tabs>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <img class="w-full rounded-lg" src="/webforce.png" alt="logo webforce">
                        <img class="mt-4 w-full lg:mt-10 rounded-lg" src="/cesi.png" alt="logo cesi">
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>
<script>
import AppTabs from "../components/Tabs.vue";

export default {
    components: {
        AppTabs,
    },
    data() {
        return {
            tabList: ["Bac +2", "Bac +3", "Bac +5"],
        };
    },
};
</script>
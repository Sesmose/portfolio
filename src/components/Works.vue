<template>
    <section class="mt-32">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-4">
            <div class="font-light text-white sm:text-lg dark:text-white">
                <h2 class="mb-4 text-4xl   dark:text-white"><span class="numberSection">03.</span>Mes expériences</h2>
                <p class="mb-4"></p>
                <app-tabs class=" mx-auto" :tabList="tabList" variant="horizontal">
                    <template v-slot:tabPanel-1>
                        <p class="font-bold">Titre RNCP Bac +2 Développeur Web full-stack</p>
                        <p class="mb-4"></p>
                        <ol class="list-disc">
                            <li>Apprentissage du front-end et back-end</li>
                            <li>Apprentissage du framework Symfony</li>
                            <li>Présentation d'un projet complet pour l'obtention du titre</li>
                        </ol>
                    </template>
                    <template v-slot:tabPanel-2>
                        <p class="font-bold">Titre RNCP Bac +3 Responsable en ingénierie logiciel</p>
                        <p class="mb-4"></p>
                        <ol class="list-disc">
                            <li>Solidification des compétences techniques</li>
                            <li>Apprentissage de la gestion de projet</li>
                        </ol>    
                    </template>
                    <template v-slot:tabPanel-3> 
                        <p class="font-bold">Titre RNCP Bac +5 Master Manager Systèmes d'Informations</p>
                        <p class="mb-4"></p>
                        <ol class="list-disc">
                            <li>Solidification des compétences techniques</li>
                            <li>Solidification des compétences de gestion de projet</li>
                            <li>Apprentissage du management d'équipe</li>
                        </ol>    
                    </template>
                </app-tabs>
            </div>

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
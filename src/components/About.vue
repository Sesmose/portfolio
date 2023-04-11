<template>
    <section class="mt-32" ref="About">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-white-300 sm:text-lg  dark:text-white">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-300 dark:text-white"><span class="numberSection">01.</span>Qui suis-je ?</h2>
            <p class="mb-4"></p>
            <p>Je suis <span>Arnaud Padula</span>, développeur <span>full-stack</span> de 27 ans.<br/> J'aime développer des applications permettant de répondre aux besoins des métiers en entreprise ou tout simplement construire des applications déstinées au grand public. Je suis actuellement en alternance au sein d'<a target="_blank" href="https://www.emfor-bfc.org/"><span>Emfor</span></a> jusqu'au mois de <span>Septembre 2023</span>.</p>
            <p class="mb-4"></p>
            <h3>Les technologies sur lesquelles j'ai pu travailler récemment :</h3>
            <p class="mb-4"></p>
            <div class="grid grid-cols-2 gap-2">
                <ul class="max-w-md space-y-1 text-gray-300 list-disc list-inside dark:text-white">
                    <li>
                        PHP (version 7,8)
                    </li>
                    <li>
                        Framework Symfony 
                    </li>
                    <li>
                        Javascript
                    </li>

                </ul>
                <ul class="max-w-md space-y-1 text-gray-300 list-disc list-inside dark:text-white ">
                    <li>
                        ElasticSearch
                    </li>
                    <li>
                        SQL
                    </li>
                    <li>
                        Vue.js
                    </li>


                </ul>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4 mt-8">
            <img class="w-full rounded-lg" src="../../public/avatar.png" alt="avatar Arnaud">
        </div>
    </div>
</section>
</template>
<style>
    span{
        color: #64ffda;
    }
    li::marker{
        color: #64ffda;
    }
</style>



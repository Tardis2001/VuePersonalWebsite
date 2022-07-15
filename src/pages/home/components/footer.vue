<template>
    <v-footer class="bg-indigo d-flex justify-center" padless id="footer">
        <v-card class="bg-indigo ma-8" elevation="40" >
                <v-card-title>Meios de Contatos</v-card-title>

                <v-card-actions>
                    <v-btn href="https://github.com/Tardis2001" append-icon="mdi-github">github<v-img  src="@/assets/img/github.svg" alt="github" max-height="70px"></v-img></v-btn>
                    <v-btn href="https://www.twitch.tv/tardis_dev" append-icon="mdi-twitch">TWITCH<v-img src="@/assets/img/twitch.svg" alt="twitch" max-height="70px"></v-img></v-btn>
                    <v-btn href="https://www.linkedin.com/in/matheus-santos-evangelista-610b58181/" append-icon="mdi-linkedin">LINKENDIN<v-img src="@/assets/img/linkendin.svg" alt="linkendin" max-height="70px"></v-img> </v-btn>
                </v-card-actions>
                 <v-divider></v-divider>
                <v-card-text>Para mais meios de contato click <router-link to="/mysocials">aqui</router-link></v-card-text>
        </v-card>


    </v-footer>
</template>

<script>
export default {

}
</script>

<style>
footer{
    padding-top: 2rem;
}
p:nth-last-child(1){
    /* margin:rem; */
    padding: 10px;
}
</style>

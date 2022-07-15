<template>
    <nav>
        <v-toolbar color="indigo" app>
            <v-toolbar-title class="text-uppercase grey-text">
                <span class="font-weight-light">Matheus</span>
                <span>Evangelista</span>


            </v-toolbar-title>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn href="#" class="">
                        <v-icon icon="mdi-home"></v-icon>
                        Home
                    </v-btn>
     
                    <v-btn href="#about">
                        <v-icon icon="mdi-clipboard-account"></v-icon>
                        Sobre
                    </v-btn>
                    <v-btn href="#skills">
                        <v-icon icon="mdi-archive"></v-icon>
                        Habilidades
                    </v-btn>
                    <v-btn href="#footer">
                        <v-icon icon="mdi-email"></v-icon>
                        Contatos
                    </v-btn>
                    <v-tooltip bottom>
                        <template v-slot:activator="{on,attrs}">
                            <v-btn v-bind="attrs" v-on="on">
                                <v-icon icon="mdi-clipboard-edit"></v-icon>
                                Curriculo
                           </v-btn> 
                        </template>
                        <span>Teste</span>
                    </v-tooltip>
            </v-toolbar-items>
            <v-menu class="hidden-md-and-up">
                <v-toolbar-side-icon ></v-toolbar-side-icon>
                <v-list>
                    <v-list-tile-content v-for="item in menu" :key="item.icon">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-tile-content>
                </v-list>
            </v-menu>
        
        </v-toolbar>

    </nav>
</template>
<script>
export default{
    name : 'navBar',
    data(){ 
        
        return{
            menu:[
                {icon: "Home",title:"Teste"}
            ]
        };
    },
    methods:{
        menuItems(){
            return this.menu;
        }
    },
};
</script>
<style>

</style>


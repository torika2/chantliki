<template>
    <div class="position-relative">
        <div
            v-if="checkIfLogged()"
            class="position-absolute text-white bg-image d-none d-sm-none d-md-none d-lg-block"
        ></div>
        <div
            v-if="checkIfLogged()"
            class="position-absolute text-white bg-image2 d-block d-sm-block d-md-block d-lg-none"
        ></div>
        <div class="container pt-5" v-if="checkIfLogged()">
            <my-header></my-header>
        </div>
        <router-view/>
    </div>
</template>
<script>
import MyHeader from "@/components/myHeader.vue";
export default {
    components: {MyHeader},
    data() {
        return {
            banned: [
                'userDashboard'
            ]
        }
    },
    methods: {
        checkIfLogged() {
            let check = false
            this.banned.map((item) => {
                check = this.$route.name !== item
            })
            return check
        }
    },
}
</script>
<style>
@font-face {
    font-family: 'LatoBoldItalic';
    src: url('../public/fonts/Lato-BlackItalic.ttf') format('truetype');
}
#app {
    font-family: LatoBoldItalic, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100vh;
}
body {
    background-color: black !important;
}
</style>

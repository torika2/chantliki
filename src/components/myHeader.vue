<template>
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
        <nav class="navbar navbar-dark bg-dark">
            <div class="d-flex w-100">
                <button
                    @click="clicked = !clicked"
                    type="button"
                    class="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div v-if="!clicked" class="row w-100 ps-4 align-items-center m-0">
                    <div
                        :class="{
                            'col-md-2':search.length < 1,
                            'col-lg-4':search.length > 0,
                        }"
                        class="position-relative d-flex align-items-center"
                    >
                        <input
                            type="search"
                            :class="{
                                'ps-4':search.length < 1,
                                'ps-5':search.length > 0
                            }"
                            @input="onSearch"
                            class="form-control text-white rounded-3 bg-transparent"
                            style="z-index: 1;"
                        >
                        <div
                            class="col-md-2 position-absolute rounded d-flex"
                            style="height: 40px;left: 20px;z-index: 0;"
                        >
                            <div
                                class="d-flex align-items-center"
                            >
                                <img src="@/../public/images/lol.png" height="15">
                            </div>
                            <div
                                v-if="search.length < 1"
                                class="d-flex ps-2 align-items-center"
                            >
                                <i class="text-white fw-bold bi bi-search"></i>
                            </div>
                            <div
                                v-if="search.length < 1"
                                class="text-white ps-2 d-flex align-items-center"
                            >
                                Search
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-md-2 text-white"
                        v-for="(link ,l_index) in links"
                        :key="l_index+link.to"
                    >
                        <router-link
                            class="text-white text-decoration-none"
                            v-text="link.content"
                            :to="link.to"
                        ></router-link>
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li
                            class="nav-item"
                            v-for="(link ,l_index) in links"
                            :key="l_index+link.to"
                        >
                            <router-link
                                class="text-white text-decoration-none"
                                v-text="link.content"
                                :to="link.to"
                            ></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search:'',
            clicked:false,
            links: [
                {
                    to: '/',
                    content: 'Home',
                },
                {
                    to: '/insights-stats',
                    content: 'Insights Stats',
                },
                {
                    to: '/stats',
                    content: 'Stats',
                },
            ],
        }
    },
    methods:{
        
    },
}
</script>
<style>
.navbar-dark {
    background-color: transparent !important;
}
</style>
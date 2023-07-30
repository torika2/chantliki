<template>
    <div class="pt-5">
        <div class="bg-transparent container">
            <div class="d-flex flex-column justify-content-between align-items-center align-items-sm-center align-items-md-start">
                <div class="pt-5 mt-5">
                    <img src="@/../public/images/logo.svg" style="width:25vw;">
                </div>
                <div class="text-white pt-5 mt-5">
                    <h2>
                        “Anything worth doing is worth doing right” {{search?'yveriki':'chuchuriki'}}
                    </h2>
                </div>
                <div class="text-white pt-4 mt-4 d-flex align-items-center">
                    <div>
                        <i class="bi bi-circle-fill"></i>
                    </div>
                    <div class="ps-4">
                        <i class="bi bi-circle"></i>
                    </div>
                    <div class="ps-4">
                        <i class="bi bi-circle"></i>
                    </div>
                </div>
                <div class="row align-items-center w-100 pt-5 mt-5">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 cursor-pointer text-uppercase">
                        <div class="bg-purple p-3 pt-2 pb-2 text-white">
                            <router-link
                                class="text-white text-decoration-none"
                                to="/"
                            >
                                read me
                            </router-link>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 cursor-pointer text-uppercase mt-3 mt-sm-3 mt-md-0">
                        <router-link
                            class="text-white text-decoration-none"
                            to="/sign-in"
                        >
                            <div class="bg-purple p-3 pt-2 pb-2">
                                    sign in
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style>
body {
    overflow: hidden;
}
.bg-purple{
    background: #8074d8;
    border-radius: 20px;
}
.cursor-pointer{
    cursor: pointer;
}
.bg-image{
    background-image: url("/public/images/whole.png");
    background-size: fill;
    background-position:center;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    opacity: 0.8;
    top: 0px;
    right: -225px;
}
.bg-image2{
    background-image: url("/public/images/whole.png");
    background-size: fill;
    background-position:center;
    height: 100vh;
    width: 100vw;
    z-index: -3;
    opacity: 0.8;
    top: 0px;
    right: 0px;
}
</style>

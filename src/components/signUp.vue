<template>
    <div class="p-2 sign-up container mt-4 text-white rounded-3 bg-black w-100">
        <div class="mt-5">
            <h2>Sign up</h2>
        </div>
        <form @submit.prevent="submit = !submit;signUp()" class="d-flex flex-column justify-content-center">
            <div class="mt-5">
                <div>
                    <h6>Username</h6>
                </div>
                <div class="mt-2 d-flex justify-content-center">
                    <input
                        v-model="username"
                        placeholder="Input your username"
                        type="text"
                        class="text-center text-black form-control w-25"
                    >
                </div>
            </div>
            <div class="mt-5">
                <div>
                    <h6>Email</h6>
                </div>
                <div class="mt-2 d-flex justify-content-center">
                    <input
                        v-model="email"
                        placeholder="Input your email"
                        type="email"
                        class="text-center text-black form-control w-25"
                    >
                </div>
            </div>
            <div class="mt-4">
                <div>
                    <h6>Password</h6>
                </div>
                <div class="mt-2 d-flex justify-content-center">
                    <input
                        v-model="password"
                        placeholder="Input your password"
                        type="password"
                        class="text-center text-black form-control w-25"
                    >
                </div>
            </div>
            <div class="mt-4">
                <div>
                    <h6>Password repeat</h6>
                </div>
                <div class="mt-2 d-flex justify-content-center">
                    <input
                        v-model="password_r"
                        placeholder="Repeat password"
                        type="password"
                        class="text-center text-black form-control w-25"
                    >
                </div>
            </div>
            <div class="mt-4 d-flex justify-content-center">
                <button class="cursor-pointer text-white mt-2 w-25 text-decoration-none p-3 pt-2 pb-2 button text-uppercase">
                    sign up
                </button>
            </div>
            <div class="mt-5 d-flex text-white justify-content-center">
                Already have an account?
            </div>
        </form>
        <div class="mt-1 d-flex justify-content-center">
            <button @click="$router.push('/sign-in')" class="cursor-pointer text-white mt-2 w-25 text-decoration-none p-3 pt-2 pb-2 button text-uppercase">
                Go on
            </button>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            username:'',
            email:'',
            password:'',
            password_r:'',
            submit:false,
        }
    },
    methods:{
        signUp(){
            if(this.submit){
                if(this.username.length > 0 && this.email.length > 0 && this.password.length > 0){
                    if(this.password === this.password_r){
                        this.$router.push('dashboard')
                    }else{
                        alert('Passwords does not match!')
                    }
                }else{
                    alert('Fill inputs correctly!')
                }
            }
        },
    },
    mounted(){
        this.signUp()
    }
}
</script>
<style>
.sign-up{
    background: linear-gradient(-50deg, rgb(49, 6, 98, 0.5),rgba(0, 0, 0, 0.5) 95%);
    height: 84vh!important;
}
.sign-up input{
    border-radius: 20px;
    background: #c4c4c4;
}
.sign-up .button{
    border-radius: 20px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgb(60, 3, 123, 0.5) 95%)!important;
}
.sign-up input, .sign-up button{
    width: 25vw;
}
@media screen and (max-width: 1148px) {
    .sign-up input, .sign-up button{
        width: 40vw;
    }
}
@media screen and (max-width: 948px) {
    .sign-up input, .sign-up button{
        width: 50vw;
    }
}
</style>
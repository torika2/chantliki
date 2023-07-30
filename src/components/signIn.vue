<template>
    <div class="p-2 sign-in mt-4 text-white rounded-3 bg-black w-100">
        <div class="mt-5">
            <h2>Sign in</h2>
        </div>
        <form @submit.prevent="submit = !submit;signIn()" class="d-flex flex-column justify-content-center">
            <div class="mt-5">
                <div>
                    <h6>Email</h6>
                </div>
                <div class="mt-2 d-flex justify-content-center">
                    <input
                        v-model="email"
                        placeholder="Input your email"
                        type="email"
                        class="text-center text-black form-control"
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
                        class="text-center text-black form-control"
                    >
                </div>
            </div>
            <div class="mt-4 d-flex justify-content-center">
                <button class="cursor-pointer text-white mt-2 text-decoration-none p-3 pt-2 pb-2 button text-uppercase">
                    sign in
                </button>
            </div>
            <div class="mt-5 d-flex text-white justify-content-center">
                Don't have an account?
            </div>
        </form>
        <div class="mt-1 d-flex justify-content-center">
            <button @click="$router.push('/sign-up')" class="cursor-pointer text-white mt-2 text-decoration-none p-3 pt-2 pb-2 button text-uppercase">
                Create new account
            </button>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            email:'',
            password:'',
            submit:false,
        }
    },
    methods:{
        signIn(){
            if(this.email.length > 0 && this.password.length > 0){
                this.$router.push('dashboard')
            }else{
                if(this.submit){
                    alert('Fill inputs correctly!')
                }
            }
        },
    },
    mounted(){
        this.signIn()
    }
}
</script>
<style>
.sign-in{
    background: linear-gradient(-50deg, rgb(49, 6, 98, 0.5),rgba(0, 0, 0, 0.5) 95%);
    height: 84vh!important;
}
.sign-in input{
    border-radius: 20px;
    background: #c4c4c4;
}
.sign-in .button{
    border-radius: 20px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgb(60, 3, 123, 0.5) 95%)!important;
}
.sign-in input, .sign-in button{
    width: 25vw;
}
@media screen and (max-width: 1148px) {
    .sign-in input, .sign-in button{
        width: 40vw;
    }
}
@media screen and (max-width: 948px) {
    .sign-in input, .sign-in button{
        width: 50vw;
    }
}
</style>
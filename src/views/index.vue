<template>
    <div id="content">
        <section class="logo-header">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12 col-md-12 text-center header-content">
                        <img src="https://i.imgur.com/A0t1a3D.png" class="img-fluid logo" alt="logo">
                        <h4>{{ gt_internet_status.text }}</h4>
                        <h4>Counter: {{ counter }}</h4>
                        <p>We offer a huge collection of simple, beautiful and ready to use blocks. All blocks can be downloaded free of charge from learnwd.com</p>
                        <p>
                        <a class="btn btn-primary rounded" @click="navigate()">Let's Go</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import DixeService from '@/services/dexie.service';
import ShareService from '@/services/share.service';
import { mapGetters } from 'vuex'

let db_service = new DixeService({ name : "An", company : "polaris" });
let share_service = new ShareService()

export default {
    methods: {
        navigate() {
            this.$router.push('/user');
        },
        checkInternetConnection() {
            let store = this.$store;
            window.addEventListener('online', function(event) {
                store.dispatch('updateInternetStatus', {
                    status: true,
                    text: share_service.handleConnectionChange(event)
                });
            });
            window.addEventListener('offline', function(event) {
                store.dispatch('updateInternetStatus', {
                    status: false,
                    text: share_service.handleConnectionChange(event)
                });
            });
        },
        countUp () {
            this.counter += 1;
            if(window.navigator.onLine) {
                console.log('online: call api update database');
            }else {
                console.log('oflline: do notthing');
            }
        }
    },
    data() {return {
        counter: 0
    }},
    mounted() {

    },
    created() {
        this.checkInternetConnection();
        let result = this.$crontab.addJob({
            name: 'counter',
            interval: {
                seconds: '/10',
            },
            job: this.countUp
        })
    },
    computed: {
        ...mapGetters([
        'gt_internet_status'
        ])
    }
}

</script>

<style scoped>
    #content {
        color: burlywood;
        padding: 10px
    }
    button {
        border: none;
        background: rgba(91, 174, 223, 0.933);
        color: #ffffff;
        padding: 10px;
        border-radius: 7px;
        font-size: 18px;
    }
    /*ADD THEME */
    .logo-header {
	background: linear-gradient(rgba(62, 63, 64, 0.6), rgba(62, 63, 64, 0.6)), url("https://i.imgur.com/FVieG2F.png");
	background-size: cover;
	background-position: center bottom;
	color: #fff;
	font-family: 'Nunito', sans-serif;
	padding-top: 150px;
	padding-bottom: 100px;
    }

    .logo-header h1 {
        font-size: 3rem;
        font-weight: 300;
        margin: 0 auto 0.2em auto;
    }

    .logo-header p {
        font-size: 1.15rem;
        width: 80%;
        margin: 0 auto 2em auto;
    }

    .logo-header .logo {
        margin: 0 auto 1em auto;
    }

    .logo-header .btn {
        padding: 10px 26px;
        background-color: #313131;
        color: #FFF;
        display: inline-block;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        text-decoration: none;
        border: solid 2px #313131;
        border-radius: 2px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
    }

    .logo-header .btn:hover {
        color: #FFF;
        background-color: #1f69ff;
        border-color: #1f69ff;
    }

    @media (min-width: 992px) {
        .logo-header {
            height: 100vh;
            padding-top: 0;
            padding-bottom: 0;
        }
        .logo-header h1 {
            font-size: 4rem;
        }
        .logo-header p {
            width: 60%;
        }
    }

    @media (max-width: 480px) {
        .logo-header h1 {
            font-size: 2.4rem;
        }
    }
</style>
<template>
    <div>
        <h2 v-if="isEditUser">Edit User</h2>
        <h2 v-else>Create User</h2>
        <div class="create-user">
            <form action="" @submit="submit($event)">
                <label for="fname">First Name</label>
                <input v-model="user.first_name" type="text" id="fname" name="firstname" placeholder="Your name..">

                <label for="lname">Last Name</label>
                <input v-model="user.last_name" type="text" id="lname" name="lastname" placeholder="Your last name..">

                <label for="country">Country</label>
                <select v-model="user.country" id="country" name="country">
                <option value="hochiminh">Hồ Chí Minh</option>
                <option value="danang">Đà Nẵng</option>
                <option value="hanoi">Hà Nội</option>
                <option value="vungtau">Vũng Tàu</option>
                </select>
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'user-create',
    data(){
        if(this.$store.state.userSelected) {
            let item = this.$store.state.userSelected;
            return {
                isEditUser: true,
                user: {...item}
            }
        }
        return {
            isEditUser: false,
            user:{
                first_name:'',
                last_name:'',
                country:'',
            }
        }
    },
    components: {
    },
    methods: {
        submit(event) {
            event.preventDefault();  
            var payload = this.user;
            if(this.isEditUser) {
                this.$store.dispatch('editUser', this.user);
            } else {
                if(this.user.first_name) {
                    this.$store.dispatch('createUser', this.user);
                }
            }
            this.$router.push('/user');
        }
    }
}
</script>

<style scoped>
    h2 {
        padding-left: 20px;
    }
    button {
        border: none;
        background: rgba(91, 174, 223, 0.933);
        color: #ffffff;
        padding: 10px;
        border-radius: 7px;
        margin-left: 10px;
        margin-bottom: 10px;
        font-size: 18px;
    }
    .create-user {
        border-radius: 5px;
        padding: 20px;
        text-align: start;
    }

    input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }

    input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        }
</style>
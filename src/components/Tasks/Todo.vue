<template>
    <div>
        <span><slot>Child data is: {{inputData}}</slot></span>
        <input type="text" v-model="inputData" @keyup="$emit('update',inputData);" />
    </div>
</template>
<script>
    export default {
        name: 'todoTask',
        props: {
            inputData: String
        },
        methods: {
            clickedToMarkTaskAsDone: function () {
                this.$emit('clickedToMarkTaskAsDone');
            }
        }
    }
</script>
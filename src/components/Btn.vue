<template>
    <div>
        {{name}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:''
        }
    },
    created(){
    //    this.name=this.$route.params.name
        this.name=this.$route.query.name
        console.log(this.$route.query.name)
    }
}
</script>


<template>
    <div>
       <elitem v-for="(item, index) in ShowList" :key="item.id" :Option="item" :index="index"></elitem>
    </div>
</template>
<script>

import elitem from "../components/el_item/el_index.vue";
export default {
    computed: {
        ShowList: {
            get() {
                return this.$store.state.ShowList;
            },
        }
    },
    components: {
        elitem
    },
}
</script>
<style scoped>

</style>

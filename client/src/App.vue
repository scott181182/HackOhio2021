<template>
    <VeevaNav v-if="site === 'veeva'"/>
    <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import VeevaNav from "./components/VeevaNav.vue";



@Options({
    components: { VeevaNav }
})
export default class App extends Vue
{
    public get site(): "veeva" | "root" { return this.$route.path?.startsWith("/veeva") ? "veeva" : "root"; }
}
</script>

<style lang="scss">

</style>

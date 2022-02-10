<template>
    <v-layout row wrap>
        <panel v-for="stock in stocks" :key="stock.id"
                :class-card="'blue darken-3 white--text'"
                :class-button="'blue darken-3 white--text'"
                :label-action="'Vender'"
                :stock="stock"
               :description="true"
               @buyOrSell="sellStock"
        ></panel>
    </v-layout>
</template>

<script>
import Panel from "@/components/Panel";

export default {
    name: "Portfolio",
    components: {Panel},
    computed:{
        stocks(){
            return this.$store.getters.stockPortfolio
        }
    },
    methods:{
        sellStock(obj) {
            const order = {
                stockId: obj.stock.id,
                stockPrice: obj.stock.price,
                quantity: obj.quantity
            }
            this.$store.dispatch('sellStock', order)
        }
    }
}
</script>

<style scoped>

</style>
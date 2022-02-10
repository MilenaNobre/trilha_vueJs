<template>
        <panel
            :class-card="'green darken-3 white--text'"
            :class-button="'green darken-3 white--text'"
            :label-action="'Comprar'"
            :stock="stock"
            :description="false"
            @buyOrSell="buyStock"
        ></panel>
</template>

<script>
import Panel from "@/components/Panel";

export default {
    name: "Stock",
    components: {Panel},
    props: {
        stock: Object
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        },
    },
    methods: {
        buyStock(obj) {
            const order = {
                stockId: obj.stock.id,
                stockPrice: obj.stock.price,
                quantity: obj.quantity
            }

            this.$store.dispatch('buyStock', order)
        }
    }
}
</script>

<style scoped>

</style>
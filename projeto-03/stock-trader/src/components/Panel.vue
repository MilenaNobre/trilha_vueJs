<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card :class="classCard">
            <v-card-title class="headline">
                <strong>{{ stock.name }}
                    <small v-if="description ">(Preço: {{ stock.price  | currency}} | Qtde: {{ stock.quantity }})</small>
                    <small v-else >(Preço: {{ stock.price | currency }} )</small>
                </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" v-model.number="quantity"
                :error="validate || quantity < 0 || !Number.isInteger(quantity)" />
                <v-btn class="green darken-3 white--text" @click="action"
                       :disabled="validate || quantity <= 0 || !Number.isInteger(quantity)">{{ labelAction }}
                </v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    name: "Panel",
    props: {
        stock: Object,
        classCard: String,
        classButton: String,
        labelAction: String,
        description: Boolean
    },
    data() {
        return {
            quantity: 0
        }
    },
    computed:{
        insufficientFunds() {
            return this.quantity * this.stock.price > this.$store.getters.funds
        },
        insufficientQtds() {
            return this.quantity > this.stock.quantity
        },
        validate(){
            return this.labelAction == 'Comprar' ? this.insufficientFunds : this.insufficientQtds
        }
    },
    methods: {
        action() {
            const args = {
                stock: this.stock,
                quantity: this.quantity
            }
            this.$emit('buyOrSell', args)
            this.quantity = 0
        }
    }
}
</script>

<style scoped>

</style>
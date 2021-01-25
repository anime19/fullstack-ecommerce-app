<template>
   <div v-if="products.length >0">
    <ProductsListItem v-for="product in products" v-on:remove-from-cart="$emit('remove-from-cart',$event)" v-bind:key="product.id" :product="product" />
   </div>

   <p v-else>Cart is empty</p>
</template>

<script>
import ProductsListItem from './ProductsListItem.vue';
export default {
    name:'ProductsList',
    props:['products'],
    components: {
         ProductsListItem,
    }
}
</script>

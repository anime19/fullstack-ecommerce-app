<template>
    <div class="product-container">
        <img class="product-image" v-bind:src="product.imageUrl" />
        <div class="details-wrap">
          <h1>{{product.name}}</h1>
           <p>₹{{ product.price }}</p>
        </div>
        <button class="remove-button" v-on:click="$emit('remove-from-cart',product.id)">Remove Item</button>
      </div>
</template>

<script>
export default {
    name:'ProductsListItem',
    props: ['product'],
}
</script>

<style scoped>
 .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }

</style>
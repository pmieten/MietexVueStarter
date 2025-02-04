<template>
  <div class="card">
    <DataTable :value="products" table-style="min-width: 50rem">
      <Column field="code" header="Code" />
      <Column field="name" header="Name" />
      <Column field="category" header="Category" />
      <Column field="quantity" header="Quantity" />
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5,
},
{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5,
}])
</script>

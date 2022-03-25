<template>
  <h1>Pedidos</h1>
  <Orders/>
</template>

<script>
// @ is an alias to /src
import Orders from '@/components/OrdenesPastel.vue'

export default {
  name: 'HomeView',
  components: {
    Orders
  }
}
</script>

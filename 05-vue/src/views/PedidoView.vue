<template>
  <h1>Haga su pedido</h1>
  <FormPedido/>
</template>

<script>
// @ is an alias to /src
import FormPedido from '@/components/FormPedido.vue'

export default {
  name: 'PedidoView',
  components: {
    FormPedido
  }
}
</script>

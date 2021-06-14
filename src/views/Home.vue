<template>
  <v-container class="full-height">
    <v-row align="center">
      <Board />
    </v-row>
  </v-container>
</template>

<script>
import Board from '../components/Board.vue'

export default {
  name: 'Home',
  components: {
    Board,
  },
}
</script>

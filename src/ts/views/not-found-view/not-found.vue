<template>
  <main class="main not-found__main">
    <section class="not-found__message">

      <h1 v-if="!showButton">404</h1>
      <button 
        class="button not-found__button" @click="backToHome"
      v-else>
        Retour à l'accueil
      </button>

    </section>

  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound',
  data() {
    return {
      message: 'Hello',
      showButton: false
    };
  },
  methods: {
    backToHome(event: any) {
      window.location.hash=""
    },
   
  },
  mounted() {
    console.log('🔵 on not-found page');
    setTimeout(() => {
      this.showButton = true;
    }, 1000);
  }
});
</script>

<style lang="scss">
@use "../../../sass/abstracts/_extensions.scss";
@use "../../../sass/abstracts/_mixins.scss";


.not-found {

  &__main {
    @extend %match-up-bg;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: color;

    h1 {
      font-size: 40px;
      color: rgb(255, 123, 123);
      @include mixins.bounce-up-and-down();
    }
  }

  &__button {
    align-self: center;
  }

  &__message {
    display: flex;
    flex-direction: column;
  }
}
</style>

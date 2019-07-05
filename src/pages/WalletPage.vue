<template>
  <section class="page wallet">
    <div class="inner">
      <div class="header">
        <h2>Wallet</h2>
        <button class="btn btn-primary">Log Out</button>
      </div>
      <main>
        <router-view />
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WalletPage',

  data () {
    return {

    }
  },
}
</script>

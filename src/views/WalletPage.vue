<template>
  <section class="page wallet">
    <div class="inner">
      <div class="header">
        <h2>Wallet</h2>
        <div class="btn">
          <button
            @click="$emit('wallet:logout')"
            class="btn btn-primary"
          >Log Out</button>
        </div>
      </div>
      <main>
        <div class="wallet">
          <div class="address">
            <div class="icon">
              <i class="fas fa-wallet"></i>
            </div>
            <div class="content">
              <div class="name">Wallet Address</div>
              <div class="value">{{ address }}<span class="copy"></span></div>
            </div>
          </div>
          <div class="actions">
            <div class="balance">
              <div class="icon">
                <i class="fas fa-coins"></i>
              </div>
              <div class="content">
                <div class="name">Balance</div>
                <div class="value">{{ balance }}</div>
              </div>
              <div class="check">
                <div class="name">Check</div>
                <div class="icon">
                  <i class="fas fa-sync-alt"></i>
                </div>
              </div>
            </div>
            <div class="send">
              <div class="icon">
                <i class="fas fa-paper-plane"></i>
              </div>
              <div class="content">
                <div class="name">Send</div>
              </div>
            </div>
            <div class="request">
              <div class="icon">
                <i class="fas fa-plus"></i>
              </div>
              <div class="content">
                <div class="name">Request Free Grams</div>
              </div>
            </div>
          </div>
          <div class="message"></div>
        </div>
        <router-view v-bind="$props" />
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WalletPage',

  props: {
    lt: { type: String, default: () => '' },
    hash: { type: String, default: () => '' },
    chain: { type: String, default: () => '' },
    seqno: { type: String, default: () => '' },
    short: { type: String, default: () => '' },
    value: { type: String, default: () => '' },
    address: { type: String, default: () => '' },
    regdata: { type: String, default: () => '' }
  },

  computed: {
    balance () {
      return this.value / 1000000000
    }
  },

  mounted () {
    if (!this.address) {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="stylus">
  .inner {
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }
  .header {
    /*order: 0;*/
    display: flex;
    justify-content: space-around;
  }
  .address {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }
  .actions {
    flex-direction: row;
    display: flex;
    justify-content: space-around;
  }
</style>

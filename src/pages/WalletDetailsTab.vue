<template>
  <div class="tab details">
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
    <div class="history">
      <div class="title"></div>
      <div class="head">
        <div class="date col"></div>
        <div class="type col"></div>
        <div class="from col"></div>
        <div class="to col"></div>
        <div class="amount col"></div>
      </div>
      <div class="body">
        <div class="row">
          <div class="date col"></div>
          <div class="type col"></div>
          <div class="from col"></div>
          <div class="to col"></div>
          <div class="amount col"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalletDetailsTab',

  props: {
    lt: { type: String, default: () => '' },
    hash: { type: String, default: () => '' },
    chain: { type: String, default: () => '' },
    seqno: { type: String, default: () => '' },
    short: { type: String, default: () => '' },
    value: { type: String, default: () => '' },
    address: { type: String, default: () => '' },
    regdata: { type: String, default: () => '' },
  },

  computed: {
    balance () {
      return this.value / 1000000000
    },
  },

  mounted () {
    if (!this.address) {
      this.$router.push('/login')
    }
  },
}
</script>

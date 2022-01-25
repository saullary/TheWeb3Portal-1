<style lang="scss">
.e-footer {
  h3 {
    font-size: 15px;
  }
}
.bg-t1 {
  background: linear-gradient(180deg, #edfff3, #e1f2ff, #ffffff);
}
@media screen and (max-width: 959px) {
  .e-footer .col-12 {
    text-align: center;
  }
}
</style>

<template>
  <div class="bdt-1 wrap-1 e-footer">
    <div class="con-1">
      <v-row>
        <v-col cols="12" md="4">
          <h3>© 2021-2022 web3 portal</h3>
          <div class="mt-4 fz-14 gray">
            <span>Powered by </span>
            <a href="https://www.4everland.org" target="_blank">4EVERLAND</a>
            & <a href="https://ipfs.io/" target="_blank">IPFS</a>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="ta-c">
          <h3>Join the web3 portal community</h3>
          <div class="mt-1">
            <v-menu
              open-on-hover
              top
              offset-y
              v-for="(it, i) in links"
              :key="i"
            >
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  :color="it.color"
                  x-small
                  :href="it.href"
                  target="_blank"
                  @click="onClick(it)"
                  class="mt-2"
                  rounded
                  :class="
                    i == links.length - 1 ? '' : asMobile ? 'mr-6' : 'mr-6'
                  "
                  style="height: 30px"
                >
                  <img v-if="it.img" :src="it.img" height="18" />
                  <v-icon v-else size="16" color="white">{{ it.icon }}</v-icon>
                </v-btn>
              </template>
              <v-list v-if="it.subs" max-height="300" dense>
                <v-list-item
                  link
                  :href="row.link"
                  target="_blank"
                  v-for="(row, j) in it.subs"
                  :key="j"
                >
                  <v-list-item-title>
                    {{ row.en }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>

        <v-col cols="12" md="4" class="ta-r" max-width="240px">
          <div class="mt-2">
            <v-btn text @click="showDonate = true">
              <img src="img/donate.svg" class="ml-auto" style="width: 25px" />
              <h3 class="ml-2 mt-1">Donate</h3>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>

    <v-dialog v-model="showAbout" max-width="600">
      <div class="pa-8 bg-t1">
        <h2 class="ta-c lh-1 mb-3">About</h2>
        <div class="fz-14 mb-6 gray-3">
          Learn more about the Web3 and Discover Web3. An open-source portal
          built for everyone. All included sites are based on IPFS decentralized
          deployment and will never outage. We are trying to create a more
          convenient and faster decentralized search portal in the future of the
          internet. If you have any problems, welcome to join our
          <a href="https://discord.gg/UQg3VZ2FpB" target="_blank">Discord</a>
        </div>
      </div>
    </v-dialog>
    <v-dialog v-model="showDonate" eager max-width="600">
      <div class="pa-8 bg-t1">
        <h2 class="ta-c lh-1 mb-3">Donate</h2>
        <div class="fz-14 mb-6 gray-3">
          Thank you for your generous supports of the Web3 Portal. We are
          thrilled to have your support. Since we are a small and independent
          team, your support means a lot to us. Through your donation, we have
          been able to accomplish the dream of a more complete web3 Internet
          world and continue working towards creating a decentralized search
          portal. You truly make the difference for us, and we are extremely
          grateful!
          <div class="ta-r mt-2">--The Web3 Portal team</div>
        </div>
        <v-tabs>
          <v-tab>Donate ETH</v-tab>
          <v-tab>USDT</v-tab>
          <v-tab>BNB</v-tab>
        </v-tabs>
        <div class="pa-6 ta-c">
          <img
            class="mt-2"
            src="https://web3.4everland.store/img/donate-qr.png"
            height="130"
          />
        </div>
        <div class="mt-3">
          <h3>Donation Address</h3>
          <div class="d-flex al-c mt-1">
            <span class="fz-13 mr-1"
              >0x46101fCb41AB3E63fF9532CCD7e991eB43093994</span
            >
            <v-btn
              icon
              small
              v-clipboard="'0x46101fCb41AB3E63fF9532CCD7e991eB43093994'"
              @success="$toast('Copied successfully')"
            >
              <v-icon size="15" class="ml-auto">mdi-content-copy</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    asMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  data() {
    return {
      showDonate: false,
      showAbout: false,
      links: [
        {
          icon: "mdi-github",
          href: "https://github.com/TheWeb3DAO/TheWeb3Portal",
          color: "#4b4b4b",
        },
        {
          icon: "mdi-twitter",
          href: "https://twitter.com/Web3_Portal",
          color: "#60aadb",
        },
        // {
        //   icon: "mdi-reddit",
        //   href: "https://www.reddit.com/r/GXS/",
        //   color: "#eb443b",
        // },
        {
          icon: "mdi-discord",
          href: "https://discord.gg/UQg3VZ2FpB",
          color: "#714bdf",
        },
        {
          icon: "mdi-information-outline",
          type: "about",
          color: "#849BB4",
        },
      ],
    };
  },
  methods: {
    onClick(it) {
      console.log(it);
      if (it.type == "about") {
        this.showAbout = true;
      }
    },
  },
};
</script>

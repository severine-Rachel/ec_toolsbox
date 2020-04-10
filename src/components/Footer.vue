<template>
  <div id="footer">
    <img class="logo" src="../assets/Logo5.png" atl="logo" />
    <div class="row">
      <div class="col" id="network">
        Retrouvez-moi aussi sur:<br />

        <a href="https://fr.linkedin.com/in/peggy-raffy-hideux" target="_blank">
          <img
            class="logo-network"
            src="../assets/Logo_Linkendin.png"
            atl="logo-linkenin"
          />
        </a>
        <a href="http://fr.viadeo.com/fr/profile/raffy.peggy" target="_blank">
          <img
            class="logo-network"
            src="../assets/Logo_Viadeo.png"
            atl="logo-viadeo"
          />
          <br />
          <a class="link-footer" href=" https://www.aeciut.fr/"
            >Association des Enseignants de Communication en IUT</a
          >
        </a>
      </div>

      <div class="col" id="aboutme">
        <br />
        Contact:
        <br />
        ©Peggy Raffy-Hideux
        <br />
        <b-icon icon="envelope"></b-icon> peggy.raffy-hideux@univ-angers.fr
        <br />
        <b-icon icon="geo-alt"></b-icon> Angers
        <br />
        <a
          class="link-footer"
          href="https://www.univ-angers.fr/fr/acces-directs/annuaire-2/r/a/uduser-p-raffy-fr.html"
          target="_blank"
          >www.univ-angers.fr</a
        >
      </div>

      <div class="col" id="justice">
        <a class="link-footer" href="/LegalNotice"><router-link to="/LegalNotice">Mention légale </router-link></a><br />
        Le contenu du site est soumis à des droits d'auteur.
        <br />
        <a class="link-footer" href="/confidentiality">Politique de confidentialité </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#footer {
  background: #2694cd;
  color: white;
  font-size: 9pt;
  text-align: center;
  margin-top:10vh;
}
.logo {
  height: 10vh;
}

.logo-network {
  height: 5vh;
  margin: 0.5vw;
}
.link-footer {
  color: white !important;
}

.row {
  margin-right: 0 !important;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BIcon, BIconEnvelope, BIconGeoAlt } from "bootstrap-vue";

@Component({
  components: {
    BIcon,
    BIconEnvelope,
    BIconGeoAlt
  }
})
export default class Footer extends Vue {
  // export default==public class
}
</script>

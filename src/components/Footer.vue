<template>
  <div id="footer">
    <div id="prefooter">
      <b-row>
        <b-col id="footerlogo" cols="3">
          <img id="EClogo" src="../assets/basic-Graph/Logo3.png" atl="logo" />
          <h5 id="logotitle"> <router-link to="/QuiSuisJe" class="link-footer-writer">L'AUTEURE</router-link></h5>
        </b-col>
        <b-col cols="9">
          <h5 id="aboutweb">CE QUE LE SITE PROPOSE</h5>
          <p id="aboutweb">
            Ce site a été conçu comme une boîte à outils. Vous y trouverez de
            nombreuses ressources en expression et communication : fiches-clés,
            conseils et astuces, vidéos, exemples concrets, etc. qui doivent
            vous permettre de préparer un solide dossier de candidature, de
            concevoir des supports de communication pertinents, d’enrichir vos
            compétences rédactionnelles, d’améliorer votre maîtrise de la langue
            française ou encore d’élargir votre culture générale.
          </p>
        </b-col>
      </b-row>
    </div>
    <b-row id="postfooter">
      <b-col cols="3" id="network">
        <h5 id="postfootertitle">CONTACT</h5>

        <a href="https://fr.linkedin.com/in/peggy-raffy-hideux" target="_blank">
          <img
            class="logo-network"
            src="../assets/basic-Graph/Logo_Linkendin.png"
            atl="logo-linkenin"
          />
        </a>
        <a href="http://fr.viadeo.com/fr/profile/raffy.peggy" target="_blank">
          <img
            class="logo-network"
            src="../assets/basic-Graph/Logo_Viadeo.png"
            atl="logo-viadeo"
          />
        </a>
        <div>
          <b-icon icon="envelope"></b-icon> peggy.raffy-hideux@univ-angers.fr
        </div>
        <div><b-icon icon="geo-alt"></b-icon> Angers</div>
        <div>
          <a
            class="link-footer"
            href="https://www.univ-angers.fr/fr/acces-directs/annuaire-2/r/a/uduser-p-raffy-fr.html"
            target="_blank"
            >www.univ-angers.fr</a
          >
        </div>
        <div>
          <a class="link-footer" href=" https://www.aeciut.fr/"
            >Association des Enseignants de Communication en IUT</a
          >
        </div>
      </b-col>

      <b-col cols="9" id="aboutme">
        <h5 id="sailorfooter"><b-icon icon="list"></b-icon>NAVIGATION</h5>
        <p id="sailorfootertxt">
          <b-icon icon="diamond"></b-icon>
          <router-link to="/CV" class="link-footer"
            > CV</router-link
          >
          /
          <router-link to="/LettreMotivation" class="link-footer"
            >Lettre</router-link
          >
          /
          <router-link to="/Entretien" class="link-footer">
            Entretien
          </router-link>
        </p>
        <p id="sailorfootertxt">
          <b-icon icon="diamond"></b-icon>
          <router-link to="/Definition_Communication" class="link-footer">
            La communication
          </router-link>
          /
          <router-link to="/Ecrit_Pro" class="link-footer">
            Écrits professionnels, académiques et d’invention
          </router-link>
          /
          <router-link to="/Prise_de_Parole" class="link-footer">
            Prise de parole en public
          </router-link>
          /
          <router-link to="/Conduite_Reunion" class="link-footer">
            Conduite de réunion
          </router-link>
        </p>
        <p id="sailorfootertxt">
          <b-icon icon="diamond"></b-icon>
          <router-link to="/Affiche" class="link-footer">
            Affiche
          </router-link>
          /
          <router-link to="/Diaporama" class="link-footer">
            Diaporama
          </router-link>
          /
          <router-link to="/Infographie" class="link-footer">
            Infographie
          </router-link>
          /
          <router-link to="/Audiovisuel" class="link-footer">
            Audiovisuel
          </router-link>
        </p>
        <p id="sailorfootertxt">
          <b-icon icon="diamond"></b-icon>
          <router-link to="/CultureGenerale" class="link-footer">
            Culture générale
          </router-link>
          /
          <router-link to="/PerformanceArtistique" class="link-footer">
            Performance artistique
          </router-link>
          /
          <router-link to="/PlaisirdeLire" class="link-footer">
            Plaisir de lire
          </router-link>
          /
          <router-link to="/CultureenLigne" class="link-footer">
            Culture en ligne
          </router-link>
        </p>
      </b-col>
    </b-row>
    <b-row id="legalfooter">
      <b-col cols="3">
        <div>©Peggy Raffy-Hideux</div>
      </b-col>
      <b-col cols="3">
        <div>
          Le contenu du site est soumis à des droits d'auteur.
        </div>
      </b-col>
      <b-col cols="3">
        <router-link
          to="/mentions-legales"
          class="link-footer-legal"
          href="/LegalNotice"
          >Mentions légales</router-link
        >
      </b-col>

      <b-col cols="3">
        <router-link
          to="/confidentialite"
          class="link-footer-legal"
          href="/confidentiality"
          >Politique de confidentialité</router-link
        >
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
#footer {
  background: #2694cd;
  color: white;
  font-size: 9pt;
  text-align: center;
  margin-top: 40vh;
}
#prefooter {
  background: #bce8ff;
  padding: 5vh 0;
}
#footerlogo {
  border-right: solid 1px #1d4f8f;
}
#EClogo {
  height: 10vh;
}

#aboutweb {
  text-align: justify;
  margin-left: 5.5%;
}
#postfooter {
  padding: 5vh 0;
}
#postfootertitle {
  color: white;
  padding-top: 1rem;
  margin-bottom: 0;
  text-align: center;
  padding-left: 0;
}
.logo-network {
  height: 3vh;
  margin: 1vh 1vw 2vh 1vw;
  text-align: center;
}
#network {
  border-right: solid 1px #1d4f8f;
}
#sailorfooter {
  color: white;
  padding-top: 1rem;
  text-align: justify;
  margin-left: 5.5%;
}
#sailorfootertxt {
  color: white;
  text-align: justify;
  margin-left: 5.5%;
  margin-bottom: 0.5rem;
}
#legalfooter {
  background-color: #1d4f8f;
  color: #bce8ff;
}
.link-footer {
  color: white !important;
}
.link-footer-legal {
  color: #bce8ff !important;
}
.link-footer-writer{
  color:#2694cd !important;
  
}
.row {
  margin-right: 0 !important;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  BIcon,
  BIconEnvelope,
  BIconGeoAlt,
  BIconList,
  BIconDiamond,
} from "bootstrap-vue";

@Component({
  components: {
    BIcon,
    BIconEnvelope,
    BIconGeoAlt,
    BIconList,
    BIconDiamond,
  },
})
export default class Footer extends Vue {
  // export default==public class
}
</script>

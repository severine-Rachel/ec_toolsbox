<template>
  <div id="Footer">
    <div id="FooterTop">
      <b-row>
        <b-col class="divide-footer" cols="3">
          <img
            class="Logo"
            src="../assets/basic-Graph/Logo3.png"
            atl="Peggy Raffy-Hideux Logo Design"
          />
          <h5>
            <router-link to="/QuiSuisJe" class="link-footer-writer"
              >L'AUTEURE</router-link
            >
          </h5>
        </b-col>
        <b-col cols="9">
          <h5 id="H5WebDescrib">CE QUE LE SITE PROPOSE</h5>
          <p id="WebDescrib">
            À partir de quatre rubriques principales (dossier de candidature,
            communication écrite et orale, communication visuelle, arts et
            culture), Développez vos compétences en expression et communication à
            l’aide de fiches-clés, de conseils, d’astuces, de vidéos de
            professionnels et d’exemples concrets…
          </p>
        </b-col>
      </b-row>
    </div>

    <b-row id="FooterBottom">
      <b-col cols="3" class="divide-footer">
        <h5 id="H5FooterBottom">CONTACT</h5>

        <a
          href="https://fr.linkedin.com/in/peggy-raffy-hideux"
          target="_blank"
          alt="LinkedIn Peggy Raffy-Hideux"
        >
          <img
            class="logo-network"
            src="../assets/basic-Graph/Logo_Linkendin.png"
            atl="logo-linkenin"
          />
        </a>
        <a
          href="http://fr.viadeo.com/fr/profile/raffy.peggy"
          target="_blank"
          alt="Viadeo Peggy Raffy-Hideux"
        >
          <img
            class="logo-network"
            src="../assets/basic-Graph/Logo_Viadeo.png"
            atl="logo-viadeo"
          />
        </a>
        <div><b-icon icon="envelope"></b-icon> raffypeggy@yahoo.fr</div>
        <div>
          peggyraffy@gmail.com
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
          Membre de l'<a class="link-footer" href=" https://www.aeciut.fr/"
            >Association des <br>Enseignants de Communication en IUT</a
          >
        </div>
      </b-col>

      <b-col cols="9" id="aboutme">
        <h5 id="H5FooterNav"><b-icon icon="list"></b-icon>NAVIGATION</h5>
        <p id="FooterNav">
          <b-icon icon="diamond"></b-icon>
          <router-link to="/CV" class="link-footer"> CV</router-link>
          /
          <router-link to="/Lettre_de_Motivation" class="link-footer"
            >Lettre</router-link
          >
          /
          <router-link to="/Entretien" class="link-footer">
            Entretien
          </router-link>
        </p>
        <p id="FooterNav">
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
        <p id="FooterNav">
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
        <p id="FooterNav">
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
    <b-row id="FooterLegal">
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
#Footer {
  font-size: 9pt;
  text-align: center;
  margin-top: 20vh;
}
#FooterTop {
  background: #bce8ff;
  padding: 5vh 0;
}
#FooterBottom {
  padding: 5vh 0;
  background: #2694cd;
  color: white;
}
#FooterLegal {
  background-color: #1d4f8f;
  color: #bce8ff;
}
#ECLogo {
  height: 10vh;
}
#H5WebDescrib {
  text-align: justify;
  margin-left: 5.5%;
  color: #2694cd;
  padding-top: 3%;
}
#WebDescrib {
  text-align: justify;
  margin-left: 5.5%;
}
#H5FooterBottom {
  color: white;
  padding-top: 1rem;
  margin-bottom: 0;
  text-align: center;
  padding-left: 0;
}
#H5FooterNav {
  color: white;
  padding-top: 1rem;
  text-align: justify;
  margin-left: 5.5%;
}
#FooterNav {
  color: white;
  text-align: justify;
  margin-left: 5.5%;
  margin-bottom: 0.5rem;
}

.logo-network {
  height: 3vh;
  margin: 1vh 1vw 2vh 1vw;
  text-align: center;
}
.divide-footer {
  border-right: solid 1px #1d4f8f;
}
.link-footer {
  color: white !important;
}
.link-footer-legal {
  color: #bce8ff !important;
}
.link-footer-writer {
  color: #2694cd !important;
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

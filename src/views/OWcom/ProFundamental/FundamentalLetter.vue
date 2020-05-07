<template>
  <b-row>
    <img
      src="/picture_OWcom/Pro/Letter.png"
      class="interractive"
      alt="Page_De_Garde1"
    />
    <b-button class="date" variant="warning" id="popover-Date"></b-button>
    <b-popover target="popover-Date" triggers="hover" placement="left">
      Lieu, date. Le tout aligné sur la droite
    </b-popover>
    <b-button
      class="adress-exp"
      variant="warning"
      id="popover-Adress-Exp"
    ></b-button>
    <b-popover target="popover-Adress-Exp" triggers="hover" placement="left">
      Adresse expéditeur. Toujours le prénom avant le nom. Numéro de téléphone +
      e-mail professionnel
    </b-popover>
    <b-button class="alinea" id="popover-Alinea"></b-button>
    <b-popover target="popover-Alinea" triggers="hover" placement="right">
      Alinéa au début de chaque paragraphe
    </b-popover>
    <b-button class="adress-dest" id="popover-Adress-Dest"></b-button>
    <b-popover target="popover-Adress-Dest" triggers="hover" placement="left">
      Alignement à gauche. Utiliser un tableau caché
    </b-popover>
    <b-button
      class="adress-dest-2"
      variant="warning"
      id="popover-Adress-Dest2"
    ></b-button>
    <b-popover target="popover-Adress-Dest2" triggers="hover" placement="right">
      Adresse destinataire, on n'indique ni téléphone ni e-mail
    </b-popover>
    <b-button
      class="adress-dest-3"
      variant="warning"
      id="popover-Adress-Dest3"
    ></b-button>
    <b-popover target="popover-Adress-Dest3" triggers="hover" placement="right">
      Espace avant la désignation du destinataire précis. Indiquez le poste de
      votre interlocuteur
    </b-popover>
    <b-button class="object" variant="warning" id="popover-Object"></b-button>
    <b-popover target="popover-Object" triggers="hover" placement="right">
      Objet : un verbe normalisé doit indiquer l'objectif du courier. Ici :
      candidater
    </b-popover>
    <b-button class="fst-3" id="popover-Fst-3"></b-button>
    <b-popover target="popover-Fst-3" triggers="hover" placement="right">
      1er tiers : l'en-tête de la lettre. Eventuellement, ce 1er tiers peut
      englober la formule d'appel
    </b-popover>
    <b-button class="corps" variant="warning" id="popover-Corps"></b-button>
    <b-popover target="popover-Corps" triggers="hover" placement="right">
      Le corps de la lettre doit être décomposé en paragraphes signifiants.
      Privilégier l'interligne entre paragraphe et saut de ligne
    </b-popover>
    <b-button class="scd-3" id="popover-Scd-3"></b-button>

    <b-popover target="popover-Scd-3" triggers="hover" placement="right">
      2e tiers : le corps de la lettre. Le texte doit être justifié
      informatiquement
    </b-popover>
    <b-button class="form" variant="warning" id="popover-Form"></b-button>
    <b-popover target="popover-Form" triggers="hover" placement="right">
      Formule d'appel
    </b-popover>
    <b-button class="disp" variant="warning" id="popover-Disp"></b-button>
    <b-popover target="popover-Disp" triggers="hover" placement="right">
      Indications disponibilités et formule de politesse
    </b-popover>
    <b-button class="sign" variant="warning" id="popover-Sign"></b-button>
    <b-popover target="popover-Sign" triggers="hover" placement="right">
      Signature manuscrite au-dessus de la signature informatique (prévoir la
      place suffisante lors de l'impression papier). Alignement à droite
    </b-popover>

    <b-button class="thr-3" id="popover-Thr-3"></b-button>
    <b-popover target="popover-Thr-3" triggers="hover" placement="right">
      3e tiers : formule de politesse et signature
    </b-popover>
  </b-row>
</template>
<style lang="scss">
.date {
  width: 20px;
  height: 50px;
  opacity: 50%;
  position: relative;
  right: 205px;
  top: 70px;
  z-index: 10;
  display: inline-block;
}
.adress-exp {
  width: 20px;
  height: 100px;
  opacity: 50%;
  position: relative;
  right: 600px;
  top: 90px;
  z-index: 10;
  display: inline-block;
}
.alinea {
  width: 20px;
  height: 50px;
  opacity: 50%;
  position: relative;
  right: 595px;
  top: 330px;
  z-index: 10;
  display: inline-block;
}
.adress-dest {
  width: 20px;
  height: 80px;
  opacity: 50%;
  position: relative;
  right: 380px;
  top: 165px;
  z-index: 10;
  display: inline-block;
}
.adress-dest-2 {
  width: 20px;
  height: 40px;
  opacity: 50%;
  position: relative;
  right: 280px;
  top: 165px;
  z-index: 10;
  display: inline-block;
}
.adress-dest-3 {
  width: 20px;
  height: 40px;
  opacity: 50%;
  position: relative;
  right: 180px;
  top: 205px;
  z-index: 10;
  display: inline-block;
}
.object {
  width: 20px;
  height: 40px;
  opacity: 50%;
  position: relative;
  right: 730px;
  top: 265px;
  z-index: 10;
  display: inline-block;
}
.fst-3 {
  width: 20px;
  height: 260px;
  opacity: 50%;
  position: relative;
  right: 185px;
  top: 50px;
  z-index: 10;
  display: inline-block;
}
.corps {
  width: 20px;
  height: 290px;
  opacity: 50%;
  position: relative;
  right: 240px;
  top: 370px;
  z-index: 10;
  display: inline-block;
}
.scd-3 {
  width: 20px;
  height: 260px;
  opacity: 50%;
  position: relative;
  right: 235px;
  top: 310px;
  z-index: 10;
  display: inline-block;
}
.form {
  width: 20px;
  height: 30px;
  opacity: 50%;
  position: relative;
  right: 710px;
  top: 330px;
  z-index: 10;
  display: inline-block;
}
.disp {
  width: 20px;
  height: 50px;
  opacity: 50%;
  position: relative;
  right: 855px;
  top: 635px;
  z-index: 10;
  display: inline-block;
}
.sign{
    width: 20px;
  height: 60px;
  opacity: 50%;
  position: relative;
  right: 345px;
  top: 750px;
  z-index: 10;
  display: inline-block;
}
.thr-3 {
  width: 20px;
  height: 260px;
  opacity: 50%;
  position: relative;
  right: 335px;
  top: 570px;
  z-index: 10;
  display: inline-block;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BPopover } from "bootstrap-vue";
@Component({
  components: { BPopover },
})
export default class FundamentalLetter extends Vue {}
</script>

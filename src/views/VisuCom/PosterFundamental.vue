<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>LES FONDAMENTAUX</h3>
    <p>
      Le temps de lecture d’une affiche est extrêmement rapide, c’est pourquoi
      elle doit immédiatement accrocher le regard et permettre à l’œil de
      scanner très rapidement les éléments essentiels qui la composent. Le texte
      doit être suffisamment marquant pour « imprimer » le cerveau du récepteur
      et s’ancrer dans sa mémoire.
    </p>
    <p>
        <strong> 
            Les fiches-clés
        </strong>
    </p>
    <Pdf v-bind:galery-pdf="pdfPosterKey"></Pdf>
    <p>
        <strong> 
            L’affiche en 5 étapes :
        </strong>
    </p>
    <p>
        <ol>
            <li>
                Identifier le message en tant que but à atteindre :
            </li>
            <img 
                id="socialpicture" 
                src="picture_VisuCom/schematic/schema_hennerbert.png" 
                alt="Schema_Hennerber<t"
            >
            <p>
                Source : D’après HENNEBERT Jérôme,<i> Communication, 1re et 2e années</i>, Paris, Nathan, 2010, p. 167.
            </p>
            <li>
                Définir sa cible 
                <ul>
                    <li>Quels sont ses besoins ?</li>
                    <li>Ses attentes ?</li>
                    <li>Ses centres d'intérêt ?</li>
                    <li>Par quel focus attirer l'attention (3 secondes) et la retenir (30 secondes) ?</li>
                    <li>Quel niveau de détail d'informations ?</li>
                </ul>
            </li>
            <li>
                Regrouper les matériaux
                <ul>
                    <li>idées d’illustrations qui pourraient coller au sujet, au thème (photos, dessins, cartes, schémas, graphes, tableaux)</li>
                    <li>vérifier la qualité de la résolution, les droits d’auteur, à l’image</li>
                    <li>déterminer les unités linguistiques qui composeront l’affiche : titre, sous-titre, informations essentielles, slogan, etc. Le titre et le slogan doivent interpeller, informer et annoncer sous forme de question, jeu de mots, en exposant un conflit, etc.</li>
                    <li>identifier les codes de présentation propres à chaque domaine</li>
                    <li>réunir logos de la structure émettrice et des partenaires</li>
                </ul>
            </li>
            <li>
                Créer la maquette graphique de l’affiche 
            </li>
               
            <p class="into-list">
                1er parcours de survol qui identifie les zones sur lesquelles revenir de façon plus approfondie :
            </p>
            <img 
                id="socialpicture" 
                src="picture_VisuCom/schematic/schema_hennerbert2.png" 
                alt="Schema_Hennerbert"
            >
            <p>
                Source : D’après HENNEBERT Jérôme, <i>Communication, 1re et 2e années</i>, Paris, Nathan, 2010, p. 163.
            </p>
            <p class="into-list">
                Pour vous aider à choisir les couleurs, utilisez Color scheme designer qui vous orientera sur les compatibilités entre les différents tons qui composeront votre affiche :
            </p>
            <img 
                id="socialpicture" 
                src="picture_VisuCom/schematic/ColorSchemeDesigner.png" 
                alt="ColorSchemeDesigner"
            >
            <p class="into-list">
                Si vous devez coller à une charte graphique (identité visuelle) bien particulière, utilisez l’outil Fastone Capture qui vous permettra de récupérer, à l’aide d’une pipette virtuelle, les coordonnées colométriques d’un ton existant sur n’importe quel support :
            </p>
            <img 
                id="socialpicture" 
                src="picture_VisuCom/schematic/fastone.png" 
                alt="ColorSchemeDesigner"
            >
            <p class="into-list">
                Soyez attentifs à l’impact et à la signification des couleurs :
            </p>
            <img 
                id="socialpicture" 
                src="picture_VisuCom/schematic/ColorPsy.jpg" 
                alt="ColorSchemeDesigner"
            >

            <p class="into-list">
                <strong>
                    <a 
                        href="http://www.surlimage.info/ecrits/couleur.html" 
                        target="_blank" 
                        class="subtitle-link"
                    >
                        De la couleur dans l’image <b-icon icon="box-arrow-right"></b-icon
                        >       
                    </a>
                </strong>
            </p>

            <li>
                Choisir les outils 
            </li>
            <a 
                href="https://inkscape.org/" 
                target="_blank"
            >
                <img 
                    src="https://media.inkscape.org/static/images/inkscape-logo.svg" 
                    class="logo-software" 
                    alt="Inkscape" 
                    title="Inkscape"
                >
            </a>
            <a 
                href="https://www.gimp.org/" 
                target="_blank"
            >
                <img 
                    src="https://www.gimp.org/images/frontpage/wilber-big.png" 
                    class="logo-software" 
                    alt="Gimp" 
                    title="Gimp"
                >
            </a>
            <a 
                href="https://www.scribus.net" 
                target="_blank"
            >
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Scribus_logo.svg/1024px-Scribus_logo.svg.png" 
                    class="logo-software" 
                    alt="Scribus" 
                    title="Scribus"
                >
            </a>
            <a 
                href="https://www.adobe.com/fr/products/illustrator.html" 
                target="_blank"
            >
                <img 
                    src="https://www.adobe.com/content/dam/cc/icons/illustrator.svg" 
                    class="logo-software" 
                    alt="Adobe Illustrator" 
                    title="Adobe Illustrator"
                >
            </a>
            <a 
                href="https://www.autodesk.fr/products/autocad/overview" 
                target="_blank"
            >
                <img 
                    src="https://www.scan2cad.com/wp-content/uploads/2016/10/autocad-logo-500x500.png" 
                    class="logo-software" 
                    alt="Autocad" 
                    title="Autocad"
                >
            </a>
            <a 
                href="https://www.coreldraw.com/fr/" 
                target="_blank"
            >
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/CorelDraw_logo.svg/1200px-CorelDraw_logo.svg.png" 
                    class="logo-software"  
                    alt="CorelDRAW" 
                    title="CorelDRAW"
                >
            </a>
            <a 
                href="http://www.quark.com/fr/Products/QuarkXPress/Default.aspx" 
                target="_blank"
            >
                <img 
                    src="https://upload.wikimedia.org/wikipedia/en/5/57/QuarkXPress_2017_Icon.png" 
                    class="logo-software" 
                    alt="Quark Xpress" 
                    title="Quark Xpress"
                >
            </a>
            <a 
                href="https://www.adobe.com/fr/products/indesign.html" 
                target="_blank"
            >
                <img 
                    src="https://www.adobe.com/content/dam/cc/icons/indesign.svg" 
                    class="logo-software" 
                    alt="Adobe InDesign" 
                    title="Adobe InDesign"
                >
            </a>
            <a 
                href="https://www.adobe.com/fr/products/photoshop.html" 
                target="_blank"
            >
                <img 
                    src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" 
                    class="logo-software" 
                    alt="Photoshop" 
                    title="Photoshop"
                >
            </a>
            <a 
                href="https://www.microsoft.com/en-us/p/easy-poster-printer/9p5bkxc41xvj?activetab=pivot:overviewtab" 
                target="_blank"
            >
                <img 
                    src="https://d2.alternativeto.net/dist/icons/easy-poster-printer_60638.png?width=200&height=200&mode=crop&upscale=false" 
                    class="logo-software" 
                    alt="Easy poster printer" 
                    title="Easy poster printer"
                >
            </a>
            <a 
                href="https://www.serif.com/fr/" 
                target="_blank"
            >
                <img 
                    src="https://cdn.serif.com/serif/img/logos/serif-logo@2x-190920160826.jpg" 
                    class="logo-software" 
                    alt="Serif drawplus" 
                    title="Serif drawplus"
                >
            </a>
            <a 
                href="https://www.libreoffice.org/discover/draw/" 
                target="_blank"
            >
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LibreOffice_4.0_Draw_Icon.svg/1200px-LibreOffice_4.0_Draw_Icon.svg.png" 
                    class="logo-software" 
                    alt="Libre office draw" 
                    title="Libre office draw"
                >
            </a>
            <a 
                href="https://www.adobe.com/fr/products/comp.html" 
                target="_blank"
            >
                <img 
                    src="http://blogs.acu.edu/innovation_foundry/files/2016/07/Adobe-comp-icon.png" 
                    class="logo-software" 
                    alt="Adobe comp CC" 
                    title="Adobe comp CC"
                >
            </a>
        </ol>
    </p>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
.logo-software{
    margin: 5% 10%;
    width: 8vw;
}
.into-list{
    margin: 0;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Video from "@/components/Video.vue";
import Pdf from "@/components/Pdf.vue";
import Footer from "@/components/Footer.vue";
import {BIcon, BIconBoxArrowRight} from "bootstrap-vue";
@Component({
  components: {
    Header,
    Menu,
    Video,
    Pdf,
    Footer,
    BIcon,
    BIconBoxArrowRight,
  },
})
export default class PosterFundamental extends Vue {
    public pdfPosterKey = [
    {
      pdfLink: "/pdf_poster/6PointKey.pdf",
      pdfDownload: "6ptsClesAffiche",
      TxtPdf: "Les 6 points clés d'une affiche",
    },
    {
      pdfLink: "/pdf_poster/ExamplePoster.pdf",
      pdfDownload: "ElementsCompoAffiche",
      TxtPdf: "Les éléments de composition d’une affiche",
    },
    {
      pdfLink: "/pdf_poster/MITACS.pdf",
      pdfDownload: "MITACSCreerUneAffiche",
      TxtPdf: "MITACS – Créer une affiche",
    },
    {
      pdfLink: "//pdf_poster/CNRS.pdf",
      pdfDownload: "CNRSLePoster",
      TxtPdf: "CNRS – Le poster",
    },
  ];
}
</script>

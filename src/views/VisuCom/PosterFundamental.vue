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
    <h4> 
      Les fiches-clés
    </h4>
    <Pdf v-bind:galery-pdf="pdfPosterKey"></Pdf>
    <h4> 
      L’affiche en 5 étapes :
    </h4>
    <p>
        <ol>
            <li  class="first-list">
                Identifier le message en tant que but à atteindre :
            </li>
            <img 
                class="square"
                src="picture_VisuCom/schematic/schema_hennerbert.png" 
                alt="Schema_Hennerber<t"
            >
            <p class="into-list">
                <i>Source</i> : D’après HENNEBERT Jérôme,<i> Communication, 1re et 2e années</i>, Paris, Nathan, 2010, p. 167.
            </p>
            <li  class="first-list">
                Définir sa cible 
                <ul>
                    <li>Quels sont ses besoins ?</li>
                    <li>Ses attentes ?</li>
                    <li>Ses centres d'intérêt ?</li>
                    <li>Par quel focus attirer l'attention (3 secondes) et la retenir (30 secondes) ?</li>
                    <li>Quel niveau de détail d'informations ?</li>
                </ul>
            </li>
            <li  class="first-list">
                Regrouper les matériaux
                <ul>
                    <li>idées d’illustrations qui pourraient coller au sujet, au thème (photos, dessins, cartes, schémas, graphes, tableaux)</li>
                    <li>vérifier la qualité de la résolution, les droits d’auteur, à l’image</li>
                    <li>déterminer les unités linguistiques qui composeront l’affiche : titre, sous-titre, informations essentielles, slogan, etc. Le titre et le slogan doivent interpeller, informer et annoncer sous forme de question, jeu de mots, en exposant un conflit, etc.</li>
                    <li>identifier les codes de présentation propres à chaque domaine</li>
                    <li>réunir logos de la structure émettrice et des partenaires</li>
                </ul>
            </li>
            <li  class="first-list">
                Créer la maquette graphique de l’affiche 
            </li>
               
            <p class="into-list">
                1er parcours de survol qui identifie les zones sur lesquelles revenir de façon plus approfondie :
            </p>
            <img 
                class="square"
                src="picture_VisuCom/schematic/schema_hennerbert2.png" 
                alt="Schema_Hennerbert"
            >
            <p class="into-list">
            <i>Source :</i> D’après HENNEBERT Jérôme, <i>Communication, 1re et 2e années</i>, Paris, Nathan, 2010, p. 163.
            </p>
            <p class="into-list">
                Pour vous aider à choisir les couleurs, utilisez Color scheme designer qui vous orientera sur les compatibilités entre les différents tons qui composeront votre affiche :
            </p>
            <a href="https://colorschemedesigner.com/csd-3.5/" target="_blank">
            <img 
                class="vertical"
                src="picture_VisuCom/schematic/ColorSchemeDesigner.png" 
                alt="ColorSchemeDesigner"
            >
            </a>
            <p class="into-list">
                Si vous devez coller à une charte graphique (identité visuelle) bien particulière, utilisez l’outil Fastone Capture qui vous permettra de récupérer, à l’aide d’une pipette virtuelle, les coordonnées colométriques d’un ton existant sur n’importe quel support :
            </p>
            <a href="https://faststone.org/" target="_blank">
            <img 
                class="vertical" 
                src="picture_VisuCom/schematic/fastone.png" 
                alt="ColorSchemeDesigner"
            >
            </a>
            <p class="into-list">
                Soyez attentifs à l’impact et à la signification des couleurs :
            </p>
            <img 
                class="vertical" 
                src="picture_VisuCom/schematic/ColorPsy.jpg" 
                alt="ColorSchemeDesigner"
            >

            <p class="into-list">
                <strong>
                    <a 
                        href="http://www.surlimage.info/ecrits/couleur.html" 
                        target="_blank" 
                        style="text-decoration: none !important; color: #2e367f;"
                    >
                        De la couleur dans l’image <b-icon icon="box-arrow-right"></b-icon
                        >       
                    </a>
                </strong>
            </p>

            <li class="first-list">
                Choisir les outils 
            </li>
            <b-row class="justify-content-md-center" >
                <b-col>
                    <a 
                       href="https://inkscape.org/" 
                       target="_blank"
                    >
                        <b-button class="icon" id="popover-Inkscape">
                            <img 
                                src="https://media.inkscape.org/static/images/inkscape-logo.svg" 
                                class="Logo" 
                                alt="Inkscape" 
                   
                  
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-Inkscape" triggers="hover" placement="top">
                    Inkscape
    
                </b-popover>

                <b-col>
                    <a 
                        href="https://www.gimp.org/" 
                        target="_blank"
                    >
                        <b-button class="icon" id="popover-Gimp">
                            <img 
                                src="https://www.gimp.org/images/frontpage/wilber-big.png" 
                                class="Logo" 
                                alt="Gimp"   
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-Gimp" triggers="hover" placement="top">
                    Gimp
                </b-popover>

                <b-col>
                    <a 
                        href="https://www.scribus.net" 
                        target="_blank"
                    >
                        <b-button class="icon" id="popover-Scribus">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Scribus_logo.svg/1024px-Scribus_logo.svg.png" 
                                class="Logo" 
                                alt="Scribus" 
                                
                                
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-Scribus" triggers="hover" placement="top">
                    Scribus
                </b-popover>

                <b-col>
                    <a 
                        href="https://www.adobe.com/fr/products/illustrator.html" 
                        target="_blank"
                    >
                        <b-button class="icon" id="popover-AdobeIllustrator">
                            <img 
                                src="https://www.adobe.com/content/dam/cc/icons/illustrator.svg" 
                                class="Logo" 
                                alt="Adobe Illustrator" 
                                
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-AdobeIllustrator" triggers="hover" placement="top">
                    Adobe Illustrator    
                </b-popover>

                <b-col>
                    <a 
                        href="https://www.autodesk.fr/products/autocad/overview" 
                        target="_blank"
                    >
                        <b-button class="icon" id="popover-Autocad">
                            <img 
                                src="https://www.scan2cad.com/wp-content/uploads/2016/10/autocad-logo-500x500.png" 
                                class="Logo" 
                                alt="Autocad" 
                            
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-Autocad" triggers="hover" placement="top">
                    Autocad
                </b-popover>

                <b-col>
                    <a 
                        href="https://www.coreldraw.com/fr/" 
                        target="_blank"
                    >
                        <b-button class="icon" id="popover-CorelDRAW">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/CorelDraw_logo.svg/1200px-CorelDraw_logo.svg.png" 
                                class="Logo"  
                                alt="CorelDRAW" 
                            
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-CorelDRAW" triggers="hover" placement="top">
                    CorelDRAW  
                </b-popover>

                <b-col>
                    <a 
                        href="http://www.quark.com/fr/Products/QuarkXPress/Default.aspx" 
                        target="_blank"
                    >
                        <b-button class="icon" id="popover-QuarkXpress">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/en/5/57/QuarkXPress_2017_Icon.png" 
                                class="Logo" 
                                alt="Quark Xpress" 
                                
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-QuarkXpress" triggers="hover" placement="top">
                    Quark Xpress
                </b-popover>

                <b-col>
                    <a 
                        href="https://www.adobe.com/fr/products/indesign.html" 
                        target="_blank"
                    >
                        <b-button class="icon" id="popover-AdobeInDesign">
                            <img 
                                src="https://www.adobe.com/content/dam/cc/icons/indesign.svg" 
                                class="Logo" 
                                alt="Adobe InDesign" 
                                
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-AdobeInDesign" triggers="hover" placement="top">
                    Adobe InDesign
                </b-popover>

                <b-col>
                    <a 
                        href="https://www.adobe.com/fr/products/photoshop.html" 
                        target="_blank"
                    >
                        <b-button class="icon" id="popover-AdobePhotoshop">
                            <img 
                                src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" 
                                class="Logo" 
                                alt="Adobe Photoshop" 
                        
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-AdobePhotoshop" triggers="hover" placement="top">
                    Adobe Photoshop
                </b-popover>

                <b-col>
                    <a 
                        href="https://www.microsoft.com/en-us/p/easy-poster-printer/9p5bkxc41xvj?activetab=pivot:overviewtab" 
                        target="_blank"
                    >
                        <b-button class="icon" id="popover-printer">
                            <img 
                                src="https://d2.alternativeto.net/dist/icons/easy-poster-printer_60638.png?width=200&height=200&mode=crop&upscale=false" 
                                class="Logo" 
                                alt="Easy poster printer" 
                            
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-printer" triggers="hover" placement="top">
                    Easy poster printer    
                </b-popover>

                <b-col>
                    <a 
                        href="https://www.serif.com/fr/" 
                        target="_blank"
                    >
                        <b-button class="icon" id="popover-drawplus">
                            <img 
                                src="https://cdn.serif.com/serif/img/logos/serif-logo@2x-190920160826.jpg" 
                                class="Logo" 
                                alt="Serif drawplus" 
                            
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-drawplus" triggers="hover" placement="top">
                    Serif Drawplus   
                </b-popover>

                <b-col>
                    <a 
                        href="https://www.libreoffice.org/discover/draw/" 
                        target="_blank"
                    >
                        <b-button class="icon" id="popover-Libreoffice">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LibreOffice_4.0_Draw_Icon.svg/1200px-LibreOffice_4.0_Draw_Icon.svg.png" 
                                class="Logo" 
                                alt="Libre office draw" 
                            
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-Libreoffice" triggers="hover" placement="top">
                    Libre Office Draw
                </b-popover>

                <b-col>
                    <a 
                        href="https://www.adobe.com/fr/products/comp.html" 
                        target="_blank"
                    >
                        <b-button class="icon" id="popover-AdobeComp">
                            <img 
                                src="http://blogs.acu.edu/innovation_foundry/files/2016/07/Adobe-comp-icon.png" 
                                class="Logo" 
                                alt="Adobe comp CC" 
                            
                            >
                        </b-button>
                    </a>
                </b-col>

                <b-popover target="popover-AdobeComp" triggers="hover" placement="top">
                    Adobe comp CC
                </b-popover>
                <b-col></b-col><b-col></b-col><b-col></b-col><b-col></b-col>
            </b-row>
        </ol>
    </p>
   
    <Footer></Footer>
  </div>
</template>

<style lang="scss">

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
import {BIcon, BIconBoxArrowRight, BPopover} from "bootstrap-vue";
@Component({
  components: {
    Header,
    Menu,
    Video,
    Pdf,
    Footer,
    BIcon,
    BPopover,
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

<template>
  <div>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
       :interval="6000"
        controls
        indicators
        background="#bce8ff"
        img-width="1024"
        max-height="500"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with Image globale-->
        <b-carousel-slide>
          <template v-slot:img>
            <b-row class="justify-content-md-center">
              <b-col col lg="3">
                <b-card
                  title="Affiche 1 - Verdoyante"
                  img-src="/picture_Visu/Poster/perfArt/PosterGreen.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal1
                >
                </b-card
              ></b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 2 - Explosif"
                  img-src="/picture_Visu/Poster/perfArt/PosterExplosive.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal2
                >
                </b-card>
              </b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 3 - Old School"
                  img-src="/picture_Visu/Poster/perfArt/PosterOldSchool.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal3
                >
                </b-card>
              </b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 4 - Monochrome"
                  img-src="/picture_Visu/Poster/perfArt/PosterMonochrome.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal4
                >
                </b-card>
              </b-col>
            </b-row>
          </template>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide>
          <template v-slot:img>
            <b-row class="justify-content-md-center">
              <b-col col lg="3">
                <b-card
                  title="Affiche 5 - Épuré"
                  img-src="/picture_Visu/Poster/perfArt/PosterRefined.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal5
                >
                </b-card
              ></b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 6 - Haute Tension"
                  img-src="/picture_Visu/Poster/perfArt/PosterVoltage.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal6
                >
                </b-card>
              </b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 7 - Floral"
                  img-src="/picture_Visu/Poster/perfArt/PosterFloral.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal7
                >
                </b-card>
              </b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 8 - Asie"
                  img-src="/picture_Visu/Poster/perfArt/PosterAsia.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal8
                >
                </b-card>
              </b-col>
            </b-row>
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <b-row class="justify-content-md-center">
              <b-col col lg="3">
                <b-card
                  title="Affiche 9 - Statuesque"
                  img-src="/picture_Visu/Poster/perfArt/PosterStatuesque.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal9
                >
                </b-card
              ></b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 10 - Frayeur"
                  img-src="/picture_Visu/Poster/perfArt/PosterFright.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal10
                >
                </b-card>
              </b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 11 - Wall-E"
                  img-src="/picture_Visu/Poster/perfArt/PosterWall-E.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal11
                >
                </b-card>
              </b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 12 - Chaplin"
                  img-src="/picture_Visu/Poster/perfArt/PosterChaplin.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal12
                >
                </b-card>
              </b-col>
            </b-row>
          </template>
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default Image globalealignment -->
        <b-carousel-slide>
          <template v-slot:img>
            <b-row class="justify-content-md-center">
              <b-col col lg="3">
                <b-card
                  title="Affiche 13 - Danse"
                  img-src="/picture_Visu/Poster/perfArt/PosterDance.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal13
                >
                </b-card
              ></b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 14 - Automnal"
                  img-src="/picture_Visu/Poster/perfArt/PosterAutomnal.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal14
                >
                </b-card>
              </b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 15 - Mosaïque"
                  img-src="/picture_Visu/Poster/perfArt/PosterMosaic.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal15
                >
                </b-card>
              </b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 16 - Enflammé"
                  img-src="/picture_Visu/Poster/perfArt/PosterInflamed.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal16
                >
                </b-card>
              </b-col>
            </b-row>
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <b-row class="justify-content-md-center">
              <b-col col lg="3">
                <b-card
                  title="Affiche 17 - Arty"
                  img-src="/picture_Visu/Poster/perfArt/PosterArty.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal17
                >
                </b-card
              ></b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 18 - Gagnant 1re édition"
                  img-src="/picture_Visu/Poster/perfArt/PosterWinner1.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal18
                >
                </b-card>
              </b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 19 - Gagnant 2e édition"
                  img-src="/picture_Visu/Poster/perfArt/PosterWinner2.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  v-b-modal.my-modal19
                >
                </b-card>
              </b-col>
              <b-col col lg="3">
                <b-card
                  title="Affiche 20 - Gagnant 3e édition"
                  img-src="/picture_Visu/Poster/perfArt/PosterWinner3.jpg"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2 poster-perf"
                  v-b-modal.my-modal20
                >
                </b-card>
              </b-col>
            </b-row>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <b-modal id="my-modal1" hide-footer hide-header
      >
      <b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterGreen.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 1 </strong> </h7>
       <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
        </tr>
      </table>
      <p>
        Sur cette affiche, on ne distingue aucune structure, aucun sens de
        lecture. Les logos sont mêlés à l’ensemble iconographique. Tout est mis
        sur le même plan. Ce problème de hiérarchisation empêche le lecteur
        d’avoir une Lisibilité du contenu immédiate de l’information principale. Les deux
        logos devraient être de même taille et se situer dans une symétrie
        cohérente. Même s’il y a un effort sur la charte graphique (dominante
        vert-noir), on trouve ici un mélange d’objets hétéroclites (photo,
        Clipart, insert de texte) qui donnent l’impression d’un rébus à
        déchiffrer. L’insertion du logo violet rompt la cohérence de la charte
        graphique. Les illustrations sont davantage en rapport avec le théâtre
        et l’électricité qu’avec la performance artistique à proprement parler.
        Le texte situé dans l’encadré vert est trop petit et présente des
        redites par rapport au titre de l’affiche. Le cahier des charges n’a pas
        été respecté{{'\xa0'}}: ce n’est pas le bon titre et il manque un slogan. Les
        marges sont bien marquées.
      </p>
    </b-modal>
    <b-modal id="my-modal2" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterExplosive.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 2 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
        </tr>
      </table>
      <p>
        Le texte blanc sur fond jaune est peu lisible et passe au second plan,
        derrière le slogan. Chaque police a une histoire{{'\xa0'}}; celle-ci est très
        marquée années 1980. Il faut plus de contraste. Les préposition (à) et
        virgule (,) doivent être supprimées. L’affiche doit être synthétique et
        le texte réduit au minimum. Les images Clipart confèrent à l’affiche un
        aspect peu moderne, de même que la charte graphique qui mêle des
        couleurs peu en harmonie. L’insertion d’un écran d’ordinateur noir et
        blanc en bas de page, sur lequel apparaît le slogan, ne fait pas sens
        ici. Il peut même faire penser à la mise en page des formules de
        prévention choc telles que «{{'\xa0'}}Fumer tue{{'\xa0'}}» apposées sur les paquets de
        cigarettes. C’est donc peu incitatif. Le slogan accroche directement le
        regard. Or, c’est le titre de l’événement qui devrait être directement
        lisible. D’autant plus que le slogan s’adresse davantage à l’étudiant
        qui va se produire qu’au spectateur. Le bandeau du bas est intéressant.
        Les logos sont plutôt bien disposés et les informations liées à la
        réservation de l’événement sont lisibles. Attention néanmoins à ne pas
        mettre au même niveau d’importance les informations liées aux modalités
        de réservation et la mention obligatoire du service reprographie.
      </p>
    </b-modal>
    <b-modal id="my-modal3" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterOldSchool.jpg"
        draggable="false"
      />
      </b-row>
      <br>
  
      <h7> <strong>Affiche 3 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
        </tr>
      </table>
      <p>
        On retrouve ici des similitudes avec l’affiche 1. Même si les niveaux de
        lecture sont légèrement mieux définis, la hiérarchisation du texte n’est
        pas suffisamment claire. Plutôt que trois ou quatre images disséminées
        sur l’affiche, privilégiez une Image globale percutante qui sera mise en valeur.
        Ici, les Cliparts, les gros aplats de couleurs ainsi que les contours du
        texte confèrent à cette affiche un aspect un peu démodé qui reprend des
        codes des années 1980. Par ailleurs, les choix iconographiques ne
        traduisent pas l’essence de la performance artistique tandis que le
        slogan «{{'\xa0'}}Venez raviver votre flamme artistique{{'\xa0'}}!{{'\xa0'}}» ne fait écho à rien
        d’autre dans l’affiche.
      </p>
    </b-modal>
    <b-modal id="my-modal4" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterMonochrome.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 4 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
        </tr>
      </table>
      <p>
        Le sens de lecture de cette affiche est clair{{'\xa0'}}; l’essentiel du message
        est bien lisible. Le titre est bien mis en valeur. Le sous-titre
        présente une erreur d’orthographe courante{{'\xa0'}}: l’absence de pluriel à «
        performances artistiques{{'\xa0'}}». Or, lorsque la préposition «{{'\xa0'}}de{{'\xa0'}}» est suivie
        d’un groupe nominal dénombrable, ce dernier est toujours au pluriel si
        l’accord pluriel s’impose lorsqu’on ajoute «{{'\xa0'}}qui contient/présente{{'\xa0'}}» («
        un concours qui présente des performances artistiques{{'\xa0'}}»). La disposition
        des blocs sur l’affiche est déséquilibrée et présente un vide important
        en sa partie inférieure. Ce peut être un parti pris. Mais ici, il manque
        une illustration ou une touche artistique qui va renforcer la perception
        du sens de l’événement. La mise en page générale est trop classique et
        épurée (aplat rouge sans aucune référence au domaine artistique){{'\xa0'}}; elle
        fait davantage penser à la couverture d’un livre. Les logos sont trop
        petits et peu lisibles, notamment celui de gauche car il n’y a pas
        suffisamment de contraste (violet sur fond rouge). Concernant le slogan
        «{{'\xa0'}}Son, action, Image globaleet objet{{'\xa0'}}», l’idée d’une association de mots-clés
        est intéressante mais ces derniers doivent être plus précis, percutants
        et en lien avec le sujet de l’affiche. Exemple{{'\xa0'}}: «{{'\xa0'}}Un parcours tout
        tracé{{'\xa0'}}: rêver, câbler, exprimer{{'\xa0'}}» qui implique bien l’idée de décalage
        entre le monde du génie électrique/informatique et celui de l’art tout
        en les «{{'\xa0'}}câblant{{'\xa0'}}».
      </p>
    </b-modal>
    <b-modal id="my-modal5" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterRefined.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7><strong>Affiche 5</strong></h7>
      <p>
        Bien qu’épurées, certaines affiches peuvent se révéler efficaces et
        susceptibles d’interpeller.
      </p>
    </b-modal>
    <b-modal id="my-modal6" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterVoltage.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 6 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
        </tr>
      </table>
      <p>
        Si l’idée de départ de cette affiche est plutôt bonne (lier le monde du
        génie électrique avec les étincelles que peut produire l’art), le rendu
        global de l’aspect graphique fait un peu brouillon. Les couleurs ne sont
        pas en harmonie (pas d’identité graphique forte et case blanche centrale
        peu compréhensible) et la représentation des câbles électriques n’est
        pas lisible en première intention. Si vous optez pour un dessin manuel,
        celui-ci doit être parfaitement exécuté. Le slogan est pertinent, en
        lien avec la performance artistique et capable de créer un pont entre
        l’art et le génie électrique. Il est également en relation avec
        l’illustration. C’est ce qui est attendu. Le slogan et l’illustration
        doivent se répondre. L’idée de l’insertion d’un texte très secondaire à
        la verticale est pertinente. Mais il faut limiter cette disposition aux
        mentions légales ou d’impression et ne pas l’appliquer aux modalités de
        réservation de l’événement qui est une information essentielle.
        Attention à ne pas couper les logos.
      </p>
    </b-modal>
    <b-modal id="my-modal7" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        draggable="false"
        src="/picture_Visu/Poster/perfArt/PosterFloral.jpg"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 7{{'\xa0'}}: </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
        </tr>
      </table>
      <p>
        Le sens de lecture de cette affiche est respecté. Les informations
        apparaissent bien dans l’ordre du plus essentiel au plus secondaire. La
        police, si elle revêt bien un caractère «{{'\xa0'}}artistique{{'\xa0'}}», n’est cependant
        pas très lisible, notamment sur le fond bleu. Gardez-la uniquement pour
        le titre. Attention aux polices qui ne proposent pas d’accent («{{'\xa0'}}pret{{'\xa0'}}»
        = gênant). Il faut toujours être vigilant au contraste entre l’Image globaleet
        le texte qui s’y superpose. Par ailleurs, on a le sentiment d’une
        superposition sans grand rapport entre l’Image globalede fond et le texte.
        Aucun élément (forme, couleur…) ne permet de lier les deux. Le slogan
        est lui aussi en décalage{{'\xa0'}}: «{{'\xa0'}}Prêt pour ce genre de performance{{'\xa0'}}?{{'\xa0'}}» et
        utilise un déterminant démonstratif «{{'\xa0'}}ce{{'\xa0'}}» qui ne renvoie à aucune
        réalité précise, identifiable. La question n’a pas de fondement.
        Attention, par ailleurs, à l’accord dans ce genre d’interpellation{{'\xa0'}}: et
        pourquoi pas «{{'\xa0'}}prêts{{'\xa0'}}» ou «{{'\xa0'}}prêt.e.s{{'\xa0'}}»{{'\xa0'}}? Dans l’idéal, trouvez des
        synonymes ou des formulations permettant de contourner cette difficulté.
        Enfin, le thème iconographique retenu (tâches de couleurs en forme de
        fleurs) est peu en lien avec la performance artistique ni
        particulièrement accrocheur. Il demeure banal.
      </p>
    </b-modal>
    <b-modal id="my-modal8" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterAsia.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 8 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
        </tr>
      </table>
      <p>
        L’imagerie de cette affiche n’est pas en adéquation avec le thème. Ici,
        nous avons une série d’éléments qui orientent l’appréhension du message
        vers une lecture particulière fondée sur des symboliques fortes{{'\xa0'}}: aplat
        de couleur qui fait penser à la laque rouge Chine, forme ronde centrale
        qui renvoie au drapeau japonais, duo de traits parallèles marqués en
        leur extrémité qui ressemblent à une paire de baguettes ou encore police
        calligraphique, on pourrait presque confondre, en une lecture rapide, «
        artistique{{'\xa0'}}» avec «{{'\xa0'}}asiatique{{'\xa0'}}». Lorsque vous concevez une affiche, ayez
        en tête les symboles et les présupposés communs qui peuvent orienter sa
        lecture en première intention. Vous pouvez jouer avec les a priori du
        récepteur pour créer une connivence avec lui mais, quoi qu’il en soit,
        vous devez toujours les avoir bien identifiés préalablement pour ne pas
        brouiller votre message initial et risquer d’entraîner le récepteur sur
        une fausse piste. Il faut créer un horizon d’attente.
      </p>
    </b-modal>
    <b-modal id="my-modal9" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterStatuesque.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong> Affiche 9 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
        </tr>
      </table>
      <p>
        L’affiche est équilibrée – avec des marges qui permettent un bon
        centrage du message –. Cependant, attention à la symétrie à tout prix.
        Elle peut affadir l’affiche. Le texte présent dans les pastilles rondes
        est peu lisible. Évitez les polices à empattement (avec petites
        extensions qui terminent les extrémités des caractères) sauf si elles
        ont du sens par rapport à l’ensemble. Elles sont généralement peu
        modernes et leur finesse n’en fait pas un allié de la Lisibilité du contenu.
        L’équilibre du bandeau blanc en partie inférieure de l’affiche est à
        revoir{{'\xa0'}}; il ne contient que les logos (qui sont trop petits) et la
        mention de reprographie. Par conséquent, il paraît assez vide en sa
        partie droite. La mention «{{'\xa0'}}Le programme complet…{{'\xa0'}}» aurait pu davantage
        trouver sa place dans le bandeau. Même si les couleurs sont
        harmonieuses, elles restent assez éteintes par rapport au thème de
        l’affiche. Il faut davantage jouer sur les contrastes en apportant
        notamment une couleur complémentaire pour réveiller l’ensemble. Les
        statuettes en bois, par essence immobiles, vont même à l’encontre du
        slogan qui évoque le «{{'\xa0'}}mouvement{{'\xa0'}}» et l’ «{{'\xa0'}}énergie{{'\xa0'}}». Cette affiche
        n’est pas marquante. Elle risque de ne pas s’imprimer dans l’esprit du
        récepteur.
      </p>
    </b-modal>
    <b-modal id="my-modal10" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterFright.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 10 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
        </tr>
      </table>
      <p>
        Cette affiche fait bien plus penser à une soirée d’Halloween ou de
        l’horreur qu’à un concours de performances artistiques. Le texte noir
        sur fond bleu foncé n’est pas très lisible. L’insertion d’un bandeau
        vertical plus clair en partie inférieure aurait sans doute permis une
        meilleure Lisibilité du contenu. L’équilibre de la page fonctionne bien et le choix
        de la police est en harmonie avec le thème «{{'\xa0'}}Halloween électrique{{'\xa0'}}»
        ainsi qu’avec le slogan (auquel il faudrait rajouter un S).
        L’orthographe d’une affiche doit être contrôlée, lue et relue. Elle doit
        être irréprochable. En dehors de ces problèmes de Lisibilité du contenu, cette
        affiche aurait pu être efficace pour un événement en lien avec
        l’épouvante. Le code a été judicieusement exploité au maximum.
      </p>
    </b-modal>
    <b-modal id="my-modal11" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterWall-E.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 11 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
        </tr>
      </table>
      <p>
        Le recours à la figure du robot fait davantage penser à un concours de
        robotique qu’à un concours de performances artistiques. Bel équilibre
        sur la page. Attention à l’orthographe. Votre affiche doit être
        irréprochable. Il doit aussi respecter le cahier des charges en
        affichant le titre exact de l’évenement. Le slogan «{{'\xa0'}}À la fin, il n’en
        restera qu’un{{'\xa0'}}!{{'\xa0'}}» est trop petit et convenu (vu et revu). Pour
        interpeller le récepteur du message, votre slogan doit être percutant.
        Sortez des lieux communs et n’hésitez pas à associer des éléments a
        priori incompatibles{{'\xa0'}}! Cela peut donner lieu à de belles trouvailles.
        Les couleurs peuvent, par endroits, manquer un peu de contraste pour
        accrocher le regard. De manière générale, évitez les nuances de marron,
        trop ternes. Il faut renforcer le contraste.
      </p>
    </b-modal>
    <b-modal id="my-modal12" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterChaplin.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 12 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconRO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
        </tr>
      </table>
      <p>
        Même si le visuel est graphiquement très intéressant et interpellant, le
        recours à la figure de Charlie Chaplin fait immédiatement penser à
        l’univers du cinéma. La dimension «{{'\xa0'}}performances artistiques{{'\xa0'}}» n’est pas
        bien représentée ni défendue par le slogan «{{'\xa0'}}GEII à l’œuvre{{'\xa0'}}», assez
        banal. Le texte est trop épars et on regrette le mélange de polices dans
        le titre de l’événement, en partie supérieure de l’affiche. On harmonise
        au maximum les polices de caractères sur une même affiche. S’il y a une
        différenciation, celle-ci doit être justifiée. Les logos auraient dû
        être déplacés dans le carré noir de gauche pour assurer un meilleur
        équilibre de la page et une meilleure Lisibilité du contenu. L’affiche multiplie
        les codes (Chaplin, Mondrian). Il y a trop d’éléments forts. Privilégiez
        la mise en valeur d’un seul élément (exemple{{'\xa0'}}: visage en noir et blanc
        sur fond composite).
      </p>
    </b-modal>
    <b-modal id="my-modal13" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterDance.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 13 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
        </tr>
      </table>
      <p>
        Même si l’affiche a un rendu presque professionnel (respect du sens de
        lecture, jeux de rappels sur les formes arrondies et les lignes, police
        de caratères, bandeau noir en partie inférieure…), c’est un visuel qui
        peut manquer d’originalité. Le visuel de cette affiche est trop limitant
        par rapport au thème. Cette affiche met en œuvre les codes des salles de
        spectacle. Il faut éviter la police noire du titre sur fond sombre, peu
        lisible, ainsi que l’aspect sombre, sobre, voire austère, de l’image. Le
        slogan est trop proche de la définition de l’événement{{'\xa0'}}; il n’interpelle
        pas. S’il parle aux étudiants en génie électrique et informatique
        industrielle (un «{{'\xa0'}}courant alternatif{{'\xa0'}}»), il n’interpellera sans doute
        pas un public plus large.
      </p>
    </b-modal>
    <b-modal id="my-modal14" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterAutomnal.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 14 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconR.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
        </tr>
      </table>
      <p>
        Bel équilibre sur la page. La police est en lien avec l’illustration de
        fond. On observe même un beau travail sur les déliés (lettres, feuilles,
        ombres) qui apportent un aspect soigné et cohérent à l’ensemble. Malgré
        tout, l’esprit de l’affiche n’est pas en lien avec le thème. Il aurait
        fallu apporter une touche graphique et artistique à l’ensemble pour
        renvoyer à l’univers de la performance artistique. On trouve ici le code
        de l’automne et de la nature{{'\xa0'}}; cela renvoie plus à un événement lié au
        végétal. La gestion des informations chiffrées (date, horaires) est
        intéressante. Il manque le slogan. Les logos sont peu lisibles.
      </p>
    </b-modal>
    <b-modal id="my-modal15" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterMosaic.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 15 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
        </tr>
      </table>
      <p>
        Même s’il est simple, cette affiche est efficace{{'\xa0'}}; il présente un aspect
        graphique intéressant. La charte graphique est tout à fait cohérente. On
        retrouve un rappel du contour mosaïque dans le choix de la police de
        caractères et sa couleur, dans le fond jaune qui lui répond en écho ou
        encore dans la forme hexagonale en partie centrale inférieure de
        l’affiche. Dans cette forme hexagonale, on regrette la présence d’un
        texte trop dense (il faudrait notamment enlever les prépositions – de, à
        – ainsi que le déterminant – le –). De surcroît, cet espace de texte
        mériterait un jeu entre la police en gras et en maigre pour différencier
        les différents niveaux d’information. Le slogan «{{'\xa0'}}Le GEII est aussi un
        artiste{{'\xa0'}}!{{'\xa0'}}» est peu interpellant.
      </p>
    </b-modal>
    <b-modal id="my-modal16" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterInflamed.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 16 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6>Lisibilité du contenu</h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale</h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche</h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
        </tr>
      </table>
      <p>
        Cette affiche est créative et pertinente. Les couleurs sont bien
        contrastées et elles interpellent. Le slogan «{{'\xa0'}}L’art, la flamme de notre
        passion{{'\xa0'}}» ainsi que la police de caractères sont bien en lien avec
        l’illustration. Il faudrait néanmoins varier la police de caractères
        pour mettre certains éléments en valeur (titre/slogan). Il faut
        également respecter les codes de présentation des lieu et date
        (davantage les associer), éviter de les présenter sous forme courbe pour
        qu’elles soient bien lisibles. Cette dernière met bien en valeur
        l’engagement corporel et l’ancrage temporel (flamme qui brûle) de la
        performance artistique. La couleur de l’illustration se marie bien avec
        le logo. Cela n’est pas souvent le cas. Il faudrait respecter une marge
        légèrement plus importante sur les bords, notamment en partie
        inférieure.
      </p>
    </b-modal>
    <b-modal id="my-modal17" hide-footer hide-header
      ><b-row class="justify-content-md-center">
      <img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterArty.jpg"
        draggable="false"
      />
      </b-row>
      <br>
      <h7> <strong>Affiche 17 </strong> </h7>
      <table border="1">
        <tr>
          <td>
            <h6>Structuration de l'ensemble</h6>
          </td>
          <td>
            <h6> Lisibilité du contenu <br></h6>
          </td>
          <td>
            <h6>En lien avec le thème</h6>
          </td>
          <td>
            <h6>Image globale<br> </h6>
          </td>
          <td>
            <h6>Gestion texte</h6>
          </td>
          <td>
            <h6>Slogan / Accroche </h6>
          </td>
          <td>
            <h6>Charte graphique</h6>
          </td>
          <td>
            <h6>Originalité modernité</h6>
          </td>
        </tr>

        <tr>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">

          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconO.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
          <td>
            <img class="color-fire" src="../../../assets/iconG.jpg">
          </td>
        </tr>
      </table>
      <p>
        Charte graphique intéressante même si elle est trop chargée dans
        l’ensemble. Les mouvements de lignes se répondent ainsi que les
        couleurs. Le bandeau rouge dans la partie inférieure de l’affiche est
        pertinent et s’intègre harmonieusement à l’ensemble. La police de
        caractères est bien en lien avec les jeux de lignes. Les horaires sont
        écrits trop petits et trop détachés de la date. Dans l’ordre de lecture,
        les horaires devraient apparaître sous la date et non l’inverse. Le
        slogan est basé sur une rime. C’est un bon procédé pour interpeller mais
        il faut que la formule soit plus incisive. Les logos doivent être de
        taille égale.
      </p>
    </b-modal>

    <b-modal id="my-modal18" hide-footer hide-header
      ><img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterWinner1.jpg"
        draggable="false"
    /></b-modal>
    <b-modal id="my-modal19" hide-footer hide-header
      ><img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterWinner2.jpg"
        draggable="false"
    /></b-modal>
    <b-modal id="my-modal20" hide-footer hide-header
      ><img
        class="modal-image"
        src="/picture_Visu/Poster/perfArt/PosterWinner3.jpg"
        draggable="false"
    /></b-modal>
  </div>
</template>
<style lang="scss"  scoped>
  .card {
    cursor: pointer;
  }
  
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ModalPlugin } from "bootstrap-vue";
import {
  BCard,
  BCarousel,
  BCarouselSlide,
  BRow,
  BCol,
  BCardText,
  BCardImg,
  BButton,
  BModal,
  
  VBModal,
  directivesPlugin,
} from "bootstrap-vue";
Vue.use(ModalPlugin);

@Component({
  components: {
    BCard,
    BCarousel,
    BCarouselSlide,
    BRow,
    BCol,
    BCardText,
    BCardImg,
    BButton,
    BModal,
  },
})
export default class InPractisePerf extends Vue {}
</script>

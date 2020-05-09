<template>
  <div>
    <Header></Header>
    <Menu></Menu>
    <h3>CONSEILS ET ASTUCES</h3>
    <h4>Bien parler en public</h4>
    <Video v-bind:galery-video="videoSpeech"></Video>
    <h4>Vaincre ses peurs</h4>
    <Video v-bind:galery-video="videoSpeechFear"></Video>
    <h4>Pour aller plus loin: la prise de parole au féminin</h4>

    <a
      class="subtitle-link"
      href="/pdf_OWcom/female_Speaking.pdf"
      download="Prise_Parole_Feminin"
      ><strong
        >Article de Sylvie Lec Herbonnier, «&nbsp;Les étudiantes s’arment pourprendre
        la parole&nbsp;», <i>Le Monde </i>, 14 mars 2020. </strong
      ><b-icon icon="upload"></b-icon>
    </a>

    <p>
      Dans les écoles de management comme à Sciences Po, des formations pour
      apprendre l’aisance à l’oral visent particulièrement les femmes, moins
      encouragées à faire preuve d’éloquence.
    </p>
    <p>
    <b-button v-b-modal.modal-1>Lire l'article</b-button>
    </p>
    
    <b-modal size="xl" id="modal-1" hide-footer>
      <h2>Les étudiantes s’arment pour prendre la parole</h2>
      <h3>
        Dans les écoles de management comme à Sciences Po, des formations pour
        apprendre l’aisance à l’oral visent particulièrement les femmes, moins
        encouragées à faire preuve d’éloquence
      </h3>
      <p>
        Capucine Gourmelon, étudiante en école de commerce à Nantes, s’en
        souvient comme si c’était hier. En 2017, alors qu’elle étudiait en
        première année à Audencia Business School, à Nantes, elle s’est
        présentée au concours d’éloquence de son établissement – «&nbsp;<i>un défi
        personnel</i>&nbsp;». Elle fut alors frappée par ce qui s’y déroulait&nbsp;: plus elle
        grimpait dans la compétition, plus le nombre de filles s’amenuisait. La
        demi­finale en comptait quatre pour le double de garçons. En finale, il
        n’y avait que deux filles sur sept candidats. Capucine a continué son
        ascension jusqu’à la finale interécoles. Là, sur les neuf finalistes,
        deux seulement étaient des filles. «<i>&nbsp;Elles n’osent pas, là où les
        garçons ne se posent même pas la question&nbsp;</i>», constate l’étudiante, qui
        se dit aujourd’hui ravie de cette expérience. «&nbsp;<i>J’ai beaucoup appris sur
        moi, sur la gestion du stress. J’ai pris confiance. Faire des
        présentations en réunion n’est plus un problème.</i>&nbsp;»
      </p>
      <p>
        Concours d’éloquence, cours de prise de parole, séances de coaching ou
        de mentorat pour s’affirmer dans une réunion ou pour négocier, ateliers
        de «&nbsp;pitch&nbsp;», organisation de conférences type «&nbsp;TEDX&nbsp;»… L’apprentissage
        de l’oralité se développe dans les grandes écoles et les universités,
        comme en témoigne le film documentaire A voix haute (2017), de Stéphane
        de Freitas et Ladj Ly, qui suivait de jeunes étudiants de Paris­VIII, à
        Saint­Denis (Seine­Saint­Denis).
      </p>
      <h4>
        Réduire les inégalités
      </h4>
      <p>
        «<i>&nbsp;Avec l’accent mis sur les soft skills, la capacité à argumenter, à
        interagir et donc l’aisance à l’oral sont de plus en plus encouragées
        dans les cursus</i>&nbsp;», remarque Anne­Lucie Wack, la présidente de la
        Conférence des grandes écoles (CGE). Mais si l’aisance à l’oral devient
        une compétence de plus en plus prisée dans le monde professionnel, elle
        n’en est pas moins source de discriminations, sociales, mais aussi de
        genre. C’est l’un des enjeux de certaines formations&nbsp;: réduire des
        inégalités entre les hommes et les femmes face à cette prise de parole.
      </p>
      <p>
        Eric Cobast, professeur bien connu pour ses manuels de culture générale,
        est le directeur de la toute nouvelle «&nbsp;académie de l’éloquence&nbsp;»
        d’Inseec U, un groupe privé qui rassemble plusieurs écoles. Dans ce
        programme qui vise aussi bien les étudiants de l’Inseec U, des jeunes
        qui passent des oraux ou des cadres qui veulent développer leurs
        aptitudes oratoires, on apprend les bases de la prise de parole, la
        gestuelle, le rythme, la respiration, l’argumentation. On développe les
        techniques pour parler debout devant un public, en réunion ou à
        l’occasion d’un débat. Eric Cobast a été stupéfait par la proportion de
        femmes dans ces nouvelles formations destinées aux cadres&nbsp;: «<i>&nbsp;Elles
        constituent la majorité des élèves. Elles viennent chercher de
        l’assurance et veulent sans doute rétablir de l’égalité dans l’échange.
       </i>&nbsp;»
      </p>
      <p>
        A Sciences Po, les étudiants sont traditionnellement formés à l’oral dès
        le début de leur cursus. «<i>&nbsp;Dès la semaine d’intégration, des ateliers
        sont consacrés à la prise de parole. Et nous avons au moins un exposé
        par matière et par semestre à faire</i>&nbsp;», raconte Agathe Chapalain,
        étudiante rue SaintGuillaume, à Paris. Bien consciente des fortes
        inégalités d’accès à cet «&nbsp;art oratoire&nbsp;», dont la maîtrise dépend
        beaucoup «<i>&nbsp;de la filière d’études, de l’origine sociale mais aussi du
        genre</i>&nbsp;», elle préside l’Association de démocratisation de l’art
        oratoire, une structure qui mène diverses actions pour former des jeunes
        à la prise de parole. «<i>&nbsp;Les femmes s’autocensurent davantage et se
        sentent moins légitimes en public. Or, ne pas avoir les armes pour
        s’exprimer, c’est ne pas avoir les mêmes opportunités, notamment dans la
        vie professionnelle.</i>&nbsp;» Une prise de position qui résonne avec son
        expérience personnelle. Timide au lycée, Agathe Chapalain trouvait
        frustrant de ne pas arriver à s’affirmer&nbsp;: «<i>&nbsp;Ma personnalité s’en
        trouvait diminuée. J’ai mis six ans à atteindre le niveau d’aisance que
        je souhaitais</i>&nbsp;», assure cette femme qui s’exprime désormais devant des
        amphithéâtres pleins et dispense des formations à l’art oratoire dans
        des foyers de jeunes filles, de jeunes travailleurs ou encore pour
        l’association Business and Professionnel Women.
      </p>
      <p>
        «&nbsp;<i>Les femmes étudiant dans les grandes écoles réussissent très bien et
        se retrouvent souvent en tête de promo</i>&nbsp;», souligne AnneLucie Wack,
        présidente de la CGE. Pourtant, dès l’entrée dans la vie active, les
        inégalités sont déjà significatives, comme le montre la dernière enquête
        d’insertion de la CGE. Soixante­quatorze pour cent des diplômées qui ont
        trouvé un emploi sont embauchées en CDI contre 85 % pour les hommes&nbsp;; 79
        % bénéficient du statut de cadre contre 90 % des hommes, et l’écart de
        salaire est déjà de 3 000 euros brut annuels en faveur des hommes. Il ne
        fera que s’amplifier par la suite.
      </p>
      <h4>
        Changer les codes professionnels
      </h4>
      <p>
        L’expression orale n’est évidemment pas le seul facteur qui explique ces
        inégalités, mais elle n’est pas négligeable, selon Béatrice Duboisset,
        fondatrice du TEDx ChampsElyséesWomen. «<i>&nbsp;L’aisance à l’oral ne sert pas
        simplement à prendre la parole en public. Cette compétence se révèle
        utile pour manager une équipe, défendre des idées, argumenter face à un
        client. Pour aider les femmes à briser le plafond de verre, il faut
        travailler sur les facteurs qui conditionnent leur confiance.</i>&nbsp;» Viviane
        de Beaufort, fondatrice des Women Essec Executive Programs, qui dispense
        dans cette école de commerce des formations à destination des femmes
        cadres, ne dit pas autre chose. «<i>&nbsp;Prendre la parole, c’est montrer qu’on
        est leader. Or, les femmes sont davantage sujettes au complexe de
        l’imposteur – est­ ce que ce que je vais dire est légitime&nbsp;? – et au
        complexe de la bonne élève – je suis courtoise, je ne lève pas le ton,
        j’attends mon tour pour parler.</i>&nbsp;» Cette problématique de genre est,
        selon elle, largement liée à des rapports de domination. Un groupe
        détient le pouvoir et n’ouvre pas la porte à l’autre&nbsp;; plus le
        déséquilibre est important, plus ces mécanismes sont puissants. La
        difficulté de prendre la parole pour une femme dans une réunion composée
        en majorité d’hommes en est l’illustration. «&nbsp;Dans des équipes plus
        féminines, le phénomène a tendance à disparaître&nbsp;», observe Viviane de
        Beaufort. Et de compléter&nbsp;: «<i> Si nous devons rattraper avec nos
        formations ces inégalités, c’est qu’au moment de la petite enfance, les
        bons signaux n’ont pas été envoyés aux filles.</i>&nbsp;» Dans chaque programme
        de l’Essec consacré aux femmes cadres, l’aisance à l’oral est abordée.
        Dans une des formations destinée à celles qui souhaitent accéder aux
        conseils d’administration, Viviane de Beaufort fait réfléchir les
        participantes sur «<i> l’expression de l’ambition</i>&nbsp;».
      </p>
      <p>
        Consacrer des formations spécifiques aux femmes ou proposer des cursus à
        tout le monde fait partie des dilemmes des responsables de formations. «&nbsp;<i>
        Plutôt que de former les femmes pour qu’elles ressemblent à des hommes,
        il faut changer les codes professionnels pour les rendre plus inclusifs.
        Pour ce faire, nous devons préparer nos futures élites, femmes comme
        hommes, à une meilleure compréhension de ces mécanismes de
        discrimination</i>&nbsp;», estime, quant à elle, Hélène Périvier, directrice d’un
        programme de recherche sur le genre à Sciences Po. Elle vient de lancer
        un certificat «&nbsp;égalité femmes­-hommes et politiques publiques&nbsp;» qu’elle
        codirige avec l’ancienne ministre Najat Vallaud­Belkacem. Le cursus
        allie savoir universitaire, rencontre de personnalités et mentorat. Les
        élèves travaillent particulièrement sur la prise de parole en public.
      </p>
      <p>
        Parfois, quelques heures suffisent à produire le déclic. Audencia
        Business School a aussi mis en place un atelier «&nbsp;<i> negotraining</i>&nbsp;» gratuit
        de trois heures réservé aux femmes de la métropole nantaise. Depuis
        septembre 2017, un millier de professionnelles, surtout des cadres, ont
        été formées, par groupe de quinze. «&nbsp;<i> On leur fait prendre conscience que
        ce que l’on pense être une problématique individuelle est d’ordre
        sociétal et culturel, souligne Anne­Laure Guihéneuf, enseignante dans
        cette école de commerce. Puis nous les faisons travailler sur
        l’argumentation et le pitch, à travers des jeux de rôle.</i>&nbsp;» L’enjeu&nbsp;:
        être plus percutante, plus convaincante, plus sûre de soi dans son
        discours. Six mois après l’atelier, une femme sur deux a renégocié sa
        rémunération, et seule une sur dix n’a rien obtenu.
      </p>
      <p>
        Des grandes écoles aux formations de cadres, l’oral comme outil
        d’empowerment («&nbsp;autonomisation&nbsp;») est donc une valeur à la hausse. La
        mise en place d’un grand oral dans le nouveau bac, à partir de 2021,
        devrait amplifier le phénomène.
      </p>
      <p>
        SYLVIE LEC HERBONNIER
      </p>
    </b-modal>
    <img class="horizontal" src="/picture_OWcom/female_Speaking.png" />
    <Footer></Footer>
  </div>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Video from "@/components/Video.vue";
import {
  BIcon,
  BIconBoxArrowRight,
  BIconUpload,
  BButton,
  BModal,
} from "bootstrap-vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Menu,
    Video,
    BIcon,
    BIconBoxArrowRight,
    BIconUpload,
    BButton,
    BModal,
    Footer,
  },
})
export default class SpeechTips extends Vue {
  public videoSpeech = [
    {
      videoSrc: "https://www.youtube.com/embed/wkOk1wdTdrQ ",
      videoTitle: "L’art de bien parler",
      videoRoot: "Chaîne&nbsp;: Evolution Factory",
    },
    {
      videoSrc: "https://www.youtube.com/embed/IDZGAbCY_Zw",
      videoTitle: "Comment bien communiquer en public",
      videoRoot: "Chaîne&nbsp;: Jean Sommer Coach Vocal ",
    },
    {
      videoSrc: "https://www.youtube.com/embed/DM5rrmigZZU",
      videoTitle: "Les secrets d’une intervention orale réussie",
      videoRoot: "Chaîne&nbsp;: DunodVideos",
    },
    {
      videoSrc: "https://www.youtube.com/embed/um2TfrSGJ7o",
      videoTitle: "7 astuces pour bien parler en public",
      videoRoot: "Chaîne&nbsp;: Cyril Chambard",
    },

    {
      videoSrc: "https://www.youtube.com/embed/6JG4_6sUPvg",
      videoTitle: "Comment bien accrocher son auditoire&nbsp;?",
      videoRoot: "Chaîne&nbsp;: Cyril Chambard",
    },
    {
      videoSrc: "https://www.youtube.com/embed/kk0yINlr2ro",
      videoTitle:
        "Quand prendre la parole devient un jeu&nbsp;: concours d’éloquence HEC 1",
      videoRoot: "Chaîne&nbsp;: HEC Paris",
    },
    {
      videoSrc: "https://www.youtube.com/embed/x8mGosE1zH4",
      videoTitle:
        "Quand prendre la parole devient un jeu&nbsp;: concours d’éloquence HEC 2",
      videoRoot: "Chaîne&nbsp;: HEC Paris",
    },
  ];
  public videoSpeechFear = [
    {
      videoSrc: "https://www.youtube.com/embed/yV4Ia3qYj3c",
      videoTitle: "Comment vaincre la peur de parler en public&nbsp;? 1",
      videoRoot: "Chaîne&nbsp;: QuestionEntretien",
    },
    {
      videoSrc: "https://www.youtube.com/embed/YbhOsZtWuMY",
      videoTitle: "Comment vaincre la peur de parler en public&nbsp;? 2",
      videoRoot: "Chaîne&nbsp;: Cyril Chambard",
    },
    {
      videoSrc: "https://www.youtube.com/embed/zApHS2LJxIk",
      videoTitle: "Comment parler en public sans stress&nbsp;?",
      videoRoot: "Chaîne&nbsp;: Français avec Pierre",
    },
  ];
}
</script>

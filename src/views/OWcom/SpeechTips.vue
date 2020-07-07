<template>
  <div id="SpeechTips">
    <Header />
    <Menu />
    <h3>CONSEILS ET ASTUCES</h3>
    <h4>Bien parler en public</h4>
    <Video v-bind:galery-video="videoSpeech" v-bind:id-video="'speak1'"></Video>
    <h4>Vaincre ses peurs</h4>
    <Video
      v-bind:galery-video="videoSpeechFear"
      v-bind:id-video="'speak2'"
    ></Video>
    <h4>Pour aller plus loin : la prise de parole au féminin</h4>

    

    <p class="no-margin-bottom">
      Dans les écoles de management comme à Sciences Po, des formations pour
      apprendre l’aisance à l’oral visent particulièrement les femmes, moins
      encouragées à faire preuve d’éloquence.
    </p>
    <a
      class="subtitle-link  pdf-line"
      href="/pdf_OWcom/female_Speaking.pdf"
      download="Prise_Parole_Feminin"
    >
      Article de Sylvie Lec Herbonnier, «{{'\xa0'}}Les étudiantes s’arment
      pourprendre la parole{{'\xa0'}}», <i>Le Monde</i>, 14 mars 2020.
      <img class="logo-pdf" src="../../assets/logo-pdf.png" />
    </a>
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
        présentée au concours d’éloquence de son établissement – «{{'\xa0'}}<i
          >un défi personnel</i
        >{{'\xa0'}}». Elle fut alors frappée par ce qui s’y déroulait{{'\xa0'}}: plus
        elle grimpait dans la compétition, plus le nombre de filles
        s’amenuisait. La demi­finale en comptait quatre pour le double de
        garçons. En finale, il n’y avait que deux filles sur sept candidats.
        Capucine a continué son ascension jusqu’à la finale interécoles. Là, sur
        les neuf finalistes, deux seulement étaient des filles. «<i
          >{{'\xa0'}}Elles n’osent pas, là où les garçons ne se posent même pas la
          question{{'\xa0'}}</i
        >», constate l’étudiante, qui se dit aujourd’hui ravie de cette
        expérience. «{{'\xa0'}}<i
          >J’ai beaucoup appris sur moi, sur la gestion du stress. J’ai pris
          confiance. Faire des présentations en réunion n’est plus un
          problème.</i
        >{{'\xa0'}}»
      </p>
      <p>
        Concours d’éloquence, cours de prise de parole, séances de coaching ou
        de mentorat pour s’affirmer dans une réunion ou pour négocier, ateliers
        de «{{'\xa0'}}pitch{{'\xa0'}}», organisation de conférences type
        «{{'\xa0'}}TEDX{{'\xa0'}}»… L’apprentissage de l’oralité se développe dans les
        grandes écoles et les universités, comme en témoigne le film
        documentaire A voix haute (2017), de Stéphane de Freitas et Ladj Ly, qui
        suivait de jeunes étudiants de Paris­VIII, à Saint­Denis
        (Seine­Saint­Denis).
      </p>
      <h4>
        Réduire les inégalités
      </h4>
      <p>
        «<i
          >{{'\xa0'}}Avec l’accent mis sur les soft skills, la capacité à
          argumenter, à interagir et donc l’aisance à l’oral sont de plus en
          plus encouragées dans les cursus</i
        >{{'\xa0'}}», remarque Anne­Lucie Wack, la présidente de la Conférence des
        grandes écoles (CGE). Mais si l’aisance à l’oral devient une compétence
        de plus en plus prisée dans le monde professionnel, elle n’en est pas
        moins source de discriminations, sociales, mais aussi de genre. C’est
        l’un des enjeux de certaines formations{{'\xa0'}}: réduire des inégalités
        entre les hommes et les femmes face à cette prise de parole.
      </p>
      <p>
        Eric Cobast, professeur bien connu pour ses manuels de culture générale,
        est le directeur de la toute nouvelle «{{'\xa0'}}académie de
        l’éloquence{{'\xa0'}}» d’Inseec U, un groupe privé qui rassemble plusieurs
        écoles. Dans ce programme qui vise aussi bien les étudiants de l’Inseec
        U, des jeunes qui passent des oraux ou des cadres qui veulent développer
        leurs aptitudes oratoires, on apprend les bases de la prise de parole,
        la gestuelle, le rythme, la respiration, l’argumentation. On développe
        les techniques pour parler debout devant un public, en réunion ou à
        l’occasion d’un débat. Eric Cobast a été stupéfait par la proportion de
        femmes dans ces nouvelles formations destinées aux cadres{{'\xa0'}}: «<i
          >{{'\xa0'}}Elles constituent la majorité des élèves. Elles viennent
          chercher de l’assurance et veulent sans doute rétablir de l’égalité
          dans l’échange. </i
        >{{'\xa0'}}»
      </p>
      <p>
        A Sciences Po, les étudiants sont traditionnellement formés à l’oral dès
        le début de leur cursus. «<i
          >{{'\xa0'}}Dès la semaine d’intégration, des ateliers sont consacrés à la
          prise de parole. Et nous avons au moins un exposé par matière et par
          semestre à faire</i
        >{{'\xa0'}}», raconte Agathe Chapalain, étudiante rue SaintGuillaume, à
        Paris. Bien consciente des fortes inégalités d’accès à cet «{{'\xa0'}}art
        oratoire{{'\xa0'}}», dont la maîtrise dépend beaucoup «<i
          >{{'\xa0'}}de la filière d’études, de l’origine sociale mais aussi du
          genre</i
        >{{'\xa0'}}», elle préside l’Association de démocratisation de l’art
        oratoire, une structure qui mène diverses actions pour former des jeunes
        à la prise de parole. «<i
          >{{'\xa0'}}Les femmes s’autocensurent davantage et se sentent moins
          légitimes en public. Or, ne pas avoir les armes pour s’exprimer, c’est
          ne pas avoir les mêmes opportunités, notamment dans la vie
          professionnelle.</i
        >{{'\xa0'}}» Une prise de position qui résonne avec son expérience
        personnelle. Timide au lycée, Agathe Chapalain trouvait frustrant de ne
        pas arriver à s’affirmer{{'\xa0'}}: «<i
          >{{'\xa0'}}Ma personnalité s’en trouvait diminuée. J’ai mis six ans à
          atteindre le niveau d’aisance que je souhaitais</i
        >{{'\xa0'}}», assure cette femme qui s’exprime désormais devant des
        amphithéâtres pleins et dispense des formations à l’art oratoire dans
        des foyers de jeunes filles, de jeunes travailleurs ou encore pour
        l’association Business and Professionnel Women.
      </p>
      <p>
        «{{'\xa0'}}<i
          >Les femmes étudiant dans les grandes écoles réussissent très bien et
          se retrouvent souvent en tête de promo</i
        >{{'\xa0'}}», souligne AnneLucie Wack, présidente de la CGE. Pourtant, dès
        l’entrée dans la vie active, les inégalités sont déjà significatives,
        comme le montre la dernière enquête d’insertion de la CGE.
        Soixante­quatorze pour cent des diplômées qui ont trouvé un emploi sont
        embauchées en CDI contre 85 % pour les hommes{{'\xa0'}}; 79 % bénéficient du
        statut de cadre contre 90 % des hommes, et l’écart de salaire est déjà
        de 3 000 euros brut annuels en faveur des hommes. Il ne fera que
        s’amplifier par la suite.
      </p>
      <h4>
        Changer les codes professionnels
      </h4>
      <p>
        L’expression orale n’est évidemment pas le seul facteur qui explique ces
        inégalités, mais elle n’est pas négligeable, selon Béatrice Duboisset,
        fondatrice du TEDx ChampsElyséesWomen. «<i
          >{{'\xa0'}}L’aisance à l’oral ne sert pas simplement à prendre la parole
          en public. Cette compétence se révèle utile pour manager une équipe,
          défendre des idées, argumenter face à un client. Pour aider les femmes
          à briser le plafond de verre, il faut travailler sur les facteurs qui
          conditionnent leur confiance.</i
        >{{'\xa0'}}» Viviane de Beaufort, fondatrice des Women Essec Executive
        Programs, qui dispense dans cette école de commerce des formations à
        destination des femmes cadres, ne dit pas autre chose. «<i
          >{{'\xa0'}}Prendre la parole, c’est montrer qu’on est leader. Or, les
          femmes sont davantage sujettes au complexe de l’imposteur – est­ ce
          que ce que je vais dire est légitime{{'\xa0'}}? – et au complexe de la
          bonne élève – je suis courtoise, je ne lève pas le ton, j’attends mon
          tour pour parler.</i
        >{{'\xa0'}}» Cette problématique de genre est, selon elle, largement liée à
        des rapports de domination. Un groupe détient le pouvoir et n’ouvre pas
        la porte à l’autre{{'\xa0'}}; plus le déséquilibre est important, plus ces
        mécanismes sont puissants. La difficulté de prendre la parole pour une
        femme dans une réunion composée en majorité d’hommes en est
        l’illustration. «{{'\xa0'}}Dans des équipes plus féminines, le phénomène a
        tendance à disparaître{{'\xa0'}}», observe Viviane de Beaufort. Et de
        compléter{{'\xa0'}}: «<i>
          Si nous devons rattraper avec nos formations ces inégalités, c’est
          qu’au moment de la petite enfance, les bons signaux n’ont pas été
          envoyés aux filles.</i
        >{{'\xa0'}}» Dans chaque programme de l’Essec consacré aux femmes cadres,
        l’aisance à l’oral est abordée. Dans une des formations destinée à
        celles qui souhaitent accéder aux conseils d’administration, Viviane de
        Beaufort fait réfléchir les participantes sur «<i>
          l’expression de l’ambition</i
        >{{'\xa0'}}».
      </p>
      <p>
        Consacrer des formations spécifiques aux femmes ou proposer des cursus à
        tout le monde fait partie des dilemmes des responsables de formations.
        «{{'\xa0'}}<i>
          Plutôt que de former les femmes pour qu’elles ressemblent à des
          hommes, il faut changer les codes professionnels pour les rendre plus
          inclusifs. Pour ce faire, nous devons préparer nos futures élites,
          femmes comme hommes, à une meilleure compréhension de ces mécanismes
          de discrimination</i
        >{{'\xa0'}}», estime, quant à elle, Hélène Périvier, directrice d’un
        programme de recherche sur le genre à Sciences Po. Elle vient de lancer
        un certificat «{{'\xa0'}}égalité femmes­-hommes et politiques
        publiques{{'\xa0'}}» qu’elle codirige avec l’ancienne ministre Najat
        Vallaud­Belkacem. Le cursus allie savoir universitaire, rencontre de
        personnalités et mentorat. Les élèves travaillent particulièrement sur
        la prise de parole en public.
      </p>
      <p>
        Parfois, quelques heures suffisent à produire le déclic. Audencia
        Business School a aussi mis en place un atelier «{{'\xa0'}}<i>
          negotraining</i
        >{{'\xa0'}}» gratuit de trois heures réservé aux femmes de la métropole
        nantaise. Depuis septembre 2017, un millier de professionnelles, surtout
        des cadres, ont été formées, par groupe de quinze. «{{'\xa0'}}<i>
          On leur fait prendre conscience que ce que l’on pense être une
          problématique individuelle est d’ordre sociétal et culturel, souligne
          Anne­Laure Guihéneuf, enseignante dans cette école de commerce. Puis
          nous les faisons travailler sur l’argumentation et le pitch, à travers
          des jeux de rôle.</i
        >{{'\xa0'}}» L’enjeu{{'\xa0'}}: être plus percutante, plus convaincante, plus
        sûre de soi dans son discours. Six mois après l’atelier, une femme sur
        deux a renégocié sa rémunération, et seule une sur dix n’a rien obtenu.
      </p>
      <p>
        Des grandes écoles aux formations de cadres, l’oral comme outil
        d’empowerment («{{'\xa0'}}autonomisation{{'\xa0'}}») est donc une valeur à la
        hausse. La mise en place d’un grand oral dans le nouveau bac, à partir
        de 2021, devrait amplifier le phénomène.
      </p>
      <p>
        SYLVIE LEC HERBONNIER
      </p>
    </b-modal>
    <img
      class="horizontal"
      src="/picture_OWcom/female_Speaking.png"
      draggable="false"
    />
    <NextPrevBtn v-bind:nxtprev-list="nxtprevSpeechTips" />
    <Footer />
  </div>
</template>

<style lang="scss">
  #SpeechTips {
  scroll-behavior: smooth;
  overflow: auto;
  height: 100vh;
}
</style>

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
import NextPrevBtn from "@/components/NextPrevBtn.vue";
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
    NextPrevBtn,
    Footer,
  },
})
export default class SpeechTips extends Vue {
  protected videoSpeech = [
    {
      videoSrc: "https://www.youtube.com/embed/wkOk1wdTdrQ ",
      videoTitle: "L’art de bien parler",
      videoRoot: "Chaîne : Evolution Factory",
    },
    {
      videoSrc: "https://www.youtube.com/embed/IDZGAbCY_Zw",
      videoTitle: "Comment bien communiquer en public",
      videoRoot: "Chaîne : Jean Sommer Coach Vocal ",
    },
    {
      videoSrc: "https://www.youtube.com/embed/DM5rrmigZZU",
      videoTitle: "Les secrets d’une intervention orale réussie",
      videoRoot: "Chaîne : DunodVideos",
    },
    {
      videoSrc: "https://www.youtube.com/embed/um2TfrSGJ7o",
      videoTitle: "7 astuces pour bien parler en public",
      videoRoot: "Chaîne : Cyril Chambard",
    },

    {
      videoSrc: "https://www.youtube.com/embed/6JG4_6sUPvg",
      videoTitle: "Comment bien accrocher son auditoire ?",
      videoRoot: "Chaîne : Cyril Chambard",
    },
    {
      videoSrc: "https://www.youtube.com/embed/kk0yINlr2ro",
      videoTitle:
        "Quand prendre la parole devient un jeu : concours d’éloquence HEC 1",
      videoRoot: "Chaîne : HEC Paris",
    },
    {
      videoSrc: "https://www.youtube.com/embed/x8mGosE1zH4",
      videoTitle:
        "Quand prendre la parole devient un jeu : concours d’éloquence HEC 2",
      videoRoot: "Chaîne : HEC Paris",
    },
  ];
  protected videoSpeechFear = [
    {
      videoSrc: "https://www.youtube.com/embed/yV4Ia3qYj3c",
      videoTitle: "Comment vaincre la peur de parler en protected ? 1",
      videoRoot: "Chaîne : QuestionEntretien",
    },
    {
      videoSrc: "https://www.youtube.com/embed/YbhOsZtWuMY",
      videoTitle: "Comment vaincre la peur de parler en protected  2",
      videoRoot: "Chaîne : Cyril Chambard",
    },
    {
      videoSrc: "https://www.youtube.com/embed/zApHS2LJxIk",
      videoTitle: "Comment parler en protected sans stress ?",
      videoRoot: "Chaîne : Français avec Pierre",
    },
  ];
  protected nxtprevSpeechTips = {
    BoolPrev: true,
    BoolNext: false,
    PrevImage: "/thumbnail4.png",
    NextImage: "",
    PrevLink: "/Prise_de_Parole/Parametre_Parole",
    NextLink: "",
  };
}
</script>

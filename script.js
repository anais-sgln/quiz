// Questions du quiz de culture de code
const questions = [
    // HTML Questions (20)
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise HTML5 est utilisée pour définir une section de navigation ?",
        options: ["<navigation>", "<nav>", "<menu>", "<navbar>"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quel attribut HTML5 rend un champ de formulaire obligatoire ?",
        options: ["mandatory", "required", "validate", "needed"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise HTML crée un lien hypertexte ?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise HTML5 définit un contenu autonome et indépendant ?",
        options: ["<section>", "<div>", "<article>", "<content>"],
        correct: 2
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise HTML permet d'insérer une image ?",
        options: ["<img>", "<image>", "<picture>", "<photo>"],
        correct: 0
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quel attribut spécifie le texte alternatif d'une image ?",
        options: ["title", "alt", "description", "text"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise HTML5 est utilisée pour du contenu audio ?",
        options: ["<sound>", "<audio>", "<music>", "<mp3>"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise définit un en-tête de page ou de section ?",
        options: ["<head>", "<header>", "<top>", "<heading>"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise crée un saut de ligne ?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        correct: 2
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quel type d'input HTML5 permet de sélectionner une date ?",
        options: ["type='calendar'", "type='date'", "type='datetime'", "type='day'"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise HTML définit une liste non ordonnée ?",
        options: ["<list>", "<ol>", "<ul>", "<nl>"],
        correct: 2
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quel attribut HTML spécifie l'URL de destination d'un lien ?",
        options: ["src", "href", "link", "url"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise HTML5 est utilisée pour du contenu vidéo ?",
        options: ["<movie>", "<video>", "<media>", "<film>"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise définit un pied de page ?",
        options: ["<bottom>", "<footer>", "<end>", "<foot>"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quel attribut HTML ouvre un lien dans un nouvel onglet ?",
        options: ["target='_new'", "target='_blank'", "new='true'", "window='new'"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise HTML crée un tableau ?",
        options: ["<grid>", "<table>", "<tab>", "<data>"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise HTML définit une cellule d'en-tête de tableau ?",
        options: ["<td>", "<th>", "<header>", "<head>"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quel attribut HTML lie un label à un input ?",
        options: ["id", "for", "name", "link"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quelle balise HTML5 définit un contenu à part ?",
        options: ["<sidebar>", "<aside>", "<side>", "<extra>"],
        correct: 1
    },
    {
        tech: "HTML",
        tag: "tag-html",
        question: "Quel attribut HTML désactive un élément de formulaire ?",
        options: ["inactive", "disabled", "readonly", "locked"],
        correct: 1
    },

    // CSS Questions (25)
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle propriété CSS permet de créer un layout flexible et responsive ?",
        options: ["display: table", "display: flexbox", "display: flex", "layout: flexible"],
        correct: 2
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle unité CSS est relative à la taille de la police de l'élément parent ?",
        options: ["px", "em", "pt", "vh"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle pseudo-classe CSS cible le premier enfant d'un élément ?",
        options: [":first", ":first-child", ":child-first", ":first-element"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle propriété CSS contrôle l'opacité d'un élément ?",
        options: ["visibility", "transparency", "opacity", "alpha"],
        correct: 2
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Comment centre-t-on un bloc horizontalement avec CSS ?",
        options: ["text-align: center", "margin: auto", "align: center", "center: true"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle propriété CSS définit la couleur de fond ?",
        options: ["color", "bg-color", "background-color", "back-color"],
        correct: 2
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quel sélecteur CSS cible tous les éléments ?",
        options: ["#all", ".all", "*", "all"],
        correct: 2
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle propriété CSS change la taille de la police ?",
        options: ["text-size", "font-size", "size", "text-scale"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Comment sélectionne-t-on un élément avec la classe 'titre' ?",
        options: ["#titre", ".titre", "titre", "*titre"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle propriété CSS crée une ombre portée sur du texte ?",
        options: ["box-shadow", "text-shadow", "shadow", "font-shadow"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle valeur de position CSS retire un élément du flux normal ?",
        options: ["position: static", "position: relative", "position: absolute", "position: flow"],
        correct: 2
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle propriété CSS contrôle l'espacement entre les lettres ?",
        options: ["letter-spacing", "char-spacing", "text-spacing", "word-spacing"],
        correct: 0
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Comment importe-t-on une feuille de style externe en CSS ?",
        options: ["@include", "@import", "@link", "@load"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle propriété CSS définit l'ordre des éléments flex ?",
        options: ["flex-order", "order", "position", "sequence"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle pseudo-classe CSS cible un élément survolé ?",
        options: [":over", ":hover", ":mouse", ":focus"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle propriété CSS arrondit les coins d'un élément ?",
        options: ["corner-radius", "border-radius", "round-corner", "edge-radius"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle unité CSS est relative à la hauteur de la fenêtre ?",
        options: ["vm", "vh", "vw", "vp"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Comment masque-t-on un élément en CSS ?",
        options: ["visibility: none", "display: none", "show: false", "visible: hidden"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle propriété CSS définit l'épaisseur de la bordure ?",
        options: ["border-size", "border-width", "border-thickness", "edge-width"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quel préfixe CSS était utilisé pour les propriétés WebKit ?",
        options: ["-moz-", "-webkit-", "-ms-", "-o-"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle propriété CSS crée une grille de mise en page ?",
        options: ["display: table", "display: grid", "layout: grid", "grid: true"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Comment sélectionne-t-on le dernier enfant d'un élément ?",
        options: [":end-child", ":last-child", ":final-child", ":child-last"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle propriété CSS définit l'alignement vertical du texte ?",
        options: ["text-align", "vertical-align", "align-vertical", "v-align"],
        correct: 1
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle valeur z-index place un élément au premier plan ?",
        options: ["Une valeur négative", "0", "Une valeur positive élevée", "auto"],
        correct: 2
    },
    {
        tech: "CSS",
        tag: "tag-css",
        question: "Quelle propriété CSS contrôle le débordement de contenu ?",
        options: ["overflow", "scroll", "content-flow", "excess"],
        correct: 0
    },

    // JavaScript Questions (30)
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode JavaScript permet de parcourir tous les éléments d'un tableau ?",
        options: ["loop()", "iterate()", "forEach()", "each()"],
        correct: 2
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment déclare-t-on une variable dont la valeur ne changera pas ?",
        options: ["var", "let", "const", "static"],
        correct: 2
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode convertit un objet JavaScript en chaîne JSON ?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toString()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode ajoute un élément à la fin d'un tableau ?",
        options: ["add()", "push()", "append()", "insert()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment sélectionne-t-on un élément par son ID en JavaScript ?",
        options: ["document.getElement()", "document.getElementById()", "document.selectId()", "document.findById()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode retire le dernier élément d'un tableau ?",
        options: ["remove()", "pop()", "delete()", "removeLast()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment déclare-t-on une fonction fléchée en JavaScript ?",
        options: ["function =>", "() =>", "=> function", "func =>"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quel opérateur JavaScript vérifie l'égalité stricte ?",
        options: ["=", "==", "===", "equals"],
        correct: 2
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode convertit une chaîne JSON en objet ?",
        options: ["JSON.parse()", "JSON.toObject()", "JSON.convert()", "JSON.decode()"],
        correct: 0
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment crée-t-on un tableau vide en JavaScript ?",
        options: ["array()", "new Array()", "[]", "Les deux b et c"],
        correct: 3
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode JavaScript retourne la longueur d'une chaîne ?",
        options: [".size", ".length", ".count", ".size()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment ajoute-t-on un écouteur d'événement en JavaScript ?",
        options: ["addListener()", "addEventListener()", "on()", "listen()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quel mot-clé permet de sortir d'une boucle ?",
        options: ["exit", "stop", "break", "end"],
        correct: 2
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment arrondit-on un nombre à l'entier le plus proche ?",
        options: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.int()"],
        correct: 0
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode filtre les éléments d'un tableau ?",
        options: ["select()", "filter()", "find()", "where()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment vérifie-t-on le type d'une variable ?",
        options: ["type()", "typeof", "getType()", "varType()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode transforme tous les éléments d'un tableau ?",
        options: ["transform()", "map()", "change()", "convert()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment génère-t-on un nombre aléatoire entre 0 et 1 ?",
        options: ["Math.random()", "random()", "Math.rand()", "getRandomNumber()"],
        correct: 0
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quel mot-clé définit une variable à portée de bloc ?",
        options: ["var", "let", "block", "scope"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode joint les éléments d'un tableau en chaîne ?",
        options: ["concat()", "join()", "merge()", "combine()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment affiche-t-on quelque chose dans la console ?",
        options: ["print()", "console.log()", "echo()", "display()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode retire le premier élément d'un tableau ?",
        options: ["removeFirst()", "shift()", "pop()", "delete()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment convertit-on une chaîne en nombre ?",
        options: ["toNumber()", "parseInt()", "convertNumber()", "numberify()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode cherche un élément dans un tableau ?",
        options: ["search()", "find()", "locate()", "seek()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment déclare-t-on une classe en JavaScript ?",
        options: ["class NomClasse {}", "new Class()", "define class", "class: NomClasse"],
        correct: 0
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quel opérateur JavaScript représente le OU logique ?",
        options: ["&", "&&", "|", "||"],
        correct: 3
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode vérifie si un tableau contient un élément ?",
        options: ["contains()", "includes()", "has()", "exists()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment crée-t-on un objet vide en JavaScript ?",
        options: ["object()", "{}", "new Object()", "Les deux b et c"],
        correct: 3
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Quelle méthode ajoute un élément au début d'un tableau ?",
        options: ["addFirst()", "unshift()", "prepend()", "insertFirst()"],
        correct: 1
    },
    {
        tech: "JavaScript",
        tag: "tag-js",
        question: "Comment récupère-t-on la valeur d'un attribut data- ?",
        options: ["element.data()", "element.dataset", "element.getData()", "element.attr()"],
        correct: 1
    },

    // PHP Questions (15)
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Quel symbole précède une variable en PHP ?",
        options: ["@", "#", "$", "&"],
        correct: 2
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Quelle fonction PHP permet d'afficher du contenu à l'écran ?",
        options: ["print()", "echo", "display()", "show()"],
        correct: 1
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Comment démarre-t-on une session en PHP ?",
        options: ["start_session()", "session_start()", "begin_session()", "session_begin()"],
        correct: 1
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Comment débute un fichier PHP ?",
        options: ["<php>", "<?php", "<script php>", "<?"],
        correct: 1
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Quelle superglobale PHP contient les données POST ?",
        options: ["$POST", "$_POST", "$POST_DATA", "$FORM"],
        correct: 1
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Comment concatène-t-on des chaînes en PHP ?",
        options: ["+", ".", "&", "concat()"],
        correct: 1
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Quelle fonction PHP compte les éléments d'un tableau ?",
        options: ["length()", "count()", "size()", "sizeof()"],
        correct: 1
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Comment inclut-on un fichier PHP dans un autre ?",
        options: ["import", "include", "add", "load"],
        correct: 1
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Quelle fonction PHP vérifie si une variable existe ?",
        options: ["exists()", "isset()", "defined()", "is_set()"],
        correct: 1
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Comment crée-t-on un tableau associatif en PHP ?",
        options: ["array(key => value)", "array(key = value)", "[key => value]", "Les deux a et c"],
        correct: 3
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Quelle fonction PHP retourne la longueur d'une chaîne ?",
        options: ["length()", "strlen()", "size()", "str_length()"],
        correct: 1
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Comment se termine une instruction PHP ?",
        options: [".", ",", ";", ":"],
        correct: 2
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Quelle fonction PHP connecte à une base MySQL ?",
        options: ["mysql_connect()", "mysqli_connect()", "db_connect()", "connect_mysql()"],
        correct: 1
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Comment définit-on une constante en PHP ?",
        options: ["const", "define()", "constant()", "Les deux a et b"],
        correct: 3
    },
    {
        tech: "PHP",
        tag: "tag-php",
        question: "Quelle fonction PHP redirige vers une autre page ?",
        options: ["redirect()", "header()", "location()", "goto()"],
        correct: 1
    },

    // MySQL Questions (10)
    {
        tech: "MySQL",
        tag: "tag-mysql",
        question: "Quelle commande SQL permet de récupérer des données d'une base de données ?",
        options: ["GET", "FETCH", "SELECT", "RETRIEVE"],
        correct: 2
    },
    {
        tech: "MySQL",
        tag: "tag-mysql",
        question: "Quelle clause SQL filtre les résultats selon une condition ?",
        options: ["FILTER", "WHERE", "IF", "WHEN"],
        correct: 1
    },
    {
        tech: "MySQL",
        tag: "tag-mysql",
        question: "Quelle commande SQL supprime une table ?",
        options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "CLEAR TABLE"],
        correct: 2
    },
    {
        tech: "MySQL",
        tag: "tag-mysql",
        question: "Quelle commande SQL insère des données dans une table ?",
        options: ["ADD", "INSERT INTO", "PUT", "CREATE"],
        correct: 1
    },
    {
        tech: "MySQL",
        tag: "tag-mysql",
        question: "Quelle commande SQL modifie des données existantes ?",
        options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"],
        correct: 2
    },
    {
        tech: "MySQL",
        tag: "tag-mysql",
        question: "Quelle clause SQL trie les résultats ?",
        options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"],
        correct: 1
    },
    {
        tech: "MySQL",
        tag: "tag-mysql",
        question: "Quelle commande SQL supprime des lignes d'une table ?",
        options: ["REMOVE", "DROP", "DELETE", "CLEAR"],
        correct: 2
    },
    {
        tech: "MySQL",
        tag: "tag-mysql",
        question: "Quelle clause SQL limite le nombre de résultats ?",
        options: ["MAX", "LIMIT", "TOP", "COUNT"],
        correct: 1
    },
    {
        tech: "MySQL",
        tag: "tag-mysql",
        question: "Quelle commande SQL crée une nouvelle table ?",
        options: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "BUILD TABLE"],
        correct: 1
    },
    {
        tech: "MySQL",
        tag: "tag-mysql",
        question: "Quel type de jointure SQL retourne toutes les lignes des deux tables ?",
        options: ["INNER JOIN", "LEFT JOIN", "FULL JOIN", "CROSS JOIN"],
        correct: 2
    },

    // WordPress Questions (10)
    {
        tech: "WordPress",
        tag: "tag-wordpress",
        question: "Quel fichier WordPress contient les métadonnées d'un thème ?",
        options: ["theme.php", "config.php", "style.css", "header.php"],
        correct: 2
    },
    {
        tech: "WordPress",
        tag: "tag-wordpress",
        question: "Quelle fonction WordPress affiche le contenu d'un article ?",
        options: ["get_content()", "the_content()", "show_content()", "post_content()"],
        correct: 1
    },
    {
        tech: "WordPress",
        tag: "tag-wordpress",
        question: "Quelle fonction WordPress affiche le titre du site ?",
        options: ["site_title()", "bloginfo('name')", "get_title()", "wp_title()"],
        correct: 1
    },
    {
        tech: "WordPress",
        tag: "tag-wordpress",
        question: "Quel fichier WordPress définit les fonctions du thème ?",
        options: ["theme.php", "functions.php", "config.php", "setup.php"],
        correct: 1
    },
    {
        tech: "WordPress",
        tag: "tag-wordpress",
        question: "Quelle boucle WordPress affiche les articles ?",
        options: ["for loop", "while loop", "The Loop", "article loop"],
        correct: 2
    },
    {
        tech: "WordPress",
        tag: "tag-wordpress",
        question: "Comment récupère-t-on l'URL du thème WordPress ?",
        options: ["theme_url()", "get_template_directory_uri()", "wp_theme_url()", "template_url()"],
        correct: 1
    },
    {
        tech: "WordPress",
        tag: "tag-wordpress",
        question: "Quelle fonction WordPress enregistre un menu ?",
        options: ["add_menu()", "register_nav_menu()", "wp_menu()", "create_menu()"],
        correct: 1
    },
    {
        tech: "WordPress",
        tag: "tag-wordpress",
        question: "Quel hook WordPress s'exécute lors de l'initialisation ?",
        options: ["init", "start", "begin", "wp_init"],
        correct: 0
    },
    {
        tech: "WordPress",
        tag: "tag-wordpress",
        question: "Comment ajoute-t-on un support de post thumbnails ?",
        options: ["enable_thumbnails()", "add_theme_support('post-thumbnails')", "wp_thumbnails()", "support_images()"],
        correct: 1
    },
    {
        tech: "WordPress",
        tag: "tag-wordpress",
        question: "Quelle fonction WordPress inclut le header du thème ?",
        options: ["include_header()", "get_header()", "wp_header()", "the_header()"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('questionCounter').textContent = `Question ${currentQuestion + 1}/${questions.length}`;
    document.getElementById('techTag').textContent = q.tech;
    document.getElementById('techTag').className = `tech-tag ${q.tag}`;
    document.getElementById('questionText').textContent = q.question;
    
    const progressPercent = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progressPercent + '%';
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('nextBtn').disabled = true;
    selectedAnswer = null;
}

function selectAnswer(index) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
    selectedAnswer = index;
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === null) return;
    
    const q = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach(opt => opt.classList.add('disabled'));
    
    if (selectedAnswer === q.correct) {
        options[selectedAnswer].classList.add('correct');
        score++;
    } else {
        options[selectedAnswer].classList.add('wrong');
        options[q.correct].classList.add('correct');
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    document.getElementById('quizContent').classList.add('hidden');
    document.getElementById('resultScreen').classList.remove('hidden');
    
    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('scoreDisplay').textContent = percentage + '%';
    document.getElementById('correctCount').textContent = score;
    document.getElementById('wrongCount').textContent = questions.length - score;
    document.getElementById('percentage').textContent = percentage + '%';
    
    let message = '';
    if (percentage >= 90) {
        message = '🏆 Excellent ! Tu es un(e) pro du code !';
    } else if (percentage >= 70) {
        message = '🌟 Très bien ! Tu maîtrises bien tes bases !';
    } else if (percentage >= 50) {
        message = '💪 Pas mal ! Continue à t\'entraîner !';
    } else {
        message = '📚 Il y a du potentiel ! Révise et recommence !';
    }
    
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('progressBar').style.width = '100%';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    document.getElementById('quizContent').classList.remove('hidden');
    document.getElementById('resultScreen').classList.add('hidden');
    loadQuestion();
}

// Initialisation
loadQuestion();
export const corpus = [
  {
    _id: "D01",
    title: "HTML et la structure d'une page web",
    content:
      "HTML (HyperText Markup Language) est le langage standard utilisé pour créer la structure d'une page web. Il utilise des balises comme html, head, body, div, h1 et p pour organiser le contenu.",
    keywords: ["html", "balise", "web", "structure", "browser"],
    category: "frontend",
  },
  {
    _id: "D02",
    title: "CSS et le style d'une page web",
    content:
      "CSS (Cascading Style Sheets) permet de styliser une page HTML. On peut définir la couleur, la taille, la disposition et l'animation des éléments via des classes et des sélecteurs.",
    keywords: ["css", "style", "design", "layout", "classe"],
    category: "frontend",
  },
  {
    _id: "D03",
    title: "JavaScript et l'interactivité côté client",
    content:
      "JavaScript est le langage de programmation du navigateur. Il permet de manipuler le DOM, gérer les événements, et faire des requêtes fetch vers un serveur web.",
    keywords: ["javascript", "js", "dom", "fetch", "evenement"],
    category: "frontend",
  },
  {
    _id: "D04",
    title: "React et les composants",
    content:
      "React est une bibliothèque JavaScript pour construire des interfaces utilisateur à base de composants réutilisables. React utilise un Virtual DOM pour optimiser le rendu et la gestion de l'état (state, props).",
    keywords: ["react", "composant", "state", "props", "virtual dom"],
    category: "frontend",
  },
  {
    _id: "D05",
    title: "Vite et le tooling frontend moderne",
    content:
      "Vite est un outil de build frontend rapide créé par Evan You. Il fournit un serveur de développement instantané et un bundling optimisé pour les projets React et JavaScript modernes.",
    keywords: ["vite", "build", "frontend", "tooling", "serveur"],
    category: "frontend",
  },
  {
    _id: "D06",
    title: "Tailwind CSS et le design utilitaire",
    content:
      "Tailwind CSS est un framework CSS utilitaire qui permet de composer le design directement dans les classes HTML. Il s'intègre bien avec React, Vite et les projets JavaScript modernes.",
    keywords: ["tailwind", "css", "utilitaire", "design", "react"],
    category: "frontend",
  },
  {
    _id: "D07",
    title: "Node.js côté serveur",
    content:
      "Node.js est un environnement d'exécution JavaScript côté serveur. Il permet de créer des API, des serveurs web, et de gérer la logique métier d'une application avec JavaScript.",
    keywords: ["node", "javascript", "serveur", "api", "backend"],
    category: "backend",
  },
  {
    _id: "D08",
    title: "Express et la création d'API REST",
    content:
      "Express est un framework minimaliste pour Node.js. Il permet de définir des routes HTTP, des middlewares, et de gérer des requêtes et réponses JSON pour construire une API REST.",
    keywords: ["express", "node", "rest", "api", "middleware"],
    category: "backend",
  },
  {
    _id: "D09",
    title: "CORS et la communication frontend / backend",
    content:
      "CORS (Cross-Origin Resource Sharing) est un mécanisme de sécurité des navigateurs. Le backend Express doit activer cors() pour autoriser les requêtes venant d'un frontend React sur un autre port.",
    keywords: ["cors", "express", "react", "securite", "http"],
    category: "backend",
  },
  {
    _id: "D10",
    title: "MongoDB, base de données NoSQL",
    content:
      "MongoDB est une base de données NoSQL orientée documents. Les données sont stockées en JSON flexible appelé BSON. MongoDB permet des index textuels et des requêtes de recherche documentaire.",
    keywords: ["mongodb", "nosql", "document", "bson", "index"],
    category: "database",
  },
  {
    _id: "D11",
    title: "Mongoose et la modélisation MongoDB en Node.js",
    content:
      "Mongoose est une bibliothèque Node.js qui fournit un schéma strict pour modéliser les documents MongoDB. Il facilite la validation, les relations et les requêtes vers une base MongoDB depuis Express.",
    keywords: ["mongoose", "mongodb", "schema", "node", "express"],
    category: "database",
  },
  {
    _id: "D12",
    title: "JWT et l'authentification par token",
    content:
      "JSON Web Token (JWT) est un standard d'authentification. Le serveur signe un token que le client stocke et envoie ensuite dans le header Authorization pour accéder aux routes protégées.",
    keywords: ["jwt", "token", "authentification", "securite", "api"],
    category: "security",
  },
  {
    _id: "D13",
    title: "Docker et le déploiement d'applications",
    content:
      "Docker permet d'emballer une application et ses dépendances dans un conteneur. On peut exécuter MongoDB dans un conteneur Docker et déployer facilement un backend Express ou un frontend React.",
    keywords: ["docker", "conteneur", "mongodb", "deploy", "express"],
    category: "devops",
  },
  {
    _id: "D14",
    title: "Git et le contrôle de version",
    content:
      "Git est un système de contrôle de version distribué. Il permet de suivre l'historique du code source d'un projet, de créer des branches et de collaborer avec GitHub ou GitLab.",
    keywords: ["git", "version", "branche", "github", "code"],
    category: "devops",
  },
  {
    _id: "D15",
    title: "Recherche d'information et moteur de recherche",
    content:
      "La recherche d'information (Information Retrieval) étudie comment retrouver des documents pertinents à partir d'une requête. Les métriques Precision, Rappel et F-mesure évaluent la qualité du moteur.",
    keywords: ["recherche", "ir", "precision", "rappel", "f-mesure"],
    category: "theory",
  },
  {
    _id: "D16",
    title: "Index textuel MongoDB",
    content:
      "MongoDB permet de créer un index textuel avec createIndex({ content: 'text' }). La recherche s'effectue via la méthode find avec l'opérateur $text et $search pour matcher des mots-clés.",
    keywords: ["mongodb", "text", "index", "search", "find"],
    category: "database",
  },
  {
    _id: "D17",
    title: "Vraies données et qrels en IR",
    content:
      "En évaluation de moteur de recherche, les qrels (query relevance judgments) indiquent pour chaque requête quels documents sont pertinents. La précision et le rappel sont calculés contre cette vérité terrain.",
    keywords: ["qrels", "ir", "evaluation", "precision", "rappel"],
    category: "theory",
  },
  {
    _id: "D18",
    title: "Vue.js comme alternative à React",
    content:
      "Vue.js est un framework JavaScript progressif pour construire des interfaces utilisateur. Il propose une approche par composants similaire à React mais avec une syntaxe de templates différente.",
    keywords: ["vue", "javascript", "frontend", "composant", "framework"],
    category: "frontend",
  },
];

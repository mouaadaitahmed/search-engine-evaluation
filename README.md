# Evaluation d'un moteur de recherche

Mini projet MongoDB. Corpus de 18 documents, recherche avec l'index textuel, evaluation (precision, rappel, F-mesure).

## Installation

    npm install
    docker run -d --name mongo-search -p 27017:27017 mongo

## Commandes

    node scripts/importCorpus.js
    node scripts/search.js "react component state"
    node scripts/evaluate.js

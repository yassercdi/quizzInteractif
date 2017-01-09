// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];




for (var i = 0; i < questions.length; i++) {

    var ordreQuestion = document.createElement("strong");

    ordreQuestion.textContent = "Question" + i + ": ";
    ordreQuestion.id = i;
    document.getElementById("contenu").appendChild(ordreQuestion);
    var question = document.createElement("span");
    question.textContent = questions[i].enonce;
    question.id = "q" + i;
    document.getElementById(i).insertAdjacentHTML("afterend", question.textContent);
    var espace = document.createElement("br");
    document.getElementById("contenu").appendChild(espace);
    var bouton = document.createElement("button");
    bouton.textContent = "reponse";
    document.getElementById("contenu").appendChild(bouton);
    var espace = document.createElement("br");
    document.getElementById("contenu").appendChild(espace);

}
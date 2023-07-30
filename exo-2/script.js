console.log('exercice 2');

// Les 3 principaux sélécteurs de Jquery
// Comme pour JS il y a les id # / les class . et les balises elles mêmes comme "p"

$('#title').css("color", "red"); // Je séléctionne l'id title qui correspond au titre h4 du blog et je le met en rouge pour un résultat visuel
$('.sidenav').css("background-color", "black"); // Le menu sidenav qui est une class
$('footer').css("background-color", "red"); // Selectionne le footer
$('.input-group').css("background-color", "red"); // Ne fait rien visuellement mais on peut vérifier que dans le code le block de la barre de recherche a bien la propriété css crée
$('.glyphicon').css("background-color", "red"); // Séléctionne toutes les class glyphicon
$('.label-success').removeClass("label-success").addClass("label-danger"); // Séléctionne les label en vert et remplace la class par la couleur rouge (danger chez boostrap)
// 7. Sélectionner tous les paragraphes qui ont comme classe 'intro'. // Désolé il n'y en a pas 
console.log($('.glyphicon-time')); // Affiche dans la console tout les glypicon-time
console.log($('.sidenav:first')); // Selectionne le premier élément du sidenav
$('p:even').css("background-color", "red");
$('p:odd').css("background-color", "black"); //Séléctionne un paragraphe sur deux (pair ou impair even/odd)
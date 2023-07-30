console.log("exercice 3");

$('h1').text("Alexandre"); // remplace le texte du h1 par mon prénom
$('#tagline').text("Je suis un étudiant du Campus Numérique In The Alps"); // Remplace le texte que la tagline
$('.navbar-nav:not(.navbar-right)').remove(); // supprime toute la navbar sauf le bouton login qui a une class qui les différencie (navbar-right)
$('.glyphicon-log-in').removeClass("glyphicon-log-in").addClass("glyphicon-floppy-disk"); // Replace l'icone de log in
$('footer > p').html("<strong>Copyright 2017</strong>") // Je séléctionne la balise p dans la balise parente footer pour changer l'html et mettre le nouveau texte en gras
$('.col-sm-3 > p').text("mon projet"); // remplace les textes des paragraphes des images contenus dans des class col-sm-3
$('img').attr("src", "https://avatarfiles.alphacoders.com/324/324186.jpg"); // Change la source de toutes les images
$('h3').after("<div class=\"col-sm-3\"><img src=\"https://placehold.it/150x80?text=IMAGE\" class=\"img-responsive\" style=\"height:250px\" alt=\"Image\"><p>Nouveau Projet</p></div>"); // Ajoute un nouveau projet après le titre au dessus des autres et une image de 250 px de haut
$('footer').addClass("intro"); // Ajoute la class intro au footer
console.log("exercice 4");
// Afficher une alerte contenant un message quand le client clique sur sign up
$('.btn').click(function(){
    let email = $('.form-control').val(); // intégrer le contenu du champ email
    alert("Merci ", email, " nous vous tiendrons informé des différentes offres");
})
//cacher l'élément produits si on double clique dessus
$('a:contains("Products")').dblclick(function(){
    $(this).hide()
});
let click_counter = 0; // le compteur de click
$('img').click(function() {
    click_counter++;
    $('a:contains("Cart")').text("Cart(", click_counter, ")"); // ainsi le nombre d'objet dans le panier s'autoincrémente
    console.log(click_counter);
})
$('img').mouseenter(function(){
    let pic_id = $(this).attr("id"); // Si la souris passe sur une image on prend l'id de l'image qu'on a rajouté dans le html
    console.log("l'utilisateur regarde ", pic_id);
})
$('.form-control').click(function(){
    console.log("l'utilisateur à cliqué sur le formulaire");
})
$('.form-control').on("keyup", function(){ 
    let user_input = $(this).val(); //Chaque fois que l'utilisateur tape dans le champs on récupère la valeur du champ
    console.log("l'utilisateur est en traind de taper", user_input, "dans le champ");
});
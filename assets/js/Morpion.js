(function() {
    var joueur = {
        nom: "joueur",
        symbole : "X",
        score: 0 


    };

    var CPU = {
        nom : "CPU",
        symbole : "0",
        score : 0
    };

    var players = [joueur,CPU];
    var stop = false;
    var tour= Math.floor(Math.random() * 2);
    var tour_des_joueurs = tour;
    var joueurActuel = tour_des_joueurs;
    //affichage par choix
    choose1=function(elmt){
        joueur.symbole=elmt.textContent;
        CPU.symbole="O"
        elmt.parentNode.parentNode.style.display="none";
        onload();
    }
    choose2=function(elmt){
        joueur.symbole=elmt.textContent;
        CPU.symbole="X";
        elmt.parentNode.parentNode.style.display="none";
        onload();
    }
    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');

    choiseCase = function(id) {
        if( players[joueurActuel].nom == "joueur" && document.getElementById(id).classList.contains("marqué")==false && stop==false)
        {
            document.getElementById(id).textContent = joueur.symbole;
            document.getElementById(id).classList.add("marqué");
            verification(joueur);
            joueurActuel++;
             
        if(joueurActuel > 1)
        {   
            joueurActuel = 0;
        }
            var boucle=0;
            for (let i = 0; i< items.length; i++) {
               if(items[i].classList.contains("marqué"))boucle++;
            }
            if(boucle==9){

            }else{
                bot();
            }
        }
         
        
    }
      function onload(){
        if(players[joueurActuel].nom=="CPU"){
            var boucle=0;
            for (let i = 0; i< items.length; i++) {
               if(items[i].classList.contains("marqué"))boucle++;
            }
            if(boucle==9){

            }else{
                bot();
            }
        }
        }   
    bot = function() {
        if(stop ==false && players[joueurActuel].nom == "CPU" )
        {
            var bot_choose = Math.floor(Math.random() * 9);
            while(items[bot_choose].classList.contains("marqué") ){
                bot_choose = Math.floor(Math.random() * 9);
            }    
            items[bot_choose].textContent = CPU.symbole;
            items[bot_choose].classList.add("marqué");
            verification(CPU);
            joueurActuel++;
            if(joueurActuel > 1)
            {
                joueurActuel = 0;
            }
    
        }

    }
    
function verification(player){
    var verif1 = items[0].textContent==player.symbole && items[1].textContent==player.symbole && items[2].textContent==player.symbole
    var verif2 = items[3].textContent==player.symbole && items[4].textContent==player.symbole && items[5].textContent==player.symbole
    var verif3 = items[6].textContent==player.symbole && items[7].textContent==player.symbole && items[8].textContent==player.symbole
    var verif4 = items[0].textContent==player.symbole && items[3].textContent==player.symbole && items[6].textContent==player.symbole
    var verif5 = items[1].textContent==player.symbole && items[4].textContent==player.symbole && items[7].textContent==player.symbole
    var verif6 = items[2].textContent==player.symbole && items[5].textContent==player.symbole && items[8].textContent==player.symbole
    var verif7 = items[0].textContent==player.symbole && items[4].textContent==player.symbole && items[8].textContent==player.symbole
    var verif8 = items[2].textContent==player.symbole && items[4].textContent==player.symbole && items[6].textContent==player.symbole
        if (verif1){
             
            stop=true;
            player.score++;
            items[0].style.color="#00ffdd"
            items[1].style.color="#00ffdd"
            items[2].style.color="#00ffdd"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (verif2){
              
            stop=true;
            player.score++;
            items[3].style.color="#00ffdd"
            items[4].style.color="#00ffdd"
            items[5].style.color="#00ffdd"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (verif3){
            
            stop=true;
            player.score++;
            items[6].style.color="#00ffdd"
            items[7].style.color="#00ffdd"
            items[8].style.color="#00ffdd"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (verif4){
            
            stop=true;
            player.score++;
            items[0].style.color="#00ffdd"
            items[3].style.color="#00ffdd"
            items[6].style.color="#00ffdd"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }   
        else if (verif5){
         
            stop=true;
            player.score++;
            items[1].style.color="#00ffdd"
            items[4].style.color="#00ffdd"
            items[7].style.color="#00ffdd"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (verif6){
           
            stop=true;
            player.score++;
            items[2].style.color="#00ffdd"
            items[5].style.color="#00ffdd"
            items[8].style.color="#00ffdd"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (verif7){
             
            stop=true;
            player.score++;
            items[0].style.color="#00ffdd"
            items[4].style.color="#00ffdd"
            items[8].style.color="#00ffdd"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        else if (verif8){
             
            stop=true;
            player.score++;
            items[2].style.color="#00ffdd"
            items[4].style.color="#00ffdd"
            items[6].style.color="#00ffdd"
            if(player.nom=="joueur"){
                document.querySelector(".you-score").textContent=player.score;
            }else{
                document.querySelector(".cpu-score").textContent=CPU.score;
            }
        }
        
}
    // Vide le contenu de toute les cases
    rest = function() {
        stop= false;
        for (var i = 0; i < items.length; i++) {
            items[i].textContent = ''
            items[i].classList.remove("marqué");
            items[i].style.color = '#000'
        }
        CPU.score = 0;
        joueur.score = 0;

        tour_des_joueurs++;
        bot();
        document.querySelector(".you-score").textContent= 0;
        document.querySelector(".cpu-score").textContent = 0;            
    }
})();
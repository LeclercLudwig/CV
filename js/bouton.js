document.getElementById('bouton1').addEventListener('click', clique);
document.getElementById('bouton2').addEventListener('click', clique2);
document.getElementById('bouton3').addEventListener('click', clique3);


function clique(){
    document.getElementById('competences').style.display = "block";
    document.getElementById('experiences').style.display = "none";
    document.getElementById('hobbies').style.display = "none";
}
function clique2(){
    document.getElementById('competences').style.display = "none";
    document.getElementById('experiences').style.display = "block";
    document.getElementById('hobbies').style.display = "none";
  }
function clique3(){
    document.getElementById('experiences').style.display = "none";
    document.getElementById('competences').style.display = "none";
    document.getElementById('hobbies').style.display = "block";

  }
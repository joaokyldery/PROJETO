function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  //Pode ser assim:
 /*if(html.classList.contains('light')){
      html.classList.remove('light')
    }else{
      html.classList.add('light')
    }*/
  //Mas também pode ser assim:
 
 
 //pegar a tag img
  const img = document.querySelector("#profile img")

 //substituir a imagem
 if(html.classList.contains('light')){
//se tiver light mode, adicionar a imagem light
  img.setAttribute("scr", "./assets/avatar-light.png")
 } else{
//se tiver sem light mode, mander a imagem normal
  img.setAttribute("scr", ",/assets/avatar.png")
 }
 
 if(html.classList.contains('light')){
  img.setAttribute("alt", "cammisa preta e funto um degradê do roxo e azul")
 } else{
  img.setAttribute("alt", "camisa preta e funto amarelo, com óculos de grau")
 }
 

}
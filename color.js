const getnum = () =>{

  const  rnum = Math.floor(Math.random()* 16777215)
   const colorCode= "#"+rnum.toString(16); 

//   console.log(rnum,colorCode)

document.querySelector("body").style.backgroundColor = colorCode;
document.querySelector(".color-code").innerText = colorCode;
}

const btn = document.querySelector(".button").addEventListener("click",getnum)

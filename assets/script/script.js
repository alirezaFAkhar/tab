let _li = document.querySelectorAll(".tab-li")
let _article = document.querySelectorAll(".record")
_li.forEach((val)=>{
    val.addEventListener("click",()=>{
        _article.forEach((val)=>{
            val.style.display = "none";
            val.style.opacity = "0";
        })
        _li.forEach((val)=>{
          
          val.style.background = "transparent"; 
          val.style.borderRedius = "8px"
        })
        val.style.background = "#383D4F";
       let temp = val.getAttribute("data-tab");
        document.querySelector(".container>div#"+temp).style.display="flex"
        setTimeout(()=>{
            document.querySelector(".container>div#"+temp).style.opacity = "1";

        },10)

    })
})
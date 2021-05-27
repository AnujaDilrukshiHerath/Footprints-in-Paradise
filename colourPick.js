function change_color(select) {
    var color = select.options[select.selectedIndex].textContent;
    
    document.body.style.backgroundColor = color;
} 

function change_text_color(select) {
    var colour = select.options[select.selectedIndex].textContent;
    
    document.getElementById("h1").style.Color = colour;  
}   





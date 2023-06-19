document.addEventListener("DOMContentLoaded", function() {
    var fontSelect = document.getElementById("font-select");
    var fontSizeSelect = document.getElementById("font-size-select");
  
    fontSelect.addEventListener("change", updateFont);
    fontSizeSelect.addEventListener("change", updateFont);
  
    function updateFont() {
      var selectedFont = fontSelect.value;
      var selectedFontSize = fontSizeSelect.value;
      var body = document.body;
  
      if (selectedFont === "default") {
        body.style.fontFamily = "";
      } else {
        body.style.fontFamily = selectedFont;
      }
  
      if (selectedFontSize === "default") {
        body.style.fontSize = "";
      } else {
        body.style.fontSize = selectedFontSize;
      }
    }
  });
  
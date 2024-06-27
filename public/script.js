document.getElementById('listForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const input = document.getElementById("listInput");
  // accesses the text box
  
  const text = input.value.trim();
  // acesses the text inside the text box
  
  if(input.value != "") {
    addToList(text);
  }

  input.value = "";
});

function addToList(text) {
  let item = document.createElement("li");

  item.innerText = text;

  let removeButton = document.createElement("button");
  
  removeButton.addEventListener("click", function() {
    item.remove();
  });
  
  item.appendChild(removeButton);
  document.getElementById("things").appendChild(item);
}

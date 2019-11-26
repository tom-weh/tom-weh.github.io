function toggleNav(){
  var x = document.getElementById("expandable_menu");
  if (x.classList.contains("block")) document.getElementById("expandable_menu").classList.replace("block", "hidden")
  else {
    document.getElementById("expandable_menu").classList.replace("hidden","block")
  }
}


function countText(){
  text = document.getElementById("word-counter-textarea").value;

  var words = 0;
  var splitted_words = text.split(" ");
  var splitted_sentences = text.split(/[.!?]/);
  var splitted_paragraphs = text.split("\n");

  for (i in splitted_words){
    word = splitted_words[i];
    if (word !== "") {
      words += 1;
    }
  }

  var characters = text.replace(/\n/g, "").length;

  var sentences = 0;
  for (i in splitted_sentences){
    sentence = splitted_sentences[i].replace(/ /g, "").replace(/\n/g, "");
    if (sentence !== "") {
      sentences += 1;
    }
  }
  
  var paragraphs = 0;
  
  for (i in splitted_paragraphs){
    paragraph = splitted_paragraphs[i].replace(/ /g, "");
    console.log(paragraph)
    if (paragraph !== "") {
      paragraphs += 1
    }
  }

  td = document.getElementById("text-details").getElementsByTagName("td");
  td[0].innerHTML = words;
  td[1].innerHTML = characters;
  td[2].innerHTML = sentences;
  td[3].innerHTML = paragraphs;
}
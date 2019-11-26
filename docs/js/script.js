function toggleNav(){
  let x = document.getElementById("expandable_menu");
  if (x.classList.contains("block")) document.getElementById("expandable_menu").classList.replace("block", "hidden")
  else {
    document.getElementById("expandable_menu").classList.replace("hidden","block")
  }
}


function countText(){
  text = document.getElementById("word-counter-textarea").value;

  let words = 0;
  let splitted_words = text.split(" ");
  let splitted_sentences = text.split(/[.!?]/);
  let splitted_paragraphs = text.split("\n");

  for (i in splitted_words){
    let word = splitted_words[i];
    if (word !== "") {
      words += 1;
    }
  }

  let characters = text.replace(/\n/g, "").length;

  let sentences = 0;
  for (i in splitted_sentences){
    let sentence = splitted_sentences[i].replace(/ /g, "").replace(/\n/g, "");
    if (sentence !== "") {
      sentences += 1;
    }
  }
  
  let paragraphs = 0;
  
  for (i in splitted_paragraphs){
    let paragraph = splitted_paragraphs[i].replace(/ /g, "");
    if (paragraph !== "") {
      paragraphs += 1
    }
  }

  td = document.getElementById("text-details").getElementsByTagName("td");
  td[0].innerHTML = words;
  td[1].innerHTML = characters;
  let spaces = (text.match(/ /g)||[]).length;
  td[2].innerHTML = characters - spaces;
  td[3].innerHTML = sentences;
  td[4].innerHTML = paragraphs;
  td[5].innerHTML = Math.round(((text.match(/\w/g)||[]).length/words)*10||0)/10;
}
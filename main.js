let button = document.getElementById('pigbutton')
let input = document.getElementById('inputpig')

button.addEventListener('click', function(){
   let result = document.getElementById('results')
   let text = input.value;
   input.value = '';

  let pigLatin = (word) => {
    let nW = word.toLowerCase().trim()
  
    let positionFirstVowel = function (nW) {
      let aIdx = nW.indexOf("a");
      let eIdx = nW.indexOf("e");
      let iIdx = nW.indexOf("i");
      let oIdx = nW.indexOf("o");
      let uIdx = nW.indexOf("u");
  
      let answer = -1;
  
      if (aIdx == -1) {
  
      } else if (aIdx != -1) {
        answer = aIdx
      }
  
      if (eIdx == -1) {
  
      } else if (eIdx != -1 && answer == -1) {
        answer = eIdx
      } else if (eIdx != -1 && answer > eIdx) {
        answer = eIdx
      }
  
      if (iIdx == -1) {
  
      } else if (iIdx != -1 && answer == -1) {
        answer = iIdx
      } else if (iIdx != -1 && answer > iIdx) {
        answer = iIdx
      }
  
      if (oIdx == -1) {
  
      } else if (oIdx != -1 && answer == -1) {
        answer = oIdx
      } else if (oIdx != -1 && answer > oIdx) {
        answer = oIdx
      }
  
      if (uIdx == -1) {
  
      } else if (uIdx != -1 && answer == -1) {
        answer = uIdx
      } else if (uIdx != -1 && answer > uIdx) {
        answer = uIdx
      }
      return answer
    }
    let newWord = nW
    let position = positionFirstVowel(nW)
  
  
    if (position == 0) {
      newWord = nW + "yay"
      return newWord
    } 
    else if (position == -1) {
      newWord = nW + "ay"
      return newWord
    } 
    else if (position > 0) {
      let part1 = nW.substring(0, position)
      let part2 = nW.substring(position)
      newWord = part2 + part1 + "ay"
      return newWord
    } 
  
  }

  let traduzida = pigLatin(text)
  result.innerText = traduzida


})
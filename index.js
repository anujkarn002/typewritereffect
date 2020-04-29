const speed = 100; //milliseconds
const keywords = ["a Programmer", "an Engineer", "Iron Man"];
const element = document.getElementById('msg');

const sleep = (time) => new Promise(r => setTimeout(r, time));

const typingEffect = async (keywords) => {
  for (const keyword of keywords){
    element.innerHTML = "";
    for (const key of keyword){
      element.innerHTML += key
      await sleep(speed);
    }
    if (keyword === keywords[keywords.length - 1]){
      element.innerHTML += ".";
      await sleep(1000);
    } else {
      await sleep(700);
      for (const key of keyword){
        element.innerHTML = element.innerHTML.slice(0, -1)
        await sleep(speed);
      }
      await sleep(700);
    }
  }
  await sleep(1500);
  typingEffect(keywords);
}

typingEffect(keywords);

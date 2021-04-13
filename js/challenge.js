document.addEventListener("DOMContentLoaded", ()=>{
  const minus = document.getElementById('minus');
  const plus = document.getElementById('plus');
  const heart = document.getElementById('heart');
  const pause = document.getElementById('pause');
  const counter = document.getElementById('counter')
  const ul = document.querySelector('ul');
  const list = document.querySelector('#list');
  const form = document.getElementById("comment-form");
  const submit = document.getElementById("submit");

  minus.addEventListener('click', ()=>{
    let num = parseInt(counter.innerText, 10)

    if (num > 0){
      num--
      counter.innerText = num
    } else if (num === 0 ) {
      minus.disabled = true;
    }
  });
  
  plus.addEventListener('click', ()=>{
    incrementCounter();
  });

  function incrementCounter(){
    let num = parseInt(counter.innerText, 10);
    num++ 
    counter.innerText = num;
  };

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let p = document.createElement("p");
    p.innerText = e.target[0].value;
    list.append(p);
    e.target[0].value = null;
  });

  let isPaused = false;
  let timer = setInterval(incrementCounter, 1000);
  pause.addEventListener('click', ()=>{

    if (isPaused === false){
      clearInterval(timer);
      // isPaused = true
    } else if (isPaused === true){
      timer = setInterval(incrementCounter, 1000);
      // isPaused = false
    }

    isPaused = !isPaused;
    minus.disabled = !minus.disabled;
    plus.disabled = !plus.disabled;
    submit.disabled = !submit.disabled;
    heart.disabled = !heart.disabled;
  });

  let likes = {};
  heart.addEventListener('click', ()=>{
    let num = counter.innerText;
    let li = document.createElement("li");
    li.id = num;
    let updatedLike = document.getElementById(num)
    if (likes[num]){
      likes[num] ++
      updatedLike.innerText = `${num} has been liked ${likes[num]} times`;
      
    } else {
      likes[num] = 1;
      li.innerText = `${num} has been liked ${likes[num]} times`;
      ul.append(li);
    };
  });
});
"use strict";

const searchResults = document.getElementById("search-results");
const searchIcon = document.getElementsByClassName("fa-magnifying-glass");
const menuItems = document.querySelectorAll(".banner .menu li");
const tweetArea = document.getElementsByClassName("text-area");
const tweetBtn = document.querySelector(".whats-happening .btn");
const whoReplies = document.getElementsByClassName("reply");
const buttons = document.querySelector(".whats-happening .buttons");
const postIcons = document.querySelectorAll(".rightContent .group i");
const postNum = document.querySelectorAll(".rightContent .group p");

let searchFocus = (bool) => {
  if (bool) {
    searchResults.style.visibility = "visible";
    searchIcon[0].style.color = "rgb(29 161 242)";
  } else {
    searchResults.style.visibility = "hidden";
    searchIcon[0].style.color = "rgb(63 68 73)";
  }
};

let menuHover = (num) => {
  if (num % 2 === 0) {
    menuItems[num / 2].style.backgroundColor = "rgb(24 24 24)";
  } else {
    menuItems[Math.floor(num / 2)].style.backgroundColor = "rgb(0 0 0)";
  }
};
let tweetButtonVerify = () => {
  if (tweetArea[0].value === "") {
    tweetBtn.disabled = true;
  } else {
    tweetBtn.disabled = false;
  }
};

let tweetMode = () => {
  console.log(whoReplies);
  for (const element of whoReplies) {
    element.style.display = "inline-block";
  }
  buttons.style.borderTop = "1px solid rgba(255, 255, 255, 0.2)";
};

let iconHover = (num) => {
  if (num % 2 === 0) {
    if (num === 0) {
      postIcons[0].style.backgroundColor = "rgba(150, 150, 250, 0.1)";
      postIcons[0].style.color = "rgb(24, 155, 241)";
      postNum[0].style.color = "rgb(24, 155, 241)";
    } else if (num === 2) {
      postIcons[1].style.backgroundColor = "rgba(150, 150, 250, 0.1)";
      postIcons[1].style.color = "rgb(10, 150, 100)";
      postNum[1].style.color = "rgb(10, 150, 100)";
    } else {
      postIcons[2].style.backgroundColor = "rgba(150, 150, 250, 0.1)";
      postIcons[2].style.color = "rgb(220, 20, 110)";
      postNum[2].style.color = "rgb(220, 20, 110)";
    }
  } else {
    if (num === 1) {
      postIcons[0].style.backgroundColor = "rgb(0 0 0)";
      postIcons[0].style.color = "rgba(255, 255, 255, 0.5)";
      postNum[0].style.color = "rgba(255, 255, 255, 0.5)";
    } else if (num === 3) {
      postIcons[1].style.backgroundColor = "rgb(0 0 0)";
      postIcons[1].style.color = "rgba(255, 255, 255, 0.5)";
      postNum[1].style.color = "rgba(255, 255, 255, 0.5)";
    } else {
      postIcons[2].style.backgroundColor = "rgb(0 0 0)";
      postIcons[2].style.color = "rgba(255, 255, 255, 0.5)";
      postNum[2].style.color = "rgba(255, 255, 255, 0.5)";
    }
  }
};

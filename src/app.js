/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let prefixes = ["the", "our", "your", "another"];
  let adjs = ["lost", "first", "big", "beautiful"];
  let nouns = ["child", "coder", "player", "pet", "day"];
  let tlds = [".com", ".net", ".edu", ".org", ".io"];

  for (let prefix of prefixes) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          console.log(`${prefix}${adj}${noun}${tld}`);
        }
      }
    }
  }
};

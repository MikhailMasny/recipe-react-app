function shortenIt(str) {
  let recipeName = str;
  if (recipeName.length > 18) {
    recipeName = recipeName.substring(0, 18);
    recipeName += "...";
  }
  return recipeName;
}

function roundIt(colories) {
  return Math.round(colories);
}

export { shortenIt, roundIt };

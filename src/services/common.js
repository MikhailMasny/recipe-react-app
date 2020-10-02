function shortenIt(str) {
  let recipeName = str;
  if (recipeName.length > 15) {
    recipeName = recipeName.substring(0, 15);
    recipeName += "...";
  }
  return recipeName;
}

function roundIt(colories) {
  return Math.round(colories);
}

export { shortenIt, roundIt };

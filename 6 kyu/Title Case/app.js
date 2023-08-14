String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

function titleCase(title, minorWords) {
  var titleAr = title.toLowerCase().split(" "),
    minorWordsAr = minorWords ? minorWords.toLowerCase().split(" ") : [];

  return titleAr
    .map(function (e, i) {
      return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e;
    })
    .join(" ");
}

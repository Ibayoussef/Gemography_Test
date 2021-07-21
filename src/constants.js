var yesterday = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);
var newDate;
function formatDate(d) {
  var getDate = new Date(d),
    month = "" + (getDate.getMonth() + 1),
    day = "" + getDate.getDate(),
    year = getDate.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  newDate = [year, month, day].join("-");
}
formatDate(yesterday);
console.log(newDate);
export const API_ENDPOINT = `https://api.github.com/search/repositories?q=created:>${newDate}`;
export const API_MOST_STARS = API_ENDPOINT + "&order=desc&sort=stars";

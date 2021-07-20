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
export const API_ENDPOINT = `https://api.github.com/search/repositories?q=created:>${newDate}&order=desc`;
export const API_REPOS = API_ENDPOINT + "&sort=stars";
export const JSON_HEADERS = {
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/json",
};

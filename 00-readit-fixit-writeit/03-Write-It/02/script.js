const movies = [
  `GATE TO HEAVEN`,
  `TOUT S’EST BIEN PASSÉ`,
  `HERSELF`,
  `DUNE`,
  `DÉLICIEUX`,
  `RESPECT`,
  `GIVE ME LIBERTY`,
  `UNE VIE DÉMENTE`,
  `PAW PATROL: DE FILM`,
  `WOLFWALKERS`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

document.write(`<ol>`);
movies.reverse().forEach((movie) => {
  document.write(wrapWithTag(movie, `li`).toLowerCase());
});
document.write(`</ol>`);

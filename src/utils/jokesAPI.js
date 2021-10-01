export const fetchJokes = async (amount) => {
  return await fetch(
    `https://v2.jokeapi.dev/joke/programming,miscellaneous,pun?type=twopart${amount}`
  ).then((res) => res.json());
};

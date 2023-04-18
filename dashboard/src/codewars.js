export const fetchCodewars = async (user) => {
  const response = await fetch(`https://www.codewars.com/api/v1/users/${user}`);
  const data = await response.json();
  return data;
};

const API_URL = "https://api.github.com/users/maja-glowania/repos";

export const getRepositories = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getGitHubRepos = async (username) => {
    const data = await fetch(
        `https://api.github.com/users/${username}/repos?type=all&sort=updated&per_page=10`
    );

    return data.json();
};

export const getGitHubInfo = async (url) => {
    const endOfUrl = url.indexOf("{");
    console.log(url);
    const actualUrl = url.substring(0, endOfUrl) + "?per_page=2";
    const data = await fetch(actualUrl);

    return data.json();
};

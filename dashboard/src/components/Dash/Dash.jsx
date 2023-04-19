import { useEffect, useState } from "react";
import styles from "./Dash.module.scss";
import { fetchCodewars } from "../../services/codewars";
import { getGitHubRepos } from "../../services/github";
import GitRepoCard from "../GitRepoCard/GitRepoCard";

const Dash = () => {
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState(false);
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchCodewars(user);
    setUserData(data);
    setSearch(true);
    console.log(data);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const data = await getGitHubRepos(searchTerm);
    setRepos(data);
  };
  return (
    <div className={styles.Dash}>
      <section className={styles.Code}>
        <div>
          <form onSubmit={handleSubmit} className={styles.Form}>
            <input
              onChange={(e) => setUser(e.target.value)}
              className={styles.Input}
              placeholder="Enter Codewars Username"
            />
            <button className={styles.Btn}> Submit </button>

            <div className={styles.Main}>
              {search ? (
                <div className={styles.code}>
                  <h1 className={styles.username}>{userData.username}</h1>
                  <p>Honor: {userData.honor}</p>
                  <p>Clan: {userData.clan ? userData.clan : "None"}</p>
                  <p>
                    Leaderboard Position:
                    {userData.leaderboardPosition
                      ? userData.leaderboardPosition
                      : "TBD"}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </section>
      <div className={styles.Code}>
        <form onSubmit={(e) => handleSubmit1(e)} className={styles.Form}>
          <div className={styles.inputHeader}>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              required
              className={styles.Input}
              placeholder="Enter Github Username"
            />
            <input type="submit" className={styles.Btn} />
          </div>
        </form>
        <div className={`${styles.Main2} ${styles.Repo}`}>
          {repos &&
            repos.map((item) => {
              return <GitRepoCard key={item.id} repoObj={item} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default Dash;

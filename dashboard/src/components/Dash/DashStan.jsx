import { fetchCodewars } from "../../codewars";
import { useEffect, useState } from "react";

const DashStan = () => {
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchCodewars(user);
    setUserData(data);
    setSearch(true);
    console.log(data);
  };

  return (
    <>
      <section>
        <div>
          <form onSubmit={handleSubmit}>
            <input onChange={(e) => setUser(e.target.value)} />
            <button> Submit </button>

            {search ? (
              <>
                <h1>{userData.username}</h1>
                <p>Honor: {userData.honor}</p>
                <p>Clan: {userData.clan ? userData.clan : "None"}</p>
                <p>
                  Leaderboard Position:
                  {userData.leaderboardPosition
                    ? userData.leaderboardPosition
                    : "TBD"}
                </p>
              </>
            ) : (
              ""
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default DashStan;

import { getGitHubInfo } from "../../servicesAlex/github";
import { useState, useEffect } from "react";

const GitRepoCard = ({ repoObj }) => {
    const [commitInfo, setCommitInfo] = useState();

    const dateFormat = (string) => {
        const commit = new Date(string);
        const year = commit.getFullYear();
        const month = commit.getMonth();
        const day = commit.getDay();
        const hours = commit.getHours();
        let mins = commit.getMinutes();
        if (mins < 10) {
            mins = "0" + mins;
        }

        const TimeStamp = `${hours}:${mins} ${day}/${month}/${year}`;
        return TimeStamp;
    };

    useEffect(() => {
        const wrapper = async () => {
            const data = await getGitHubInfo(repoObj.commits_url);
            setCommitInfo(data);
        };
        wrapper();
    }, []);
    return (
        <div>
            <p>{repoObj.name}</p>
            <p>Number of Commits: {commitInfo && commitInfo.length}</p>
            {commitInfo &&
                commitInfo.map((item) => {
                    return (
                        <p key={item.node_id}>{`Name of Commiter: ${
                            item.commit.committer.name
                        },  ${dateFormat(item.commit.committer.date)} ${
                            item.commit.message
                        }`}</p>
                    );
                })}
            <br />
        </div>
    );
};

export default GitRepoCard;

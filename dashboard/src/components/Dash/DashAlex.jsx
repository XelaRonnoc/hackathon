import styles from "./Dash.module.scss";
import { getGitHubRepos } from "../../servicesAlex/github";
import { useState } from "react";
import { useEffect } from "react";
import GitRepoCard from "../GitRepoCard/GitRepoCard";

const DashAlex = () => {
    const [repos, setRepos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await getGitHubRepos(searchTerm);
        setRepos(data);
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" onChange={(e) => handleChange(e)} required />
                <input type="submit" />
            </form>
            {repos &&
                repos.map((item) => {
                    return <GitRepoCard key={item.id} repoObj={item} />;
                })}
        </>
    );
};

export default DashAlex;

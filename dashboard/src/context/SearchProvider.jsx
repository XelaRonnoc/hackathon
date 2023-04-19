export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchUser, setSearchUser] = useState("");

  return (
    <SearchContext.Provider value={{ searchUser, setSearchUser }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;

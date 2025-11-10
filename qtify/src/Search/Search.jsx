import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { truncate } from "../helpers/helpers";
import { useNavigate } from "react-router-dom";

function Search({ searchData = [], placeholder }) {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (value && value.slug) {
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit} className={styles.autocompleteRoot}>
        <Autocomplete
          freeSolo
          options={searchData}
          getOptionLabel={(option) => option.title || ""}
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          renderOption={(props, option) => {
            const artists = option.songs
              ? option.songs.flatMap((s) => s.artists)
              : [];
            return (
              <li {...props}>
                <div>
                  <p>{option.title}</p>
                  <p>{truncate(artists.join(", "), 40)}</p>
                </div>
              </li>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder || "Search an album of your choice"}
              InputProps={{
                ...params.InputProps,
                className: styles.searchInput,
                disableUnderline: true,
                endAdornment: (
                  <button type="submit" className={styles.searchButton}>
                    <SearchIcon />
                  </button>
                ),
              }}
              variant="standard"
            />
          )}
          sx={{ width: "100%" }}
        />
      </form>
    </div>
  );
}

export default Search;

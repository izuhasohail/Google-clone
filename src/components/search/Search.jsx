import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../stateProvider/StateProvider";
import { action_types } from "../../reducer/Reducer";
//https://developers.google.com/custom-search/v1/using_rest
function Search({ hideButtons=false }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const[{},dispatch]=useStateValue();

  const search = (e) => {
    e.preventDefault();

    dispatch({
        type:action_types.SET_SEARCH_TERM,
        term:input

    })
    navigate("/search");

    //do something with the input
  };
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {(!hideButtons) ? 
        (<div className="search_buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>)
       : 
        (<div className="search_buttons">
          <Button className="search_buttonsHidden" type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button  className="search_buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
        </div>)
      }
    </form>
  );
}

export default Search;

import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../../stateProvider/StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import Response from "../../response";
import { Link } from "react-router-dom";
import Search from "../../components/search/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

//https://developers.google.com/custom-search/v1/using_rest
//https://cse.google.com/cse/create/new  --to create a search engine

export default function SearchPage() {
  const [{ term = "Tesla" }, dispatch] = useStateValue();
   const {data}=useGoogleSearch(term);//Live API call

  // const data = Response; //done this to get rid off quota stuff ...which is quite a headache in developing
  //mock api call

  console.log("data is", data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://media.wired.co.uk/photos/606dabd1f19707fe1aef375f/master/w_960,c_limit/GOOGLELOGO_1.jpg"
            alt="logo"
          ></img>
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">ALL</Link>
              </div>

              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>

              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>

              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>

              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>

            <div className="searchOptions_optionsRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>

              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCounts">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && (
                  <img className="searchPage_resultImage" 
                  src={
                    item.pagemap?.cse_image?.length>0 &&
                    item.pagemap?.cse_image[0]?.src
                  }
                  alt="img"></img>
                )}{item.displayLink}🔻</a>
              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">
                {item.snippet}{" "}
                {/*kind of description  & put ... it it's too big*/}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

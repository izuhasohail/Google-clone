import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from "@material-ui/core";
import Search from "../../components/search/Search";
function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          {/*Link */}
          <Link to="/about">About</Link>
          {/*Link */}
          <Link to="/store">Store</Link>
        </div>

        <div className="home_headerRight">
          {/*Link */}
          <Link to="/gmail">Gmail</Link>
          {/*Link */}
          <Link to="/images">Images</Link>
          {/*Icon */}
          <AppsIcon />
          {/*Avatar */}
          <Avatar/>
        </div>
      </div>

      <div className="home_body">
      <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo-2015-present.jpg" 
      alt="google"/>
      <div className="home_inputController">
        <Search />

      </div>
      </div>
     
    </div>
  );
}

export default Home;

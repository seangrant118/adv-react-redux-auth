import React from "react";
import requireAuth from "./requireAuth";

class Feature extends React.Component {
  render() {
    return <div>this is the feature</div>;
  }
}

export default requireAuth(Feature);

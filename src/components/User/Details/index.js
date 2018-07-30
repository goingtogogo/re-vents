import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Header from "./Header";
import Events from "./Events";
import Sidebar from "./Sidebar";
import Description from "./Description";
import Photos from "./Photos";

const query = ({ auth }) => {
  return [
    {
      collection: "users",
      doc: auth.uid,
      subcollections: [{ collection: "photos" }],
      storeAs: "photos"
    }
  ];
};

const mapStateToProps = ({ firebase, firestore }) => ({
  auth: firebase.auth,
  photos: firestore.ordered.photos,
  profile: firebase.profile
});

class UserDetailedPage extends Component {
  render() {
    const { photos, profile } = this.props;
    return (
      <Grid>
        <Header profile={profile} />
        <Description profile={profile} />
        <Sidebar />
        {photos && photos.length > 0 && <Photos photos={photos} />}
        <Events />
      </Grid>
    );
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(auth => query(auth))
)(UserDetailedPage);

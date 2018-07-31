import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty } from "react-redux-firebase";
import { compose } from "redux";
import Header from "./Header";
import Events from "./Events";
import Sidebar from "./Sidebar";
import Description from "./Description";
import Photos from "./Photos";
import { userDetailedQuery as query } from "../queries";
import Loader from "../../Loader";

const mapStateToProps = (state, ownProps) => {
  let userUid = null;
  let profile = {};
  if (ownProps.match.params.id === state.auth.uid) {
    profile = state.firebase.profile;
  } else {
    profile =
      !isEmpty(state.firestore.ordered.profile) &&
      state.firestore.ordered.profile[0];
    userUid = ownProps.match.params.id;
  }
  return {
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos,
    profile,
    userUid,
    requesting: state.firestore.status.requesting
  };
};

class UserDetailedPage extends Component {
  render() {
    const { photos, profile, auth, match, requesting } = this.props;
    const isCurrentUser = auth.uid === match.params.id;
    const loading = Object.values(requesting).some(a => a === true);
    if (loading) return <Loader inverted={true} />;
    return (
      <Grid>
        <Header profile={profile} />
        <Description profile={profile} />
        <Sidebar isCurrentUser={isCurrentUser} />
        {photos && photos.length > 0 && <Photos photos={photos} />}
        <Events />
      </Grid>
    );
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((auth, userUid) => query(auth, userUid))
)(UserDetailedPage);

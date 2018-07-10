import React from "react";
import GoogleMapReact from "google-map-react";
import { Segment, Icon } from "semantic-ui-react";

const Marker = () => <Icon name="marker" size="big" color="red" />;

export default ({ lat, lng }) => {
  const center = [lat, lng];
  const zoom = 14;
  console.log(center);
  return (
    <Segment attached="bottom" style={{ padding: 0 }}>
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: " AIzaSyBzkihxj1v85cNqLP_YplGYbaqMDEGl_C8" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

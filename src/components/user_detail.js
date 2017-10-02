import React, { PropTypes } from "react";

const UserDetail = ({ user }) => {
  if (user) {
    return (
      <div>
        {user.display_name}
        <img src={user.images[0].url} />
      </div>
    );
  } else {
    return <div />;
  }
};

export default UserDetail;

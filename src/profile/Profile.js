import { PropTypes } from "prop-types";
const Profile = (props) => {
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 200,
          margin: 50,
          backgroundColor: "#EAF2F8",
          padding: 40,
          borderRadius: 15,
        }}
        onClick={(e) => props.handleName(e)}
      >
        <img
          style={{
            width: 120,
            height: 180,
            border: "2px #1A5276 solid",
            borderRadius: 15,
          }}
          src={props.children}
          alt="profile"
        />
        <div style={{ fontSize: 24 }}>{props.fullName}</div>
        <div style={{ fontSize: 18 }}>{props.bio}</div>
        <div style={{ fontSize: 18 }}>{props.profession}</div>
      </div>
    </div>
  );
};
Profile.defaultProps = {
  fullName: "unknown",
  bio: "no bio",
  profession: "unknown",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};
export default Profile;

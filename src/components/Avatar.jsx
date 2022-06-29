const Avatar = ({ image }) => {
  return (
    <>
      <div className="avatar-container">
        <img alt="avatar" src={image} className="avatar" />
      </div>
    </>
  );
};

export default Avatar;

function Card({ wallpaper, profilePic, username, id, userInfo }) {
  const b = { background: wallpaper };
  return (
    <div className="container">
      <div className="users">
        <div className="containerImg" style={b}></div>
        <img src={profilePic} alt="" />
        <div className="userName">
          {username}
          {id}
        </div>
        <p className="userInfo">{userInfo}</p>
      </div>
    </div>
  );
}

export default Card;

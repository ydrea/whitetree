// import { useDispatch, useSelector } from "react-redux";
// import { resetList } from "../redux/apiSlice";
// import { remove } from "../redux/userSlice";

//
function Logout() {
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const deleteIt = (e) => {
    e.preventDefault();
    // dispatch(resetList());
    // dispatch(remove());
  };
  return (
    <div className="logout-container">
      <button
        className="button" //disabled={user.pending}
        onClick={deleteIt}
      >
        Logout
      </button>
      {/* <span>{user.email} </span> */}
    </div>
  );
}

export default Logout;

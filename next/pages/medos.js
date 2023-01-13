// import { parseCookies } from "nookies";
import Form from "../components/Form";
import { API_URL } from "../utils/urls";
//
import { useSelector, useDispatch } from "react-redux";
import { wrapper } from "../redux/store";
import { increment, selectCount } from "../redux/counterSlice";
//
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    console.log(store);

    store.dispatch(increment());
    // //auth block
    // const { params } = ctx;
    // const jwt = parseCookies(ctx).jwt;
    const res = await fetch(
      `${API_URL}/medos/`
      // , {
      //   headers: {
      //     Authorization: `Bearer ${jwt}`,
      //   },
      // }
    );
    console.log(res);
    const items = await res.json();
    console.log(items);
    // //
    return {
      props: { items },
    };
  }
);

function medos({ items }) {
  console.log(items);

  const dispatch = useDispatch();
  const cnt = useSelector(selectCount);
  console.log(cnt);
  return (
    <div>
      <h3>medos {cnt}</h3>
      <span>{JSON.stringify(items, 0, 2)} </span>
      {/* <Form /> */}
    </div>
  );
}

export default medos;

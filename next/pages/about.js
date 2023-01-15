import React from "react";
import { useSelector } from "react-redux";

export const getServerSideProps = () => {
  return { props: { a: "12" } };
};

const about = (props) => {
  const counter = useSelector((state) => state.counter.count);
  console.log(props);
  return (
    <div>
      about {counter}
      {JSON.stringify(props)}
      <p>
        {" "}
        White Tree is a web portal (B2B) and a mobile app (B2C), aiming to
        identify and support restaurants and catering businesses that offer
        locally sourced, organically grown, and/or affordable menu items, as
        well as specific dietary choices: vegetarian, vegan, gluten-free, keto,
        paleo etc.
      </p>
    </div>
  );
};

export default about;

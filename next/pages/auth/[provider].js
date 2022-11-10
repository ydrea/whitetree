import { api } from "../../utils/api";

export async function getServerSideProps({
  params: { provider },
  query: { access_token },
  ...ctx
}) {
  const res = await api(
    `/auth/${provider}/callback?access_token=${access_token}`,
    "GET"
  );
  if (res?.jwt) {
    //do something
  }

  return {
    props: {},
  };
}

const Connect = () => {
  return <div>Redirecting...</div>;
};

export default Connect;

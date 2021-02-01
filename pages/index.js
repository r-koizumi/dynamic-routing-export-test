import Header from '../components/header'
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  console.log(router);
  if (router.asPath !== "/") {
    router.push(router.asPath);
  }
  return (
    <>
      <Header />
      <h1>Hello World!</h1>
    </>
  );
}

export default Home

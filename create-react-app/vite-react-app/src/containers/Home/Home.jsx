import Card from "../../components/Card/Card";
import nametheobjectwhatyoulike from "./Home.module.scss"

const Home = () => {
  return (
  <main>
    <h2 className={nametheobjectwhatyoulike.title}>Basic React concepts</h2>
      <Card />
      <Card />
  </main>
  )
};

export default Home;
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="py-10 flex items-center">
      <section className="jumbo w-80 m-auto flex flex-col items-center md:w-full md:px-4 md:flex-row md:justify-center">
        <div className="jumbo__image">
          <img
            className="h-80 rounded-xl"
            src="https://images.pexels.com/photos/1325467/pexels-photo-1325467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Milk and cookies"
          />
        </div>
        <div className="jumbo__cta text-center md:text-start md:ms-10">
          <h1 className="my__TextColorRegularDark mb-2 mt-4 uppercase text-2xl font-extrabold md:mt-0">
            we are milk lovers...
          </h1>
          <h2 className="w-60 mx-auto mb-6 text-xl font-light md:w-full md:mb-20">
            A place to find the best dairy products in the entire universe
          </h2>
          <Link
            className="my__TextAlertColor my__hover--TextAlertColorLight cursor-pointer italic text-3xl"
            to={"/store"}
          >
            Visit our Store
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;

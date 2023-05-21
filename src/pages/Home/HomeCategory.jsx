import { useEffect, useState } from "react";
import Card from "./Card";
import { Link, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loading from "../../Components/Loading/Loading";
import useTitle from "../../hook/useTitle";

const HomeCategory = () => {
    useTitle("category");
  // state
  const [cateData, setCateData] = useState([]);
  // params
  let { all } = useParams();
  // api fetch request
  useEffect(() => {
    fetch("https://server-toy-marketplace.vercel.app/toys")
      .then((response) => response.json())
      .then((data) => setCateData(data));
  }, []);
  // all sub categories
  const herosCategory = cateData.filter((data) => data.subCategory == "Heroes");
  const artCategory = cateData.filter((data) => data.subCategory == "Art toys");
  const essentialsCategory = cateData.filter(
    (data) => data.subCategory == "Essentials"
  );
  const artBookCategory = cateData.filter(
    (data) => data.subCategory == "Art & Books"
  );

  // loader spinier
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  }, []);

  return loading ? (
    <div className="grid justify-center items-center">
      <Loading></Loading>
    </div>
  ) : (
    <div className="my-16 lg:w-11/12 mx-auto">
      <h1 className="md:text-6xl text-4xl text-yellow-900 text-center my-8 font-bold underline ">
        Our Category
      </h1>

      {/* <div className="flex flex-wrap justify-center justify-items-center "> */}
      {/* <div className="border p-4 rounded-xl mb-6 bg-[#FFF8EA] text-center text-3xl ">
          <h2 className="my-4 text-yellow-950 border rounded-3xl w-1/2 border-yellow-700 bg-yellow-50 font-bold">
            Heroes Toys
          </h2>
        </div> */}
      {/* tabs  */}
      <Tabs>
        <TabList>
          <div className="grid grid-cols-4 text-center lg:text-3xl text-xl justify-center mb-6">
            <Tab className="cursor-pointer hover:text-blue-500">
              <h1 className="">Heroes Toys</h1>
            </Tab>
            <Tab className="cursor-pointer hover:text-blue-500">
              <h1 className="">Art toys</h1>
            </Tab>
            <Tab className="cursor-pointer hover:text-blue-500">
              <h1 className="">Essentials</h1>
            </Tab>
            <Tab className="cursor-pointer hover:text-blue-500">
              <h1 className="">Art &amp; Books</h1>
            </Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className="flex flex-wrap justify-center md:gap-8 gap-8 mx-2">
            {(all == "all" ? herosCategory : herosCategory.slice(0, 3)).map(
              (card) => (
                <Card key={card._id} card={card}></Card>
              )
            )}
          </div>
          {all == "all" || (
            <div
              className="grid w-9/12 mx-auto h-16
           my-8"
            >
              {" "}
              <Link
                to={`category/1`}
                className="btn   bg-yellow-950 text-slate-50 font-bold text-2xl"
              >
                {" "}
                See all{" "}
              </Link>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-center md:gap-8 gap-8 mx-2">
            {(all == "all" ? artCategory : artCategory.slice(0, 3)).map(
              (card) => (
                <Card key={card._id} card={card}></Card>
              )
            )}

            {all == "all" || (
              <div
                className="grid w-9/12 mx-auto h-16
           my-8"
              >
                {" "}
                <Link
                  to={`category/2`}
                  className="btn   bg-yellow-950 text-slate-50 font-bold text-2xl"
                >
                  {" "}
                  See all{" "}
                </Link>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-center md:gap-8 gap-8 mx-2">
            {(all == "all"
              ? essentialsCategory
              : essentialsCategory.slice(0, 3)
            ).map((card) => (
              <Card key={card._id} card={card}></Card>
            ))}

            {all == "all" || (
              <div
                className="grid w-9/12 mx-auto h-16
           my-8"
              >
                {" "}
                <Link
                  to={`category/3`}
                  className="btn   bg-yellow-950 text-slate-50 font-bold text-2xl"
                >
                  {" "}
                  See all{" "}
                </Link>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-wrap justify-center md:gap-8 gap-8 mx-2">
            {(all == "all" ? artBookCategory : artBookCategory.slice(0, 3)).map(
              (card) => (
                <Card key={card._id} card={card}></Card>
              )
            )}

            {all == "all" || (
              <div
                className="grid w-9/12 mx-auto h-16
           my-8"
              >
                {" "}
                <Link
                  to={`category/4`}
                  className="btn   bg-yellow-950 text-slate-50 font-bold text-2xl"
                >
                  {" "}
                  See all{" "}
                </Link>
              </div>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HomeCategory;

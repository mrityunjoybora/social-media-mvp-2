import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";

function Home() {

 
  
  return (
    <div className="bg-purple-50 flex">
      <main className="flex max-w-7xl  mx-auto pt-2 sm:pt-4 px-2 sm:px-16 md:px-24">
        <Leftbar />

        <div className="flex gap-4">
          <Feed />


          <Rightbar />
        </div>
      </main>
    </div>
  );
}

export default Home;

import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Job from "../Job/Job";
import Jobs from "../Jobs/Jobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <CategoryList></CategoryList> */}
            <FeaturedJobs></FeaturedJobs>
            <Jobs></Jobs>
            
        </div>
    );
};

export default Home;
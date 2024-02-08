import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl text-center">Featured Jobs: {jobs.length}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, facilis.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;
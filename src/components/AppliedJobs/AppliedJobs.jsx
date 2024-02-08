import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";
import { list } from "postcss";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if(filter==='remote'){
            const remoteJobs = appliedJobs.filter(job=>job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs)
        }
        else if(filter==='onsite'){
            const onsiteJobs = appliedJobs.filter(job=>job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs)
        }
    }

    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    }, [jobs])

    return (
        <div>
            <h2>Jobs That I Applied :{appliedJobs.length} </h2>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={()=>handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=>handleJobsFilter('onsite')}><a>On-Site</a></li>
                </ul>
            </div>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>
                            {job.job_title}
                        </span>
                        <span>{job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;
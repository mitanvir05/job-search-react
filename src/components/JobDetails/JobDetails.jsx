import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);


    const handleApplyJob = ()=>{
        saveJobApplication(idInt);
        toast("Applied Successfully")
    }
    return (
        <div>
            <h1>Job Details : {job.job_title} </h1>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 ">
                    <div className="mx-5 my-2">
                    <h1 className="font-bold">Jobs Description :</h1>
                    <p> {job.job_description}</p>
                    <h1 className="font-bold">Job Responsibility : </h1>
                    <p>{job.job_responsibility}</p>
                    <h1 className="font-bold">Educational Reqirements : </h1>
                    <p>{job.educational_requirements}</p>
                    <h1 className="font-bold">Experiences : </h1>
                    <p>{job.experiences}</p>
                    </div>
                </div>
                <div className="border">
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
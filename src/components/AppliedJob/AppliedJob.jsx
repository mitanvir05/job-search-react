import { ImLocation } from "react-icons/im";
import { HiCurrencyBangladeshi } from "react-icons/hi2";


const AppliedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, } = job;
    return (
        <div className=" p-3 ml-3">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="ml-3 w-50"><img src={logo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <p>{remote_or_onsite}</p>
                    <p className="flex"><ImLocation className="text-lg"></ImLocation>{location} <HiCurrencyBangladeshi className="text-xl ml-3"></HiCurrencyBangladeshi>{salary}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;
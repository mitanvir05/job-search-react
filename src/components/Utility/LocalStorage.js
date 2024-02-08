import { getItem } from "localforage"

const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('Job-Application')
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}
const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplications.push(id)
        localStorage.setItem('Job-Application', JSON.stringify(storedJobApplications))
    }
};
export { getStoredJobApplication, saveJobApplication }
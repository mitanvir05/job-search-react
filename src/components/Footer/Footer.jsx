const Footer = () => {
    return (
        <footer className=" text-white p-10 bg-accent-content text-base-content">
           <div className="footer max-w-6xl mx-auto">
           <aside>
                <img className="w-20 max-w-sm rounded-lg" src="https://static.vecteezy.com/system/resources/previews/011/401/368/original/job-search-logo-vector.jpg" alt="" />
                <p>Job Search Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
           </div>
        </footer>
    );
};

export default Footer;
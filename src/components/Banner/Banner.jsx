const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://static.vecteezy.com/system/resources/previews/011/401/368/original/job-search-logo-vector.jpg" className="max-w-sm rounded-lg " />
                <div>
                    <h1 className="text-5xl font-bold">One Step Closer To Your Dream Jobs</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cum.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;
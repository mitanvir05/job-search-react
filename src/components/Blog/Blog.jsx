const Blog = ({ blog }) => {
    const { name, content } = blog;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{content}</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
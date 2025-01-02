
const BlogForm = () => {
    return (
        <div>
            <h2>New Blog</h2>
            <form>
                <div className="mb-3">
                    <label>Title</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label>Content</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-success">Save</button>
            </form>
        </div>
    );
};

export default BlogForm;

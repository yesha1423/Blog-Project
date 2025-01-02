
const SignUp = () => {
    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <div className="mb-3">
                    <label>Username</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;

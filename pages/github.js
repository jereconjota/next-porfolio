import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({ user, statusCode }) => {
    if (statusCode) {
        return <Error statusCode={statusCode} />;
    }

    return (
        <Layout footer={false}>
            <div className="row my-5">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt="" style={{ width: "100%" }} />
                        <p>{user.bio}</p>
                        <a
                            href={user.blog}
                            target="_blank"
                            className="btn btn-outline-secondary my-2"
                            rel="noopener noreferrer"
                        >
                            My Blog
                        </a>
                        <a
                            href={user.html_url}
                            target="_blank"
                            className="btn btn-outline-secondary"
                            rel="noopener noreferrer"
                        >
                            Go to Github
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

Github.proptypes = {};

export async function getServerSideProps() {
    const res = await fetch(
        "https://api.github.com/users/jereconjota"
    );
    const data = await res.json();
    console.log(data);
    const statusCode = res.status > 200 ? res.status : false;

    return {
        props: {
            user: data,
            statusCode,
        },
    };
}

export default Github;
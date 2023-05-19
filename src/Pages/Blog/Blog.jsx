import UseTitle from "../../Hooks/UseTitle";

const Blog = () => {
  UseTitle("Blog");
  return (
    <div className="my-10 space-y-5">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-300 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            Access tokens are used in token-based authentication to allow an
            application to access an API. The application receives an access
            token after a user successfully authenticates and authorizes access,
            then passes the access token as a credential when it calls the
            target API. Refresh tokens allow you to balance your users access
            needs with your organizations security practices. Access tokens help
            users get the resources they need to complete their tasks, but such
            tokens can also expose your organization to data compromise or other
            malicious actions if a hacker is able to steal them.There are two
            common ways to store your tokens. The first is in localStorage and
            the second is in cookies.HTTP only cookie is more secure than local
            storage to store token
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-300 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            SQL databases are relational, and NoSQL databases are
            non-relational. SQL databases use structured query language (SQL)
            and have a predefined schema. NoSQL databases have dynamic schemas
            for unstructured data. SQL databases are vertically scalable, while
            NoSQL databases are horizontally scalable. SQL databases are
            table-based, while NoSQL databases are document, key-value, graph,
            or wide-column stores. SQL databases are better for multi-row
            transactions, while NoSQL is better for unstructured data like
            documents or JSON. Table of Contents
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-300 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS ?
        </div>
        <div className="collapse-content">
          <p>
            Express is a fast and lightweight open-source application
            development framework based on Node.js. It is an excellent choice
            for creating small to medium-sized web applications and APIs, due to
            its simple and easy-to-learn approach. Express.js stands out for its
            impressive performance, with a middleware architecture enabling
            efficient communication between the server and client. Moreover, it
            offers a wide range of plugins that make it easy to extend its
            functionalities. NestJS is a framework for developing modern
            server-side applications in Node.js. It is built on top of Express,
            a popular server framework for Node.js, and provides a robust set of
            features for building efficient, scalable, and enterprise-grade
            applications.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-300 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work ?
        </div>
        <div className="collapse-content">
          <p>
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

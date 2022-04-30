import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center py-2 mb-4 bg-light border'>My Blogs</h1>
            {/* First question */}
            <h2 className='py-3'>Difference between javascript and nodejs</h2>
            <table className="table table-bordered">
                <thead>
                    <tr className='text-center'>
                        <th>
                            javascript
                        </th>
                        <th>
                            nodejs
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Javascript is a programming language that is used for writing scripts on the website.
                        </td>
                        <td>
                            NodeJS is a Javascript runtime environment.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Javascript can only be run in the browsers.
                        </td>
                        <td>
                            We can run Javascript outside the browser with the help of NodeJS.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            It is basically used on the client-side.
                        </td>
                        <td>
                            It is mostly used on the server-side.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Javascript is capable enough to add HTML and play with the DOM.
                        </td>
                        <td>
                            Nodejs does not have capability to add HTML tags.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Javascript is used in frontend development.
                        </td>
                        <td>
                            Nodejs is used in server-side development.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                        </td>
                        <td>
                            Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Second question */}
            <h2 className='py-3'>Differences between sql and nosql databases.</h2>
            <table className="table table-bordered">
                <thead>
                    <tr className='text-center'>
                        <th>
                            SQL
                        </th>
                        <th>
                            NoSQL
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                        </td>
                        <td>
                            Non-relational or distributed database system.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Javascript can only be run in the browsers.
                        </td>
                        <td>
                            They have dynamic schema
                        </td>
                    </tr>
                    <tr>
                        <td>
                            These databases are not suited for hierarchical data storage.
                        </td>
                        <td>
                            These databases are best suited for hierarchical data storage.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            These databases are best suited for complex queries
                        </td>
                        <td>
                            These databases are not so good for complex queries
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Vertically Scalable
                        </td>
                        <td>
                            Horizontally scalable
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Follows ACID property
                        </td>
                        <td>
                            Follows CAP(consistency, availability, partition tolerance)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Second question */}
            <h2 className='py-3'>What is the purpose of jwt and how does it work</h2>
            <div className='border p-3'>
                <h6>JSON Web Token is a standard used to create access tokens for an application.</h6>
                <p>
                    <strong>It works this way:</strong> the server generates a token that certifies the user identity, and sends it to the client.

                    The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.

                    This architecture proves to be very effective in modern Web Apps, where after the user is authenticated we perform API requests either to a REST or a GraphQL API.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
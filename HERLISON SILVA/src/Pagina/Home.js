import React from "react";

const Home = (props) =>{
    return(
        <div className="home">
            <ul>
            {
                props.Users.map((usr) => {
                    return (
                        <li>
                            <h2>User: {usr.user} | E-mail: {usr.email}</h2>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}
export default Home
// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom"
// import { AuthContext } from "../context/auth.context";
// import CreateCreation from "../componentes/CreateService";
// import EditProfile from "../componentes/EditProfile";


// import { getUserDetailsService } from "../service/user.services";
// import { getAllServicesService } from "../service/service.services";
// import { useNavigate } from "react-router-dom";

// function Profile() {
//   const { authenticaUser, user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [serviceList, setServiceList] = useState([]);
//   const [isFetching, setIsFetching] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [userDetails, setUserDetails] = useState(null);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       const userDetailsResponse = await getUserDetailsService();
//       setUserDetails(userDetailsResponse.data);

//       const allServiceResponse = await getAllServicesService();
//       setServiceList(allServiceResponse.data);

//       setIsFetching(false);
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setErrorMessage(error.response.data.errorMessage);
//       } else {
//         navigate("/error");
//       }
//     }
//   };

//   if (isFetching === true) {
//     return <h3>Loading</h3>;
//   }

//   return (
//     <div>
//       <h3>Tu perfil</h3>

//       <div>
//         <h4>Mi perfil</h4>
//         <p>{userDetails.firstName}</p>
//         <br />
//         <p>{userDetails.lastName}</p>
//         <br />
//         <p>{userDetails.email}</p>
//         <br />
//         <p>{userDetails.username}</p>
        
//       </div>
//       <br />
//       <hr />
//       <h3>Editar Perfil</h3>
//       <EditProfile updateProfile={getData} />
//       <br />
//       <hr />
//       <h3>Nueva creación </h3>
//       <CreateCreation updateList={getData} />
//       <br />
//       <hr />
//      {/* <h3><Link to="/reviews">Ver Reseñas</Link></h3> */}
     

      
//     </div>
//   );
// }

// export default Profile;
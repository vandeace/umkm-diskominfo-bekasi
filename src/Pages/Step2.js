// import React from "react";
// import InputData from "../Components/InputData";
// import Body from "../Components/Body";
// import NavBar from "../Components/NavBar";
// import styled from "styled-components";
// import { useForm } from "react-hook-form";
// import updateAction from "../Utils/UpdateAction";
// import {
//   Input,
//   Label,
//   Form,
//   Row,
//   Button,
//   Col,
//   InputGroupAddon,
//   InputGroup,
// } from "reactstrap";
// import { Link } from "react-router-dom";

// const Style = styled.div`
//   margin-left: 250px;
//   background-color: #f2f7ff;
//   font-family: "Open Sans", sans-serif;
//   padding: 0 30px 0 30px;
//   overflow: hidden;
//   .custom-container {
//     margin: 30px;
//     padding: 20px 50px 20px 50px;
//     border: 1px solid #dae1e7;
//     font-size: 16px;
//     background-color: #fff;
//     box-shadow: rgba(0, 0, 0, 0.11) 0px 15px 30px 0px,
//       rgba(0, 0, 0, 0.08) 0px 5px 15px 0px;
//   }
// `;

// const Step2 = (props) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: state.data,
//   });

//   console.log(state, "state");

//   const onSubmit = (data) => {
//     console.log(data, "data");
//     actions.updateAction(data);
//     props.history.push("./step2");
//   };

//   return (
//     <Style>
//       <NavBar />
//       <Body>
//         <div className="custom-container">
//           <h1 className="text-center text-uppercase">
//             Form Data Laporan Koperasi
//           </h1>
//           <div className="card"></div>
//           <div className="">
//             <h3 className="px-3">2. PENGURUS KOPERASI</h3>
//             <Form onSubmit={handleSubmit(onSubmit)}>
//               <Row className="p-3">
//                 <Col xl="12" lg="12" md="12" sm="12" className="py-2">
//                   <h5> Data Koperasi</h5>
//                 </Col>
//                 <Col xl="4" lg="4" md="6" sm="12" className="py-2">
//                   <Label htmlFor="nama_koperasi" className="label">
//                     Nama Koperasi
//                   </Label>
//                   <Input
//                     type="text"
//                     name="nama_koperasi"
//                     className="btn-custom"
//                     {...register("nama_koperasi", {
//                       required: true,
//                     })}
//                   />
//                 </Col>
//               </Row>
//               <Row className="p-3 d-flex justify-content-end">
//                 <Col xl="4" lg="4" md="6" sm="12" className="py-2">
//                   <Link to="/step1">
//                     <Button
//                       block
//                       color="primary"
//                       className="bg-success my-3"
//                       // disabled={loading}
//                     >
//                       {/* {loading ? <Spinner color="light" /> : "Masuk"} */}
//                       KEMBALI
//                     </Button>
//                   </Link>
//                 </Col>
//                 <Col xl="4" lg="4" md="6" sm="12" className="py-2">
//                   <Button
//                     block
//                     color="primary"
//                     type="submit"
//                     className="bg-success my-3"
//                     // disabled={loading}
//                   >
//                     {/* {loading ? <Spinner color="light" /> : "Masuk"} */}
//                     SUBMIT
//                   </Button>
//                 </Col>
//               </Row>
//             </Form>
//           </div>
//         </div>
//       </Body>
//     </Style>
//   );
// };

// export default Step2;

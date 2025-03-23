// import React from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import axios from "axios";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Reservation = () => {
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [phone, setPhone] = useState(0);
//   const navigate = useNavigate();

//   const handleReservation = async (e) => {
//     e.preventDefault();
//     try {
//       // const { data } = await axios.post(  
//       //   "http://localhost:6001/reservation/send","https://mern-project-rdr2.onrender.com",
//       //   { firstname, lastname, email, phone, date, time },
//       //   {
//       //     headers: {
//       //       "Content-Type": "application/json",
//       //     },
//       //     withCredentials: true,
//       //   }
//       // );
//       const BASE_URL = "https://mern-project-rdr2.onrender.com";  // Your deployed backend

//       const handleReservation = async () => {
//         try {
//           const { data } = await axios.post(
//             `${BASE_URL}/reservation/send`,
//             { firstname, lastname, email, phone, date, time },
//             {
//               headers: { "Content-Type": "application/json" },
//               withCredentials: true,  // Only needed if using cookies/auth
//             }
//           );
//           console.log("Reservation Successful:", data);
//         } catch (error) {
//           console.error("Error:", error.response ? error.response.data : error.message);
//         }
//       };
//       toast.success(data.message);
//       setFirstName("");
//       setLastName("");
//       setPhone(0);
//       setEmail("");
//       setTime("");
//       setDate("");
//       navigate("/success");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <section className="reservation" id="reservation">
//       <div className="container">
//         <div className="banner">
//           <img src="/reservation.png" alt="res" />
//         </div>
//         <div className="banner">
//           <div className="reservation_form_box">
//             <h1>MAKE A RESERVATION</h1>
//             <p>For Further Questions, Please Call</p>
//             <form>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   value={firstname}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={lastname}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="date"
//                   placeholder="Date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                 />
//                 <input
//                   type="time"
//                   placeholder="Time"
//                   value={time}
//                   onChange={(e) => setTime(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="email_tag"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                   type="number"
//                   placeholder="Phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//               </div>
//               <button type="submit" onClick={handleReservation}>
//                 RESERVE NOW{" "}
//                 <span>
//                   <HiOutlineArrowNarrowRight />
//                 </span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reservation;

import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const BASE_URL = "https://mern-project-rdr2.onrender.com"; // Backend URL

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/reservation/send`,
        { firstname, lastname, email, phone, date, time },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Only if your backend requires cookies
        }
      );

      // Extract data properly
      const data = response.data;
      
      toast.success(data.message);

      // Reset form
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");

      // Navigate to success page
      navigate("/success");

    } catch (error) {
      // Handle errors properly
      toast.error(error.response?.data?.message || "Reservation failed");
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

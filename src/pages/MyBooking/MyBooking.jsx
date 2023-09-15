import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleBooking from "./SingleBooking";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    setLoading(true);
    if (user) {
      fetch(`http://localhost:4000/bookings?email=${user?.email}&sort=1`)
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setBooking(res);
        });
   }
  }, [user]);
  const handleDelete = (id) => {
    setLoading(true);
    fetch(`http://localhost:4000/booking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        const remain = booking.filter((book) => book._id !== id);
        setBooking(remain);
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label></label>
            </th>
            <th></th>
            <th>Name</th>
            <th>price</th>
            <th>Service</th>
            <th>Date</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {booking.length === 0 ? (
            <tr>
              <td>
                <span className="loading loading-dots loading-md justify-center"></span>
              </td>
            </tr>
          ) : (
            booking.map((book) => (
              <SingleBooking
                key={book._id}
                book={book}
                handleDelete={handleDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooking;

import React, { useEffect } from "react";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";
const SingleBooking = ({ book, handleDelete }) => {
 
  const { img, date, price, title, service_id, name, _id } = book;

  return (
    <div>
      <th>
        <label>
          <button className="btn btn-circle" onClick={() => handleDelete(_id)}>
            <ArchiveBoxXMarkIcon className="h-5 w-5" />
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
      </td>
      <td>
        {price}
        <br />
      </td>
      <td>
        {title}
        <br />
      </td>
      <td>{date}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </div>
  );
};

export default SingleBooking;

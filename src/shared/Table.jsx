import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import { PiPrinterFill } from "react-icons/pi";
import { format, parseISO } from "date-fns";
import Pagination from "./Pagination";
import util from "../util/utils";

const Table = ({
  employeeData,
  remove,
  printEmployee,
  employeeList,
  pageChange,
  onSearch,
}) => {
  const navigate = useNavigate();

  const navigateToEdit = (id) => navigate(`edit/${id}`);
  const navigateToAdd = () => navigate(`add`);
  const removeEmployee = (id) => remove(id);
  const printAllData = (id) => printEmployee(id);
  const onPageChange = (page) => pageChange(page);

  const debouncedSearch = useCallback(
    util.debounce((value) => {
      onSearch(value);
    }, 500),
    []
  );

  const handleChange = (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className="container-fluid py-4">
      <div className="card shadow-sm p-4">
      <div className="row align-items-center mb-4 g-2">
  <div className="col-md-6">
    <input
      type="text"
      className="form-control"
      placeholder="Search for customer"
      onChange={handleChange}
      style={{
        width: '80%', // Adjust width to make it narrower
        height: '40px', // Increase height for a more compact look
        padding: '10px', // Adjust padding to maintain proportion
      }}
    />
  </div>
  <div className="col-md-6 text-md-end">
    <button
      className="btn btn-danger d-inline-flex align-items-center"
      onClick={navigateToAdd}
    >
      <IoMdAdd className="me-2" size={20} />
      Verify Customer
    </button>
  </div>
</div>

        <div className="table-responsive">
        <table className="table table-hover text-center align-middle border-0">
  <thead className="table-light">
    <tr>
      <th>Name</th>
      <th>Mobile Number</th>
      <th>Pickup Date</th>
      <th>Drop Date</th>
      <th>Vehicle Name</th>
      <th>Vehicle Number</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {employeeData?.map((employee) => (
      <tr key={employee?._id}>
        <td className="text-start" style={{ height: '60px' }}>
          <div className="d-flex align-items-center">
            <img
              src={employee?.profilePhoto || "/default-profile.png"}
              alt={employee?.firstName || "Customer"}
              className="rounded-circle me-2 border"
              width="40"
              height="40"
            />
            <span className="fw-semibold">{employee?.firstName}</span>
          </div>
        </td>
        <td style={{ height: '60px' }}>{employee?.mobileNumber}</td>
        <td style={{ height: '60px' }}>
          {format(
            parseISO(employee?.bookingInformation?.pickupDateAndTime),
            "yyyy-MM-dd HH:mm a"
          )}
        </td>
        <td style={{ height: '60px' }}>
          {format(
            parseISO(employee?.bookingInformation?.dropDateAndTime),
            "yyyy-MM-dd HH:mm a"
          )}
        </td>
        <td style={{ height: '60px' }}>{employee?.bookingInformation?.vichelName}</td>
        <td style={{ height: '60px' }}>{employee?.bookingInformation?.vichelNumber}</td>
        <td style={{ height: '60px' }}>
          <span
            className={`badge rounded-pill px-3 py-2 fw-normal ${
              employee?.isActive ? "bg-success" : "bg-danger"
            }`}
          >
            {employee?.isActive ? "Active" : "Inactive"}
          </span>
        </td>
        <td style={{ height: '60px' }}>
          <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => navigateToEdit(employee?._id)}
              title="Edit"
            >
              <FaRegEdit size={16} />
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => removeEmployee(employee?._id)}
              title="Remove"
            >
              <CiCircleRemove size={18} />
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => printAllData(employee?._id)}
              title="Print"
            >
              <PiPrinterFill size={18} />
            </button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>


        </div>

        {employeeList && (
          <Pagination
            totalPages={employeeList?.totalPages}
            currentPage={employeeList?.currentPage}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Table;

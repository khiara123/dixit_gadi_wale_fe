import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";

const ProfessionalInfo = ({ register, errors, control }) => {
  const { fields, append, remove } = useFieldArray({ control, name: 'tripInformation' });

  const addItem = () => {
    append({ hotelName: '', roomNumber: '', checkedInDate: '', checkoutDate: '' });
  };

  const removeHotel = (id) => {
    remove(id);
  };

  return (
    <>
      <div className="mb-5 mt-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h5 className="mb-1">Trip Information</h5>
            <small className="text-muted">Please fill all the trip details of the customer.</small>
          </div>
          <div>
            <IoMdAddCircleOutline
              style={{ color: '#f87171', cursor: 'pointer', fontSize: '22px' }}
              onClick={addItem}
            />
          </div>
        </div>
        <hr />

        {fields.map((field, index) => (
          <div key={index} className="row align-items-end mb-3">
            {/* Hotel Name */}
            <div className="col-md-3">
              {index === 0 && <label className="form-label">Hotel Name</label>}
              <input
                type="text"
                className="form-control"
                {...register(`tripInformation.${index}.hotelName`)}
              />
            </div>

            {/* Room Number */}
            <div className="col-md-2">
              {index === 0 && <label className="form-label">Room Number</label>}
              <input
                type="text"
                className="form-control"
                {...register(`tripInformation.${index}.roomNumber`)}
              />
            </div>

            {/* Checked-In Date */}
            <div className="col-md-3">
              {index === 0 && <label className="form-label">Checked-In Date</label>}
              <input
                type="date"
                className="form-control"
                {...register(`tripInformation.${index}.checkedInDate`)}
              />
            </div>

            {/* Checked-Out Date */}
            <div className="col-md-3">
              {index === 0 && <label className="form-label">Checked-Out Date</label>}
              <input
                type="date"
                className="form-control"
                {...register(`tripInformation.${index}.checkoutDate`)}
              />
            </div>

            {/* Remove Icon */}
            <div className="col-md-1 text-center">
              {index !== 0 && (
                <span
                  className="text-danger fs-4"
                  style={{ cursor: 'pointer' }}
                  onClick={() => removeHotel(index)}
                >
                  <CiCircleRemove />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfessionalInfo;

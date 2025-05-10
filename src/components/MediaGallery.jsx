import React, { useState, useEffect } from 'react';
import Loader from '../shared/Loader';
import authService from "../services/authService";
import './Gallery.css';

const mediaItems = [
  {
    type: 'image',
    url: 'https://res.cloudinary.com/demo/image/upload/v1699999999/sample.jpg',
    title: 'Event One',
    description: 'Annual Gala Night',
  },
  {
    type: 'video',
    url: 'https://res.cloudinary.com/demo/video/upload/v1700000000/dog.mp4',
    title: 'Behind The Scenes',
    description: 'Setup and preparation moments',
  },
  {
    type: 'image',
    url: 'https://res.cloudinary.com/demo/image/upload/v1700000011/beach.jpg',
    title: 'Beach Party',
    description: 'Fun at the beach',
  },
];

export default function MediaGallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mediaItems , setMediaItems] = useState([]);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    authService
      .userGallary()
      .then((data) => {
        if(data && data?.data  && data?.data?.length > 0) {
          setMediaItems(data?.data || []);
            setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader isLoading={loading} />
      ) : (
        <div className="container py-5">
          <h2 className="mb-4 text-center">Media Gallery</h2>
          <div className="row">
            {mediaItems.map((item, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div
                  className="card shadow-sm h-100"
                  onClick={() => setSelectedItem(item)}
                  style={{ cursor: 'pointer' }}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      className="card-img-top"
                      alt={item.title}
                    />
                  ) : (
                    <video className="card-img-top" controls>
                      <source src={item.url} type="video/mp4" />
                    </video>
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedItem && (
            <div
              className="modal show fade"
              style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }}
              tabIndex="-1"
              onClick={() => setSelectedItem(null)}
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{selectedItem.title}</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setSelectedItem(null)}
                    ></button>
                  </div>
                  <div className="modal-body text-center">
                    {selectedItem.type === 'image' ? (
                      <img
                        src={selectedItem.url}
                        className="img-fluid"
                        alt={selectedItem.title}
                      />
                    ) : (
                      <video className="img-fluid" controls>
                        <source src={selectedItem.url} type="video/mp4" />
                      </video>
                    )}
                  </div>
                  <div className="modal-footer">
                    <p className="text-muted">{selectedItem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

import React from 'react';
import './AddYourOwn.css';
import { PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AddYourOwn() {
  const navigate = useNavigate();

  function handleAddNew() {
    navigate('/add-listing'); 
  }

  return (
    <section className="add-your-own-section py-5">
      <div className="container">
        <div className="card add-own-card px-4 py-4">
          <div className="d-flex align-items-center">
            <PlusCircle color="#19B3C9" size={28} className="me-3 add-own-icon"/>
            <div>
              <h5 className="mb-2 fw-semibold">Add your own</h5>
              <p className="mb-4 add-own-desc">
                Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets?
                Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
              </p>
              <button
                className="btn btn-outline-primary add-own-btn"
                onClick={handleAddNew}
              >
                Add new
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddYourOwn;

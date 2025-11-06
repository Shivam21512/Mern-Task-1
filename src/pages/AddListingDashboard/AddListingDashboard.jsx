import React from 'react';
import './AddListingDashboard.css';
import { Users, MapPin, ShoppingCart, CalendarCheck, PlusCircle } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';

const cards = [
  {
    title: 'People',
    desc: 'An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.',
    icon: <Users size={26} color="currentColor" />,
    colorClass: 'add-card-people'
  },
  {
    title: 'Place',
    desc: 'An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.',
    icon: <MapPin size={26} color="currentColor" />,
    colorClass: 'add-card-place'
  },
  {
    title: 'Product',
    desc: 'An item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.',
    icon: <ShoppingCart size={26} color="currentColor" />,
    colorClass: 'add-card-product'
  },
  {
    title: 'Program',
    desc: 'An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.',
    icon: <CalendarCheck size={26} color="currentColor" />,
    colorClass: 'add-card-program'
  }
];

function AddListingDashboard() {
  return (
    <>
      <Navbar />
      <div className="add-listing-bg">
        <div className="add-listing-container card px-5 py-4">
          <div className="text-center mb-4 mt-1">
            <PlusCircle color="#18B3C5" size={28} className="me-2 mb-1"/>
            <span className="add-listing-title fw-semibold">
              Add Your Listing
            </span>
          </div>
          <div className="row g-3">
            {cards.map(card => (
              <div className="col-12 col-md-6" key={card.title}>
                <div className={`add-card h-100 px-3 py-3 ${card.colorClass}`}>
                  <div className="d-flex align-items-center mb-2">
                    {card.icon}
                    <span className="add-card-title fw-semibold ms-2">{card.title}</span>
                  </div>
                  <div className="add-card-desc">
                    {card.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddListingDashboard;

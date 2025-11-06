import React from 'react';
import './ListingGrid.css';
import { Users, MapPin, ShoppingCart, CalendarCheck } from 'lucide-react';

const listingData = [
  {
    title: 'People',
    desc: 'Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.',
    btn: 'Connect',
    icon: <Users color="#8B6CB6" size={32} />,
    colorClass: 'card-people'
  },
  {
    title: 'Place',
    desc: 'Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.',
    btn: 'Meet up',
    icon: <MapPin color="#A2C451" size={32} />,
    colorClass: 'card-place'
  },
  {
    title: 'Product',
    desc: 'Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.',
    btn: 'Get it',
    icon: <ShoppingCart color="#E06244" size={32} />,
    colorClass: 'card-product'
  },
  {
    title: 'Program',
    desc: 'Find events, meetups and workshops related to your hobby. Register or buy tickets online.',
    btn: 'Attend',
    icon: <CalendarCheck color="#46A3F7" size={32} />,
    colorClass: 'card-program'
  }
];

function ListingGrid() {
  return (
    <section className="listing-grid my-5">
      <div className="container">
        <div className="row g-4">
          {listingData.map((item, idx) => (
            <div className="col-md-6 col-12" key={item.title}>
              <div className={`card h-100 grid-card ${item.colorClass}`}>
                <div className="card-body">
                  <div className="mb-3 grid-card-icon">{item.icon}</div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <button className="btn btn-outline-primary">{item.btn}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListingGrid;

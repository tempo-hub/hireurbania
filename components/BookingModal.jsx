"use client";

import { useState, useEffect } from "react";
import {
  X,
  Send,
  User,
  Phone,
  MapPin,
  Navigation,
  Calendar,
  Bus,
  MessageSquare,
} from "lucide-react";

export default function BookingModal({ isOpen, onClose, prefillData = {} }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [dest, setDest] = useState("");
  const [date, setDate] = useState("");
  const [vehicle, setVehicle] = useState("Force Urbania 12 Seater");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (prefillData.origin) setPickup(prefillData.origin);
    if (prefillData.destination) setDest(prefillData.destination);
    if (prefillData.vehicle) setVehicle(prefillData.vehicle);
    if (prefillData.packageTitle)
      setNotes(`Interested in Package: ${prefillData.packageTitle}`);
    if (prefillData.notes) setNotes(prefillData.notes);
  }, [prefillData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const textMessage =
      `*New Force Urbania Booking Query*%0A` +
      `👤 *Name:* ${encodeURIComponent(name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
      `📍 *Pickup:* ${encodeURIComponent(pickup)}%0A` +
      `🏁 *Destination:* ${encodeURIComponent(dest)}%0A` +
      `📅 *Date:* ${encodeURIComponent(date)}%0A` +
      `🚐 *Vehicle:* ${encodeURIComponent(vehicle)}%0A` +
      `📝 *Notes:* ${encodeURIComponent(notes || "None")}`;

    const whatsappUrl = `https://wa.me/918448445504?text=${textMessage}`;
    window.open(whatsappUrl, "_blank");
    onClose();
    alert(
      `Thank you ${name}! Your query has been formatted for WhatsApp booking.`,
    );
  };

  return (
    <div class="modal-overlay active">
      <div class="modal-container">
        <button
          onClick={onClose}
          class="modal-close-btn"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div style={{ marginBottom: "1.5rem" }}>
          <span class="badge-pill">
            <Send size={12} /> Instant Confirmation
          </span>
          <h3 style={{ fontSize: "1.6rem", marginTop: "0.5rem" }}>
            Book Your Force Urbania
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Fill in your travel details to generate a formatted WhatsApp quote
            request.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div class="booking-form-grid">
            <div class="form-group">
              <label class="form-label">
                <User size={14} /> Full Name
              </label>
              <input
                type="text"
                class="form-input"
                placeholder="e.g. Rajesh Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">
                <Phone size={14} /> Phone Number
              </label>
              <input
                type="tel"
                class="form-input"
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">
                <MapPin size={14} /> Pickup City
              </label>
              <input
                type="text"
                class="form-input"
                placeholder="e.g. Delhi / Noida / Indore"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">
                <Navigation size={14} /> Destination
              </label>
              <input
                type="text"
                class="form-input"
                placeholder="e.g. Manali / Kedarnath / Ujjain"
                value={dest}
                onChange={(e) => setDest(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">
                <Calendar size={14} /> Departure Date
              </label>
              <input
                type="date"
                class="form-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">
                <Bus size={14} /> Preferred Seater
              </label>
              <select
                class="form-select"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                required
              >
                <option value="Force Urbania 9 Seater">
                  9 Seater VIP Recliner
                </option>
                <option value="Force Urbania 12 Seater">
                  12 Seater Executive
                </option>
                <option value="Force Urbania 16 Seater">
                  16 Seater Premium
                </option>
                <option value="Force Urbania 17 Seater">
                  17 Seater Super Luxury
                </option>
                <option value="Force Urbania 20 Seater">
                  20 Seater Maharaja
                </option>
              </select>
            </div>

            <div class="form-group full-width">
              <label class="form-label">
                <MessageSquare size={14} /> Special Requirements / Itinerary
                Notes
              </label>
              <textarea
                class="form-input"
                rows={3}
                placeholder="e.g. Char Dham 10 days tour, luggage roof rack needed, senior citizen travel..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            class="btn btn-whatsapp"
            style={{ width: "100%", fontSize: "1.05rem" }}
          >
            <MessageSquare size={18} /> Submit & Request Quote on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

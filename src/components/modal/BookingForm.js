import { useState } from "react";
import { useModal } from "./ModalContext";
import { supabase } from "../superbase/SuperClient";

export default function BookingForm() {
  const { isOpen, closeModal } = useModal();
  const [message, setmessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    time: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.mobile))
      return "Enter a valid 10-digit mobile number";
    if (!form.date) return "Date is required";
    if (!form.time) return "Time is required";

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(form.date);

    if (selectedDate < today) return "Past dates are not allowed";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setmessage("");

      const { error } = await supabase.from("nestoric_booking").insert([
        {
          name: form.name.trim(),
          mobile: form.mobile,
          date: form.date,
          time: form.time,
        },
      ]);

      if (error) throw error;
      setmessage("Submitted Successfully");

      // Reset + close
      setForm({ name: "", mobile: "", time: "", date: "" });
      // ✅ Close AFTER showing message
      setTimeout(() => {
        setmessage("");
        closeModal();
      }, 1800);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={closeModal} />

      <div className="relative w-[90%] max-w-md bg-white rounded-2xl p-6 md:p-8 shadow-xl animate-scaleIn">
        <button
          className="text-red-800 w-full flex justify-end p-1"
          onClick={closeModal}
        >
          X
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-500">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full mt-1 rounded-lg border px-4 py-2 focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="text-sm text-gray-500">Mobile</label>
            <input
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              maxLength={10}
              placeholder="Mobile"
              className="w-full mt-1 rounded-lg border px-4 py-2 focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Time & Date */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-500">Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full mt-1 rounded-lg border px-4 py-2"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full mt-1 rounded-lg border px-4 py-2"
              />
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-sm text-red-600 text-center">{error}</p>}
          {message && (
            <p className="text-sm text-green-800 text-center">{message}</p>
          )}
          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 rounded-full bg-[#353535] text-white text-lg font-medium hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit →"}
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import {
  CreditCard,
  IndianRupee,
  ArrowRight,
  QrCode,
  ShieldCheck,
} from "lucide-react";

const Payment = () => {
  const { id } = useParams();
  const [pitchinfo, setpitchinfo] = useState(null);

  const onsst = async () => {
    const pitch = await axios.get(`http://localhost:8080/pitch/${id}`);
    setpitchinfo(pitch.data.compname);
  };

  useEffect(() => {
    onsst();
  }, []);

  const [fullname, setfullname] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [Zip, setZip] = useState("");
  const [upi, setupi] = useState("");
  const navigate = useNavigate();

  const pay = async () => {
    const email = localStorage.getItem("email");
    const paym = await axios.post("http://localhost:8080/pitch/payment", {
      fullname,
      pitchid: id,
      cardnumber,
      zip: Zip,
      upi,
      email,
    });
    if (paym.data.name === "success save") {
      navigate("/explore");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10 animate-fadeIn">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Complete Your Order
          </h1>
          <p className="text-gray-600 mt-3 flex items-center justify-center gap-2">
            Supporting{" "}
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-semibold rounded-full shadow-sm">
              {pitchinfo}
            </span>
          </p>
        </div>

        {/* Payment Options */}
        <div className="space-y-10">
          {/* Card Section */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-700 mb-5">
              <CreditCard className="w-6 h-6 text-indigo-600" />
              Pay with Card
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                onChange={(e) => setCardnumber(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 shadow-inner focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                type="text"
                placeholder="Cardholder Name"
                onChange={(e) => setfullname(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 shadow-inner focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                type="text"
                placeholder="Zip / Postal Code"
                onChange={(e) => setZip(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 shadow-inner focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* UPI Section */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-700 mb-5">
              <QrCode className="w-6 h-6 text-green-600" />
              Pay with UPI
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter UPI ID"
                onChange={(e) => setupi(e.target.value)}
                className="w-full border rounded-xl px-4 py-3 shadow-inner focus:ring-2 focus:ring-green-400 outline-none"
              />
              {/* QR Code Preview (Static Demo) */}
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-xl shadow-md border">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=example@upi"
                    alt="UPI QR"
                    className="rounded-md"
                  />
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Scan to pay via UPI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <div className="mt-12 text-center">
          <button
            onClick={pay}
            className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-200"
          >
            <IndianRupee className="w-6 h-6" />
            Pay Securely
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="mt-4 text-gray-500 text-sm flex items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            100% Secure Payment Gateway
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [step, setStep] = useState<"enter" | "otp">("enter");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  // ---- Send OTP ----
  const handleSendOtp = () => {
    if (!phone) {
      alert("Please enter your phone number.");
      return;
    }

    console.log("Sending OTP to:", phone);

    // call your API here → sendOTP(phone)
    // Firebase: signInWithPhoneNumber()
    // Custom backend: POST /send-otp
    
    setStep("otp");
  };

  // ---- Verify OTP ----
  const handleVerifyOtp = () => {
    console.log("Verifying OTP:", otp);

    // call your API here → verifyOTP(phone, otp)
    // Firebase: confirmationResult.confirm(otp)

    if (otp.length === 6) {
      alert("Authenticated!");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          w-full max-w-md p-10 rounded-2xl
          bg-white/[0.04] backdrop-blur-xl border border-white/10
          shadow-[0_0_40px_rgba(0,0,0,0.35)]
        "
      >
        {/* HEADER */}
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
          {isLogin ? "Login" : "Create an Account"}
        </h2>

        <p className="text-center text-white/50 mb-8">
          {isLogin
            ? "Login using your mobile number"
            : "Sign up instantly with OTP verification"}
        </p>

        {/* ========= STEP 1 — ENTER PHONE ========= */}
        {step === "enter" && (
          <>
            <label className="text-white/60 text-sm">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter your phone..."
              className="
                w-full mt-1 px-4 py-3 rounded-xl 
                bg-white/[0.08] border border-white/10 text-white 
                focus:outline-none focus:border-teal-400
              "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <Button
              onClick={handleSendOtp}
              className="
                w-full py-3 text-lg mt-6 rounded-xl
                bg-gradient-to-r from-teal-500 to-violet-500 
                hover:from-teal-600 hover:to-violet-600 
                text-white border-0
              "
            >
              Send OTP
            </Button>
          </>
        )}

        {/* ========= STEP 2 — ENTER OTP ========= */}
        {step === "otp" && (
          <>
            <p className="text-white/50 text-sm mb-3">
              OTP sent to <span className="text-teal-400">{phone}</span>
            </p>

            <label className="text-white/60 text-sm">Enter OTP</label>
            <input
              type="text"
              maxLength={6}
              placeholder="6-digit code"
              className="
                w-full mt-1 px-4 py-3 rounded-xl 
                bg-white/[0.08] border border-white/10 text-white 
                text-center tracking-widest text-lg
                focus:outline-none focus:border-violet-400
              "
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            {/* VERIFY OTP */}
            <Button
              onClick={handleVerifyOtp}
              className="
                w-full py-3 text-lg mt-6 rounded-xl
                bg-gradient-to-r from-teal-500 to-violet-500 
                hover:from-teal-600 hover:to-violet-600 
                text-white border-0
              "
            >
              Verify OTP
            </Button>

            {/* RESEND OTP */}
            <button
              onClick={handleSendOtp}
              className="text-teal-400 text-sm mt-4 block mx-auto hover:text-teal-300"
            >
              Resend OTP
            </button>
          </>
        )}

        {/* Toggle Sign-up/Login */}
        <p className="text-center mt-6 text-white/50">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setStep("enter");
            }}
            className="text-teal-400 ml-1 hover:text-teal-300"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

        {/* Back to Home */}
        <p className="text-center mt-4">
          <Link to="/" className="text-white/40 hover:text-white/70 text-sm">
            ← Back to home
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
export function SignUp() {
  return <AuthPage />;
}
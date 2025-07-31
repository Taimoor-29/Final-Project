import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useSession } from "../hooks/useSession";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginVideo from "../assets/login-video.mp4";

const Login = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const { session } = useSession();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
  };

  useEffect(() => {
    if (session) {
      toast.success(`Welcome, ${session.user.email}!`);
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <section className="min-h-screen bg-[#FFF9E5] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Gold Flares */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFD700] opacity-10 rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#B8860B] opacity-10 rounded-tl-full" />

      <div className="relative z-10 max-w-5xl w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        {/* Left: Video */}
        <div className="w-full lg:w-1/2 max-w-md relative group">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square border-4 border-white transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={loginVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute -inset-4 border-2 border-[#FFD700] rounded-3xl -z-10" />
          <div className="absolute -inset-6 border border-[#E6BE8A] rounded-3xl -z-20" />
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-1/2 max-w-md relative">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[#FFF2CC] relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#DAA520] mb-2 font-serif">
                RecipeRemedy Login
              </h2>
              <p className="text-[#B8860B]">Unlock your personalized cooking experience</p>
            </div>

            {sent ? (
              <div className="text-center p-6 bg-[#FFFDF5] rounded-xl border border-[#E6BE8A]">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#FAF3D3] p-3 rounded-full">
                    <svg className="w-8 h-8 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#8B7500] mb-2">Check Your Email!</h3>
                <p className="text-[#B8860B] mb-4">
                  We've sent a magic link to <span className="font-medium text-[#DAA520]">{email}</span>
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-sm text-[#DAA520] hover:text-[#B8860B] font-medium"
                >
                  Resend link or try another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#8B7500] mb-2">
                    Your Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-[#E6BE8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="pl-10 w-full px-4 py-3 rounded-xl border border-[#E6BE8A] focus:ring-2 focus:ring-[#FFD700] focus:border-transparent bg-[#FFFDF0] text-[#5C4B00] placeholder-[#D2B48C]"
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-start bg-red-50 p-3 rounded-lg border border-red-200">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-red-600">{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#DAA520] text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]"
                >
                  Send Magic Link
                  <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            )}

            <div className="mt-8 text-center text-sm text-[#A68C00]">
              <p>First time here? Your login will create an account automatically</p>
            </div>
          </div>

          <div className="absolute -inset-2 bg-[#FFF3C1] rounded-3xl -z-10 blur-sm" />
          <div className="absolute -inset-4 bg-[#FFF9E5] rounded-3xl -z-20 opacity-70" />
        </div>
      </div>

      <ToastContainer
        position="top-center"
        toastClassName="bg-[#FFFDF0] text-[#5C4B00] font-medium border border-[#E6BE8A]"
        progressClassName="bg-gradient-to-r from-[#FFD700] to-[#DAA520]"
        autoClose={3000}
      />
    </section>
  );
};

export default Login;

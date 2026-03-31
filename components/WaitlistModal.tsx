"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import OrnateCorners from "@/components/ui/OrnateCorners";
import GoldDivider from "@/components/ui/GoldDivider";

type UserType = "Patient" | "Dermatologist" | "Investor" | "Other" | "";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType>("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim() || !email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!userType) newErrors.userType = "Please select one";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      try {
        const existing = JSON.parse(
          localStorage.getItem("lumeria_waitlist_full") || "[]"
        );
        existing.push({
          firstName,
          lastName,
          email,
          userType,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem("lumeria_waitlist_full", JSON.stringify(existing));
      } catch {}
      setSubmitted(true);
      setLoading(false);
    }, 700);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after animation
    setTimeout(() => {
      setSubmitted(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setUserType("");
      setErrors({});
    }, 300);
  };

  const inputClass =
    "w-full font-inter text-sm px-4 py-3 bg-white border border-primary-gold/25 rounded-sm text-dark-text placeholder:text-dark-text/35 focus:outline-none focus:border-primary-gold focus:ring-1 focus:ring-primary-gold/30 transition-all";

  const errorClass = "font-inter text-xs text-red-500 mt-1";

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <AnimatePresence>
          {open && (
            <>
              {/* Overlay */}
              <Dialog.Overlay asChild>
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-50 bg-card-dark/80 backdrop-blur-sm"
                />
              </Dialog.Overlay>

              {/* Modal */}
              <Dialog.Content asChild>
                <motion.div
                  key="content"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-auto"
                >
                  <div className="relative bg-cream border border-primary-gold/30 rounded-sm shadow-2xl p-8 overflow-hidden mx-4">
                    <OrnateCorners size={32} />

                    {/* Close button */}
                    <Dialog.Close asChild>
                      <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center text-dark-text/40 hover:text-primary-gold transition-colors z-10"
                        aria-label="Close"
                      >
                        <X size={16} />
                      </button>
                    </Dialog.Close>

                    <div className="relative z-10">
                      {submitted ? (
                        /* Success state */
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-center py-6"
                        >
                          {/* Gold checkmark */}
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              damping: 15,
                              delay: 0.1,
                            }}
                            className="w-16 h-16 rounded-full border-2 border-primary-gold bg-primary-gold/10 flex items-center justify-center mx-auto mb-6"
                          >
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                            >
                              <path
                                d="M6 14L11 19L22 8"
                                stroke="#C9A84C"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                          <h3 className="font-playfair text-2xl font-semibold text-dark-text mb-3">
                            You&apos;re on the list.
                          </h3>
                          <p className="font-inter text-sm text-dark-text/60 mb-6">
                            We&apos;ll be in touch soon. Thank you for your
                            interest in Lumeria.
                          </p>
                          <GoldDivider />
                          <p className="font-inter text-xs text-dark-text/40 mt-4 italic">
                            Illuminate your skin with clinical clarity.
                          </p>
                        </motion.div>
                      ) : (
                        /* Form state */
                        <>
                          <div className="text-center mb-6">
                            <p className="font-inter text-xs text-primary-gold/70 tracking-[0.25em] uppercase mb-2">
                              Early Access
                            </p>
                            <h2 className="font-playfair text-2xl font-semibold text-dark-text mb-3">
                              Join the Waitlist
                            </h2>
                            <GoldDivider />
                          </div>

                          <form onSubmit={handleSubmit} noValidate>
                            {/* Name row */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div>
                                <input
                                  type="text"
                                  value={firstName}
                                  onChange={(e) => setFirstName(e.target.value)}
                                  placeholder="First Name"
                                  className={inputClass}
                                />
                                {errors.firstName && (
                                  <p className={errorClass}>{errors.firstName}</p>
                                )}
                              </div>
                              <div>
                                <input
                                  type="text"
                                  value={lastName}
                                  onChange={(e) => setLastName(e.target.value)}
                                  placeholder="Last Name"
                                  className={inputClass}
                                />
                                {errors.lastName && (
                                  <p className={errorClass}>{errors.lastName}</p>
                                )}
                              </div>
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className={inputClass}
                              />
                              {errors.email && (
                                <p className={errorClass}>{errors.email}</p>
                              )}
                            </div>

                            {/* User type dropdown */}
                            <div className="mb-6 relative">
                              <select
                                value={userType}
                                onChange={(e) =>
                                  setUserType(e.target.value as UserType)
                                }
                                className={`${inputClass} appearance-none cursor-pointer pr-10 ${
                                  userType === "" ? "text-dark-text/35" : "text-dark-text"
                                }`}
                              >
                                <option value="" disabled>
                                  I am a...
                                </option>
                                <option value="Patient">Patient</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Investor">Investor</option>
                                <option value="Other">Other</option>
                              </select>
                              <ChevronDown
                                size={14}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-gold/60 pointer-events-none"
                              />
                              {errors.userType && (
                                <p className={errorClass}>{errors.userType}</p>
                              )}
                            </div>

                            <button
                              type="submit"
                              disabled={loading}
                              className="w-full font-inter font-semibold text-sm py-3.5 bg-primary-gold text-card-dark rounded-sm hover:bg-deep-gold transition-colors disabled:opacity-60 tracking-wide uppercase"
                            >
                              {loading ? "Submitting..." : "Request Early Access"}
                            </button>

                            <p className="font-inter text-xs text-dark-text/35 text-center mt-3">
                              No spam. Unsubscribe at any time.
                            </p>
                          </form>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

import { useMutation } from '@tanstack/react-query';
import React, { useState, useEffect, useContext } from 'react';
import { apiClient } from '../api/apiClient';
import { FormData } from '../main';

const ResendOtpButton = () => {
  const [countdown, setCountdown] = useState(60); // 2 minutes in seconds
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const { formData } = useContext(FormData);

  const mutation = useMutation({
    mutationFn: (email) =>
      apiClient({
        url: "https://college-backend-tyea.onrender.com/api/resendOtp",
        method: "POST",
        data: { email }, // Correct data structure
      }),
    onSuccess: () => {
      alert("otp sent..")
    },
    onError: (error) => {
      alert(error.response?.data?.message || "Failed to resend OTP");
    },
  });

  const handleResendOtp = () => {
    if (isResendEnabled && formData?.email) {
      setCountdown(60);
      setIsResendEnabled(false);
      mutation.mutate(formData?.email);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (countdown === 0) {
      setIsResendEnabled(true);
      return;
    }

    const timer = setInterval(() => {
      if (isMounted) {
        setCountdown((prev) => Math.max(prev - 1, 0));
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, [countdown]);

  // Format seconds with leading zero
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div>
      <span>{countdown > 0 ? formatTime(countdown) : '0:00'}</span>
      <button
        onClick={handleResendOtp}
        disabled={!isResendEnabled || !formData?.email}
      >
        Resend OTP
      </button>
    </div>
  );
};

export default ResendOtpButton;
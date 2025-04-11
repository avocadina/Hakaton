import { useState } from "react";

interface ContactFormI {
  email: string;
  number: string;
}

const contactSkeleton: ContactFormI = {
  email: "",
  number: "",
};

export const useContacts = () => {
  const [formData, setFormData] = useState<ContactFormI>(contactSkeleton);
  const [status, setStatus] = useState<string>("Ok");

  const handleChange = (value: string, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSend = async () => {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ toEmail: formData.email }),
    });

    const data = await res.json();
    setStatus(data.message);
  };

  return {
    formData,
    handleChange,
    handleSend,
    status,
  };
};

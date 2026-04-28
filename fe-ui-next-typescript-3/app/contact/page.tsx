"use client";

import Button from "@/components/ui/Button";
import FieldInput from "@/components/ui/FieldInput";
import MainLayout from "@/layout/MainLayout";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");

  return (
    <MainLayout>
      <div className="contactPage py-5">
        <div className="container mx-auto">
          <div className="innerContent">
            <h2 className="text-2xl">Contact</h2>
            <FieldInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              maxLength={20}
            />

            <p>{name.length}/20</p>

            <Button
              onClick={() => alert(name)}
              disabled={!name}
              leftIcon={<span>👈</span>}
              rightIcon={<span>👉</span>}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;

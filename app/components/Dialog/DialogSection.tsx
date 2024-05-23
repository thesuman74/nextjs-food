"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";

export function DialogSection() {
  const [isOpen, setIsOpen] = useState(true); // Initialize to true to open dialog on page load

  useEffect(() => {
    // Optionally, you can add logic here if you want to control when the dialog should appear
    setIsOpen(true);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[600px] h-[400px] p-2 ">
        <div className="flex items-center justify-center h-full">
          <img
            src="/Images/food1.png" // Correct path to the image in the public directory
            alt="Descriptive Alt Text"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogSection;

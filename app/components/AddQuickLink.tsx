"use client";
import { useState } from "react";
import Image from "next/image";
import { ICON_WIDTH } from "./QuickLink";
import Input from "./Input";

export default function AddQuickLink() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={handleOpen} className="cursor-pointer">
        <div className="p-1 flex flex-col justify-center items-center w-20">
          <div className="bg-slate-700/25 shadow shadow-black w-15 h-15 rounded-xl flex items-center justify-center mb-2">
            <Image
              src="plus.svg"
              alt="Add"
              width={ICON_WIDTH}
              height={ICON_WIDTH}
            />
          </div>
          <h4 className="text-ellipsis overflow-hidden max-w-30">Add</h4>
        </div>
      </button>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </>
  );
}

type ModalProps = {
  onClose: () => void;
};

function Modal({ onClose }: ModalProps) {
  const handleSubmit = () => {
    // Load file content
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-slate-700 p-4 rounded">
        <div className="mb-4">
          <h3 className="text-2xl">Add a Quicklink</h3>
        </div>
        <form className="flex flex-col gap-3 mb-3">
          <Input title="Name" name="name" placeholder="e.g. Google" />
          <Input title="URL" name="url" placeholder="e.g. www.google.com" />
          <div>
            <div className="flex gap-3 float-end">
              <button
                onClick={onClose}
                className="cursor-pointer px-2 py-1.5 rounded bg-amber-600"
                type="button"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="cursor-pointer px-2 py-1.5 rounded bg-green-700"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

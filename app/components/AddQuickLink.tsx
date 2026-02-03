"use client";
import Image from "next/image";
import { FormEventHandler, useState } from "react";
import Input from "./Input";
import { ICON_WIDTH } from "./QuickLink";
import { createPortal } from "react-dom";
import { QuickLink as QuickLinkType } from "@types/core";

type AddQuickLinkProps = {
  onCreateAction: (link: QuickLinkType) => void;
};

export default function AddQuickLink({ onCreateAction }: AddQuickLinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        <div className="p-1 flex flex-col justify-center items-center w-20 transform transition hover:scale-105">
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

      {isOpen &&
        createPortal(
          <Modal
            onClose={() => setIsOpen(false)}
            onCreate={(link) => {
              onCreateAction(link);
              setIsOpen(false);
            }}
          />,
          document.getElementById("modal-root")!,
        )}
    </>
  );
}

type ModalProps = {
  onClose: () => void;
  onCreate: (link: QuickLinkType) => void;
};

function Modal({ onClose, onCreate }: ModalProps) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/quicklink", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, url }),
    });

    const created = await res.json();
    onCreate(created);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-slate-700 p-4 rounded">
        <div className="mb-4">
          <h3 className="text-2xl">Add a Quicklink</h3>
        </div>
        <form className="flex flex-col gap-3 mb-3" onSubmit={handleSubmit}>
          <Input
            title="Name"
            name="name"
            placeholder="e.g. Google"
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            title="URL"
            name="url"
            placeholder="e.g. www.google.com"
            onChange={(event) => setUrl(event.target.value)}
          />
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

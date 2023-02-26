import { useState } from "react";
import { Dialog } from "@headlessui/react";

export const Modal = ({
  children,
  open,
  title,
  onClose,
}: {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title?: string;
}) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-24">
          {title && (
            <Dialog.Title className="typography-heading-4">
              {title}
            </Dialog.Title>
          )}

          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

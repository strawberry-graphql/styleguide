import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Caption } from "../typography/caption";
import { MenuCloseIcon } from "../icons/menu-close";

export const Modal = ({
  children,
  open,
  title,
  label,
  onClose,
  showCloseIcon = true,
}: {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title?: string;
  label?: string;
  showCloseIcon?: boolean;
}) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-24">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto max-w-screen-sm rounded-[16px] bg-white p-24 pr-64 pb-48 relative">
          {label && <Caption className="text-g-500">{label}</Caption>}
          {title && (
            <Dialog.Title className="typography-heading-4">
              {title}
            </Dialog.Title>
          )}

          {children}

          {showCloseIcon && (
            <MenuCloseIcon
              className="absolute top-24 right-24"
              onClick={onClose}
            />
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

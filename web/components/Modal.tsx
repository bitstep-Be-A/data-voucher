"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { classNames } from "@/utils";

import { CheckIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export interface ModalButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export const ModalButton: React.FC<ModalButtonProps> = (props) => {
  return (
    <Link
      href="/modal"
      className={props.className}
    >
      {props.children}
    </Link>
  )
}

export interface CloseModalButtonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CloseModalButton: React.FC<CloseModalButtonProps> = (props) => {
  const router = useRouter();

  return (
    <button onClick={() => { router.back() }}
      className={classNames("flex justify-center items-center", props.className)}
      style={props.style}
    >
      { props.children }
    </button>
  );
}

export interface ModalProps {
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const router = useRouter();
  return (
    <div className="absolute inset-0 w-screen h-screen flex flex-col justify-center items-center z-40 bg-gray-500 bg-opacity-75 transition-opacity"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        router.back();
      }}
    >
      <div className="z-50">
        {props.children}
      </div>
    </div>
  );
}

export default Modal;

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Modal(props) {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 backdrop-blur-sm bg-white/10 dark:bg-black/75 z-50 overflow-y-auto"
        onClose={props.onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block relative w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white/90 dark:bg-black/50 border-2 border-dashed shadow-xl rounded-2xl dark:border-gray-600">
              <a
                onClick={props.onClose}
                className="absolute cursor-pointer dark:bg-black bg-white right-3 top-3 border-2 rounded-full p-2 border-dashed z-50 dark:border-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 dark:text-white text-black w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </a>
              {props.children}
            </div>
          </Transition.Child>
        </div>
        {props.action}
      </Dialog>
    </Transition>
  );
}

// components/Modal.js
import React, { useState } from 'react';

interface IProps{
    isOpen: any;
    onClose: any;
}

const ResumeModal = ({ isOpen, onClose }: IProps) => {
  if (!isOpen) return null;


  return (
    <div
      id="default-modal"
      className="flex items-center justify-center bg-gray-900 bg-opacity-50 z-[999]"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-700 rounded-lg shadow-md max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Terms of Service
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 space-y-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </div>
        <div className="flex items-center p-4 border-t dark:border-gray-600">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 rounded-lg"
            onClick={onClose}
          >
            I accept
          </button>
          <button
            type="button"
            className="ml-3 py-2.5 px-5 text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
            onClick={onClose}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;

import React from 'react';
import { Link } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/outline';

const PaymentFailed = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-gray-50 p-10 rounded-lg shadow-lg text-center">
        <XCircleIcon className="h-24 w-24 text-red-500 mx-auto" />
        <h1 className="text-3xl font-bold mt-4 text-gray-800">Payment Failed</h1>
        <p className="text-gray-600 mt-2">We're sorry, but the transaction could not be completed.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition"
          >
            Try Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;

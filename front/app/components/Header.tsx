import { Disclosure } from "@headlessui/react";
import React, { useState, useEffect } from "react";

type Props = {};

export const Header: React.FC<Props> = () => {
  const [isBackendConnected, setIsBackendConnected] = useState<boolean | null>(null);

  const checkBackendConnection = async () => {
    try {
      const response = await fetch('http://localhost:8000/', {
        method: 'GET',
        signal: AbortSignal.timeout(5000), // 5 second timeout
      });
      setIsBackendConnected(response.ok);
    } catch (error) {
      setIsBackendConnected(false);
    }
  };

  useEffect(() => {
    // Check connection immediately
    checkBackendConnection();

    // Check connection every 30 seconds
    const interval = setInterval(checkBackendConnection, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Disclosure as="nav" className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-auto text-teal-500"
              >
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
            </div>
            <div className="sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="/"
                className="inline-flex items-center px-1 pt-1 font-medium text-gray-900"
              >
                Manga Translator
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              {/* Backend Connection Status Badge */}
              <div className="flex items-center space-x-2">
                <div
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    isBackendConnected === null
                      ? 'bg-gray-100 text-gray-800'
                      : isBackendConnected
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full mr-2 ${
                      isBackendConnected === null
                        ? 'bg-gray-400'
                        : isBackendConnected
                        ? 'bg-green-400'
                        : 'bg-red-400'
                    }`}
                  />
                  {isBackendConnected === null
                    ? 'Checking...'
                    : isBackendConnected
                    ? 'Backend Connected'
                    : 'Backend Disconnected'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

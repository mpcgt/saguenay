import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function ScreenTime() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1800000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="bg-black rounded-lg shadow-xl max-w-md w-full z-50">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold text-white">
                Screen time in Saguenay
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <p className="mb-4 text-white">
                You spent 30 minutes on your screen in Saguenay. Here are some
                tips to reduce your screen time:
              </p>
              <div className="mt-8 sm:mt-10 divide-y divide-gray-200 dark:divide-neutral-700">
                <div className="flex gap-x-7 py-5 first:pt-0 last:pb-0">
                  <svg
                    width="24"
                    height="24"
                    className="shrink-0 mt-1 size-7 text-white dark:text-neutral-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-white dark:text-neutral-200">
                      Set time limits for the use of your devices
                    </h3>
                    <p className="text-sm text-white dark:text-neutral-500">
                      Set precise schedules for each device and use apps to
                      track your screen time and receive reminders.{" "}
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-7 py-5 first:pt-0 last:pb-0">
                  <svg
                    width="24"
                    height="24"
                    className="shrink-0 mt-1 size-7 text-white dark:text-neutral-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 11.5H14.5L13 14.5L11 8.5L9.5 11.5H8.5M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.75009 14.4724 8.97129 18.311 10.948 20.0749C11.3114 20.3991 11.4931 20.5613 11.7058 20.6251C11.8905 20.6805 12.0958 20.6805 12.2805 20.6251C12.4932 20.5613 12.6749 20.3991 13.0383 20.0749C15.015 18.311 19.2362 14.4724 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-white dark:text-neutral-200">
                      Take regular breaks and get moving.
                    </h3>
                    <p className="text-sm text-white dark:text-neutral-500">
                      After every hour spent in front of a screen, take a 5-10
                      minute break to get up, walk around a bit and stretch your
                      legs, which helps reduce eyestrain and improve
                      circulation.{" "}
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-7 py-5 first:pt-0 last:pb-0">
                  <svg
                    width="24"
                    height="24"
                    className="shrink-0 mt-1 size-7 text-white dark:text-neutral-400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 9H15.01M9 9H9.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9C14.5 8.72386 14.7239 8.5 15 8.5C15.2761 8.5 15.5 8.72386 15.5 9ZM9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9C8.5 8.72386 8.72386 8.5 9 8.5C9.27614 8.5 9.5 8.72386 9.5 9ZM12 17.5C14.5005 17.5 16.5 15.667 16.5 14H7.5C7.5 15.667 9.4995 17.5 12 17.5Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-white dark:text-neutral-200">
                      Find alternative screen-free activities, such as reading
                      or walking outdoors.
                    </h3>
                    <p className="text-sm text-white dark:text-neutral-500">
                      Opt for leisure activities such as reading, gardening or
                      walking. These activities reduce your screen time and
                      bring relaxation and pleasure.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4 p-6 border-t">
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Cancel
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-600 border border-transparent text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { useState } from "react";

export default function Modal() {
  const [isModalOpen, setModalOpen] = useState(false);

  console.log(isModalOpen);
  return (
    <div className=" flex flex-col">
      <button
        className="bg-white/20 p-3 rounded-xl"
        onClick={() => setModalOpen(true)}
      >
        click me
      </button>
      <>
        {isModalOpen ? (
          <div
            className="fixed z-10 inset-0 overflow-y-auto"
            aria-labelledby="modal-title"
            role="model"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
              ></div>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Lorem ipsum
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          dolor sit amet consectetur adipisicing elit. Corporis
                          atque beatae exercitationem. Eligendi sit excepturi
                          harum necessitatibus. Veritatis sequi nemo corporis,
                          autem, itaque quae debitis error laboriosam recusandae
                          optio ea!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={() => setModalOpen(!true)}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalOpen(!true)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
}

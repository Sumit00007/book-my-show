import React, { Fragment } from "react";
import {  Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';



const PaymentModel = ({ setIsOpen, isOpen, price }) => {
const closeModal = () => {
    setIsOpen(false);
};

const launchRazorPay = () => {
let options = {
    key: "rzp_test_IHdCbDVp83hJFH",
    amount: price * 100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie purchase or rental",
    image:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
        setIsOpen(false);
        alert("Payment Successful");
    },
    theme: { color: "#c4242d" },
    };

    let razorPay =  window.Razorpay(options);
    razorPay.open();
};

return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
        <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                >
                    Please make a payment
                </DialogTitle>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Hello please click non the below button to make a payment.
                    </p>
                </div>

                <div className="mt-4 flex gap-3">
                    <Button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={launchRazorPay}
                >
                    Pay ₹{price}
                    </Button>
                    <Button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                    >
                    Cancle Payment
                    </Button>
                </div>
                </DialogPanel>
            </TransitionChild>
            </div>
        </div>
        </Dialog>
    </Transition>
    </>
);
};

export default PaymentModel;
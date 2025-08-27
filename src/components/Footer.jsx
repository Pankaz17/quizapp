import React from "react";

export default function Footer() {
  return (
    <div className="bg-slate-600 text-black p-4 justify-around flex flex-col">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">QuizMater</h1>
        <p className="text-xl font-semibold">
          Sharpen your mind, one question at a time
        </p>
      </div>
      <div className="flex justify-around mt-5">
        <div>
          <div className="text-xl font-semibold text-black mt-3">About</div>
          <div className="text-xl font-semibold text-black mt-3">Privacy</div>
          <div className="text-xl font-semibold text-black mt-3">Terms</div>
        </div>
        <div>
            <div className="text-xl font-semibold text-black mt-3">Contact</div>
            <div className="text-xl font-semibold text-black mt-3">Support</div>
            <div className="text-xl font-semibold text-black mt-3">FAQ</div>
        </div>
        <div>
            <div className="text-xl font-semibold text-black mt-3">Facebook</div>
            <div className="text-xl font-semibold text-black mt-3">Twitter</div>
            <div className="text-xl font-semibold text-black mt-3">Instagram</div>
            <div className="text-xl font-semibold text-black mt-3">Linkedin</div>
        </div>
      </div>
    </div>
  );
}

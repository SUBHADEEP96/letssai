"use client";
export function openChatbot(){ window.dispatchEvent(new Event("letssai:open-chatbot")); }
export function CTAButton({children="Talk to LetssAI", className=""}:{children?:React.ReactNode; className?:string}){ return <button onClick={openChatbot} className={`rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 ${className}`}>{children}</button> }

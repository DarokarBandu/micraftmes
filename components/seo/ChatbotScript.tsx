"use client"
import Script from "next/script"

export default function ChatbotScript() {
    return (
        <Script 
            src="https://reptilebot.com/api/embed/cw_12683b45db4de9678885965253278733ffb08ef0fe7671d7.js" 
            strategy="lazyOnload" 
            onError={(e) => {
                console.warn('Chatbot script failed to load', e);
            }}
        />
    )
}

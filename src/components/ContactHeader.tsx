import React from "react";

export default function ContactHeader() {
  
    return (
        <div className="hero py-32 bg-primary">
            <div className="hero-content text-center">
                <div className="max-w-md text-white">
                    <h1 className="text-3xl lg:text-5xl font-bold">
                        Have questions or inquiries?
                    </h1>
                    <p className="py-6">
                        Contact our Online customer representative to learn more
                        about our services
                    </p>
                    <a href="/contact" className="btn md:btn-lg btn-secondary">
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    );
}

const questions = [
    {
        title: "What subjects do you offer Tutorials for?",
        answer: `We offer tutoring services for a variety of subjects including math, science, language arts, history, and more. We also offer test prep services for standardized tests like the SAT and ACT.`,
    },
    {
        title: "How do I schedule a tutoring session?",
        answer: `You can schedule a tutoring session by visiting our website and selecting the subject you need help with, your preferred tutor, and the date and time that works best for you.`,
    },
    {
        title: "Where will the lessons hold?",
        answer: `Lessons hold at the comfort of your home or any location that works best for you`,
    },
    {
        title: "Are your Tutors verified?",
        answer: `Our Tutors go through a rigorous screening process so that only the best Home Tutor teaches your child`,
    },
    {
        title: "How do I pay for tutoring sessions?",
        answer: `You can pay for tutoring sessions through our website using a credit or debit card. We also accept payment through other payment gateway.`,
    },
    {
        title: "What if I need to cancel a tutoring session?",
        answer: `We understand that life can be unpredictable, so we allow cancellations up to 24 hours before your scheduled session. If you need to cancel within 24 hours, please contact us as soon as possible to discuss your options.`,
    },
];

export default function FAQ() {
    return (
        <section className=" bg-white py-24">
            <div className="container">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-primary mb-6">
                    Frequently Asked Questions
                </h1>

                <div className="mt-12 sm:mt-16">
                    <div className="divide-y divide-gray--200">
                        {questions.map((q, ii) => (
                            <div
                                tabIndex={0}
                                key={ii}
                                className="collapse collapse-arrow bg-base-100 py-6">
                                <div className="collapse-title text-lg md:text-2xl font-medium px-0">
                                    <span className="inline-block w-10/12">
                                        {q.title}
                                    </span>
                                </div>
                                <div className="collapse-content text-neutral-500 px-0">
                                    <p>{q.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

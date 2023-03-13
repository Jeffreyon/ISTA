import Image from "next/image";

// Icons
import preNurseryIcon from "../../public/icons/pre-nursery.svg";
import languageIcon from "../../public/icons/language.svg";
import mathsIcon from "../../public/icons/mathematics.svg";
import scienceIcn from "../../public/icons/general-science.svg";

export default function SubjectsFeature() {
    return (
        <section className="bg-white">
            <div className="container py-24">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-primary mb-6">
                    Subjects we offer
                </h1>
                <p className=" text-neutral-500 max-w-2xl mx-auto mb-16 text-center">
                    Education is a learning process, gaining knowledge and
                    growing everyday and being capable of excelling in the field
                    whereever your child goes
                </p>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="p-6 pb-8 border border-slate-300 rounded-box">
                        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-supplementary-600 text-white mb-4 flex-shrink-0">
                            <Image
                                src={preNurseryIcon}
                                className="w-8"
                                alt="Icon"></Image>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-neutral-800 text-2xl font-semibold mb-2">
                                Pre-nursery Class
                            </h2>
                            <p className="leading-relaxed text-base">
                                Pre-nursery subjects Basic Science Hand Writing,
                                Language Art and Number Concept
                            </p>
                        </div>
                    </div>
                    <div className="p-6 pb-8 border border-slate-300 rounded-box">
                        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-primary text-white mb-4 flex-shrink-0">
                            <Image
                                src={languageIcon}
                                className="w-8"
                                alt="Icon"></Image>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-neutral-800 text-2xl font-semibold mb-2">
                                Language
                            </h2>
                            <p className="leading-relaxed text-base">
                                General Language is a group of language like
                                English,Yoruba,French, Spanish e.t.c
                            </p>
                        </div>
                    </div>
                    <div className="p-6 pb-8 border border-slate-300 rounded-box">
                        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-secondary text-white mb-4 flex-shrink-0">
                            <Image
                                src={mathsIcon}
                                className="w-8"
                                alt="Icon"></Image>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-neutral-800 text-2xl font-semibold mb-2">
                                Mathematics
                            </h2>
                            <p className="leading-relaxed text-base">
                                Mathematics subjects like general mathematics,
                                basic and Further maticmatics
                            </p>
                        </div>
                    </div>
                    <div className="p-6 pb-8 border border-slate-300 rounded-box">
                        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-tertiary text-white mb-4 flex-shrink-0">
                            <Image
                                src={scienceIcn}
                                className="w-8"
                                alt="Icon"></Image>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-neutral-800 text-2xl font-semibold mb-2">
                                General Science
                            </h2>
                            <p className="leading-relaxed text-base">
                                General Science is a group of Subject like
                                Physics,Chemistry,Biology...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-16">
                    <a href="/subjects" className="btn btn-primary">
                        See more
                    </a>
                </div>
            </div>
        </section>
    );
}

import a1 from "../../public/images/blog-image.png";
import Image from "next/image";

let articles = [
    {
        image_url: a1,
        title: "10 high impact moves to reduce total cost of occupancy",
        body: "Corporate real estate and facilities leaders face new pressures to decrease spending while improving resilence and accomodating new ways of working",
        url: "/",
        tag: "Press Release",
    },
    {
        image_url: a1,
        title: "The costs and benefits of creating a modern workspace",
        body: "Corporate real estate and facilities leaders face new pressures to decrease spending while improving resilence and accomodating new ways of working",
        url: "/",
        tag: "Press Release",
    },
    {
        image_url: a1,
        title: "Solving housing issues in mega cities",
        body: "Corporate real estate and facilities leaders face new pressures to decrease spending while improving resilence and accomodating new ways of working",
        url: "/",
        tag: "Press Release",
    },
];

function BlogFeature() {
    return (
        <div className="py-24 bg-neutral-200">
            <div className="container ">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-primary mb-6">
                    Lastest News and Resources
                </h1>
                <p className=" text-neutral-500 max-w-2xl mx-auto mb-16 text-center">
                    See the developments that have occurred in the educational
                    Sector
                </p>
                <div className="flex flex-col gap-6 sm:mx-auto lg:max-w-full mb-10">
                    {articles.map((a, ii) => {
                        return (
                            <div
                                key={ii}
                                className=" duration-300 flex flex-col md:flex-row gap-5 md:gap-8 group">
                                <div className=" min-w-fit">
                                    <a href={a.url} aria-label="Article">
                                        <Image
                                            src={a.image_url}
                                            className="object-cover w-full h-64 sm:h-96 md:h-64 rounded-box"
                                            alt={a.title}
                                        />
                                    </a>
                                </div>
                                <div className="sm:py-5 w-full flex flex-col justify-between max-w-lg">
                                    <div>
                                        <span className=" text-sm uppercase text-primary-700 tracking-wider">
                                            {a.tag}
                                        </span>
                                        <a
                                            href={a.url}
                                            aria-label="Article"
                                            className="inline-block my-3 group-hover:text-primary transition-all">
                                            <h5 className="text-2xl font-bold group-hover:underline">
                                                {a.title}
                                            </h5>
                                            <p className="mt-4 text-gray-700">
                                                {a.body}
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default BlogFeature;

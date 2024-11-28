"use client";

export function ServicesCard({ service, handleOpenForm }: any) {
    console.log("🚀 ~ ServicesCard ~ service:", service)
    return (
        <div className="w-full group/card overflow-hidden rounded-xl group">
            <div
                style={
                    {
                        background: `url(${service.image})`,
                        backgroundSize: "cover"
                    }
                }
                className=
                " cursor-pointer overflow-hidden relative card h-80 w-full rounded-md shadow-xl  backgroundImage flex flex-col justify-end p-4"

            >
                <div className="absolute w-full h-full -z-0 top-0 left-0 transition duration-300 bg-black opacity-40 group-hover:opacity-80"></div>

                <div className="text content z-[20] flex flex-col items-start">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        {service.name}
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                        {service.description}
                    </p>
                    <div
                        onClick={() => handleOpenForm(service)}
                        className={`${false ? "border border-black text-black hover:rotate-6 " : "bg-transparent border-2 border-white text-white hover:rotate-6  "}py-2 px-3  sm:px-5 min-w-[120px] rounded-full cursor-pointer flex items-center justify-center text-sm sm:text-base hover:border-black transition-all`}
                    >
                        Select {service.name}
                    </div>
                </div>
            </div>
        </div>
    );
}

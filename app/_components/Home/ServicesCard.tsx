import * as React from "react";

export const ServiceCard = ({ title, description, isHighlighted = false }: any) => {
    const containerClasses = `flex flex-col flex-1 shrink justify-center items-center self-stretch my-auto w-full rounded-md min-h-full min-w-[240px] ${isHighlighted
        ? "bg-sky-800"
        : "bg-white border border-solid border-slate-500 border-opacity-40 shadow-[2px_2px_2px_rgba(0,0,0,0.1)]"
        }`;

    const titleClasses = `text-xl font-bold leading-6 text-center ${isHighlighted ? "text-white" : "text-zinc-800"
        }`;

    const descriptionClasses = `mt-3.5 text-base leading-7 ${isHighlighted ? "text-white" : "text-zinc-800 text-justify"
        }`;

    const buttonClasses = `gap-2.5 self-stretch px-9 py-3.5 mt-7 max-w-full text-base font-medium text-center uppercase rounded min-h-[46px] w-[254px] max-md:px-5 ${isHighlighted ? "bg-emerald-500 text-white" : "bg-sky-800 text-white"
        }`;

    return (
        <div className="flex flex-col min-w-[240px] w-[304px]">
            <div className="flex gap-2.5 justify-center items-center w-full rounded-xl min-h-[419px]">
                <div className={containerClasses}>
                    <div className="flex flex-col justify-between items-center pt-12 max-w-full min-h-[307px] w-[254px]">
                        <div className={titleClasses}>{title}</div>
                        <div className={descriptionClasses}>{description}</div>
                    </div>
                    <button className={buttonClasses} tabIndex={0}>Get Offer</button>
                </div>
            </div>
        </div>
    );
};
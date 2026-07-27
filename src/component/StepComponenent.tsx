type StepComponenentProps = {
    title: string,
    company: string,
    city: string,
    country: string,
    beginningDate: Date,
    endingDate?: Date,
    description: string
}

export function StepComponent({title, company, city, country, beginningDate, endingDate, description}: StepComponenentProps) {
    return (
        <div className={"bg-gray-200 h-150 w-full rounded-3xl flex flex-col items-center justify-start p-15 gap-10"}>
            {/*Component header (for infos)*/}
            <div className={"w-full"}>
                <h3 className={"text-4xl font-bold mb-2 font-[Panchang-Variable] w-full"}>{title}</h3>
                <div className={"w-full flex flex-row justify-between items-center"}><h4
                    className={"text-xl font-semibold mb-2 font-[DINdong]"}>{company} - {city}, {country}</h4>
                    <h4 className={"text-xl font-semibold mb-2 font-[DINdong]"}>{beginningDate.getMonth() + "/" + beginningDate.getFullYear()} - {endingDate ? endingDate.getMonth() + 1 + "/" + endingDate.getFullYear() : 'Present'}</h4>
                </div>
            </div>
            {/*Text Part*/}
            <div className={"w-full h-10"}>
                <p className={"line-clamp-15"}>{description}</p>
            </div>
        </div>
    )
}
import React from 'react'

const TasteSection = () => {
    return (
        <section className='section-wrapper'>
            <div className="section-container w-full">
                <div className='flex w-full flex-row lg:flex-col justify-between'>
                    <div className='flex flex-col gap-5 w-full text-left max-w-[657px]'>
                        <h1 className='font-semibold text-5xl leading-[100%]'>
                            Savor the taste of perfection
                        </h1>
                        <p className='text-xl text-muted-foregrounds leading-7'>
                            Welcom to Restaurant where passion meets the plate.<br />
                            From sizzling appetsers to signature desserts, every dish is crafted to delight your senses.
                        </p>
                        <div className="flex gap-[14px] items-center">

                        </div>
                    </div>
                    <div className='flex-1'></div>
                </div>
            </div>
        </section>
    )
}

export default TasteSection

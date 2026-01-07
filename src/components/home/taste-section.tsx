import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const TasteSection = () => {
    return (
        <section className='section-wrapper'>
            <div className="section-container w-full">
                <div className='flex w-full flex-col lg:flex-row justify-between items-center gap-6'>
                    <div className='flex flex-col gap-5 w-full text-left max-w-[657px]'>
                        <h1 className='section_h1 leading-[100%]'>
                            Qu’est-ce qu’on mange aujourd’hui ?
                        </h1>
                        <p className='text-muted-foreground text-description leading-7'>
                            Une nouvelle façon de commander auprès de vos restaurants préférés.<br />
                            Simple, rapide et pratique pour vos repas du quotidien.
                        </p>
                        <div className="flex gap-[14px] items-center max-md:flex-col">
                            <Button className='btn-red_primary'>
                                Commander maintenant
                                <ArrowRight />
                            </Button>
                            <Button className='btn-red_secondary'>
                                Explorer les restaurants
                            </Button>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <Image
                            src="/dish_1_square.png"
                            alt="Dish 1"
                            width={380}
                            height={388}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TasteSection

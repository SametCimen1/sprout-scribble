import Image from 'next/image';

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from '../ui/movingCard';

const Categories = () => {
  return (
    <div>
        <span className='font-semibold text-xl'>Categories</span>

        <div className='grid grid-4 md:grid-cols-12 grid-rows-2 w-full grid-flow-row gap-2 '>
            <Image className='md:col-span-4 row-span-2 cursor-pointer transform transition duration-300 hover:scale-105 rounded-md hover:z-20 h-full' src = "/livingRoom.png" alt = "Image of a living room" width={500} height={500}/>
            <Image className='md:col-span-2 row-span-1 cursor-pointer transform transition duration-300 hover:scale-105 rounded-md h-full'src = "/clothes.png" alt = "Image of a living room" width={500} height={500}/>
            <Image className='md:col-span-4 row-span-2 cursor-pointer transform transition duration-300 hover:scale-105 rounded-md ' src = "/kitchen.png" alt = "Image of a living room" width={500} height={500}/>
            <Image className='md:col-span-2 row-span-1 cursor-pointer transform transition duration-300 hover:scale-105 rounded-md hover:z-20' src = "/shoes.png" alt = "Image of a living room" width={500} height={500}/>
            <Image className='md:col-span-2 row-span-2 cursor-pointer transform transition duration-300 hover:scale-105 rounded-md ' src = "/skinCare.png" alt = "Image of a living room" width={500} height={500}/>
            <Image className='md:col-span-2 row-span-2 cursor-pointer transform transition duration-300 hover:scale-105 rounded-md ' src = "/tech.png" alt = "Image of a living room" width={500} height={500}/>
        </div>


        <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    </div>
  )
}


const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

export default Categories;
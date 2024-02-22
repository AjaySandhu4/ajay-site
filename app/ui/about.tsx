import { Carousel } from 'flowbite-react';
import Link from "next/link";
import Image from "next/image";

export default function about() {
    return (<>
        <div id="about" className="bg-red-800 flex flex-row w-full h-96 top-0 justify-between">
        <div className="flex flex-col justify-between w-1/2 px-4 py-4 text-white text-lg">
          <h1 className="text-5xl text-center">About</h1>
          <p>Hey! I'm Ajay. I'm a senior at Carleton University in Ottawa, Ontario where I study Computer Science with a specialization in Algorithms.</p>

          <p>I enjoy problem solving, logic, and math which has naturally led to an interest in the field of CS.</p>

          <div>
            <p>Outside of school and work, I...</p>
            <ul className="list-disc list-inside">
              <li>play soccer, currently with <Link className="underline" href="https://www.instagram.com/ottawafalconsmp/">Ottawa Falcon's Men's Premier</Link>.</li>
              <li>play the piano, especially jazz.</li>
              <li>hike around with my dog Benji.</li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 z-0">
          <Carousel className="px-2 py-2">
            <Image width={100} height={100} src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <Image width={100} height={100} src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
          </Carousel>
        </div>
      </div>
    </>)
}
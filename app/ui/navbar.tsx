import { dancing } from "./fonts";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-blue-950 sticky top-0 drop-shadow-2xl z-40 sticky">
        <div className="container mx-auto h-full shadow-inner z-100 sticky">
          <div className="flex justify-between items-center h-full">
            <div className="text-white">
                <h1 className={`${dancing.className} antialiasing text-4xl`}>
                    Ajay Sandhu
                </h1>
            </div>
            <ul className="hidden md:flex gap-x-10 text-white text-2xl items-center">
              <li>
                <a href="#About">
                  <p>About</p>
                </a>
              </li>
              <li>
                <a href="#Experience">
                  <p>Experience</p>
                </a>
              </li>
              <li>
                <a href="#Projects">
                  <p>Projects</p>
                </a>
              </li>
              <li>
                <a href="#Contact">
                  <p>Contact</p>
                </a>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </>
  );
};
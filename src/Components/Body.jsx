import { TiTick } from "react-icons/ti";

function Body() {
  return (
    <div className="space-y-4 lg:flex lg: gap-2">
      <div className="flex justify-center lg:order-last lg:justify-end">
        <img src="./assets/undraw_open_source.svg" alt="home_image" />
      </div>
      <div className="lg:order-first">
        <h1 className="text-5xl font-bold font-playfair leading-tight ">
          Host your website less than 5 minutes.
        </h1>
        <p className="font-lato text-gray-400 ">
          With Hoster, get your website up and running in no less than 5 minutes
          with the most compitative pricing packages available online.
        </p>
        <form action="" className="flex flex-col gap-4 mt-2 md:flex-row">
          <input
            type="email"
            placeholder="Enter email address"
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2">
          <TiTick className="h-6" />
          <p className="font-lato text-gray-400">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Body;

function Footer() {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:justify-between">
      <ul className="flex gap-6 font-lato text-gray-400">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
      <div className="flex gap-2 ">
        <img
          src="./assets/undraw_pic_profile.svg"
          alt="spec_pic"
          className="w-12 h-16"
        />
        <div className="mt-2">
          <p className="font-playfair font-thin">Have any Questions?</p>
          <a href="#" className="font-lato font-medium">
            Talk to our specialist.
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;

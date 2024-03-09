export default function FooterSection() {
  return (
    // <div className="flex">
    <footer className="py-5 sm:pb-4">
      <div className="space-y-8">
        {/* navigation */}
        <nav className="flex justify-center">
          <div className="container grid grid-cols-8 md:grid-cols-12 md:gap-x-2 lg:gap-x-3 lg:px-5 gap-y-5 sm:gap-y-3">
            {/* logo section */}
            <section className="col-span-full flex lg:col-span-3">
              <a aria-label="Go to PlanetScale homepage" className="h-fit" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 40 40">
                  <path
                    fill="currentColor"
                    d="M0 20C0 8.954 8.954 0 20 0c8.121 0 15.112 4.84 18.245 11.794l-26.45 26.45a20 20 0 0 1-3.225-1.83L24.984 20H20L5.858 34.142A19.94 19.94 0 0 1 0 20M39.999 20.007 20.006 40c11.04-.004 19.99-8.953 19.993-19.993"></path>
                </svg>
              </a>
            </section>
            {/* navigation body starts here */}
            <section className="col-span-4 flex flex-col space-y-1 text-sm sm:max-md:pr-grid-col lg:col-span-2">
              <h2 className="text-slate-500">Company</h2>
              <ul className="space-y-1">
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Mission and Values
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Awards and Recognitions
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Partnerships
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Clients and Projects
                  </a>
                </li>
              </ul>
            </section>
            <section className="col-span-4 flex flex-col space-y-1 text-sm sm:max-md:pr-grid-col lg:col-span-2">
              <h2 className="text-slate-500">Services</h2>
              <ul className="space-y-1">
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Software Testing
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Consultation Services
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Custom Software Solutions
                  </a>
                </li>
              </ul>
              <h2 className="pt-5 text-slate-500 sm:pt-2">Talk to us</h2>
              <ul className="space-y-1">
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="tel:+447491272732">
                    Call +44 7491 2727 32
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="/contact">
                    Contact us
                  </a>
                </li>
              </ul>
            </section>
            <section className="col-span-4 flex flex-col space-y-1 text-sm sm:max-md:pr-grid-col lg:col-span-2">
              <h2 className="text-slate-500">Resources</h2>
              <ul className="space-y-1">
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Free Web Development Resources
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Mobile App Development Guides
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="nofollow noopener noreferrer" className="text-gray-50 no-underline hover:text-orange" href="#">
                    Software Testing Best Practices
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="nofollow noopener noreferrer" className="text-gray-50 no-underline hover:text-orange" href="#">
                    Latest Industry News
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="nofollow noopener noreferrer" className="text-gray-50 no-underline hover:text-orange" href="#">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="nofollow noopener noreferrer" className="text-gray-50 no-underline hover:text-orange" href="#">
                    Whitepapers and E-books
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="nofollow noopener noreferrer" className="text-gray-50 no-underline hover:text-orange" href="#">
                    Video Tutorials
                  </a>
                </li>
              </ul>
            </section>
            <section className="col-span-4 flex flex-col space-y-1 text-sm sm:max-md:pr-grid-col lg:col-span-2">
              <h2 className="text-slate-500">Quick Links</h2>
              <ul className="space-y-1">
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Courses
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Community Forums
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Partner with Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Our Products
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 no-underline hover:text-orange" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </section>

            {/* navigation body ends here */}
          </div>
        </nav>

        <div className="container grid grid-cols-8 md:grid-cols-12 md:gap-x-2 lg:gap-x-3 lg:px-5 gap-y-3 text-xs text-slate-500 sm:gap-y-5">
          {/* right reserved */}
          <div className="col-span-full flex flex-wrap gap-1 md:col-span-5">
            <div className="whitespace-nowrap">© 2024 Beicraft Ltd., Inc. All rights reserved.</div>
            <div className="flex justify-center gap-1 sm:justify-start">
              <a rel="nofollow noopener noreferrer" href="#">
                Privacy
              </a>
              <a rel="nofollow noopener noreferrer" href="#">
                Terms
              </a>
              <a rel="nofollow noopener noreferrer" href="#">
                Cookies
              </a>
            </div>
          </div>
          {/* social media */}
          <div className="col-span-full flex items-center gap-2 sm:gap-3 md:col-span-6 md:place-content-end">
            <a className="transition hover:text-gray-50" target="_blank" rel="me nofollow noopener noreferrer" aria-label="X (formerly Twitter)" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a className="transition hover:text-gray-50" target="_blank" rel="me nofollow noopener noreferrer" aria-label="GitHub" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                <path
                  fill="currentColor"
                  d="M9 0C4.027 0 0 4.089 0 9.137 0 13.431 2.902 16.995 6.818 18a1.3 1.3 0 0 1-.068-.434v-1.554H5.625c-.607 0-1.17-.273-1.418-.776-.292-.549-.337-1.394-1.08-1.92-.225-.182-.045-.365.203-.343.472.137.854.458 1.214.937s.518.594 1.193.594c.315 0 .81-.023 1.26-.092.247-.64.675-1.21 1.193-1.485-3.015-.365-4.455-1.873-4.455-3.929 0-.891.382-1.736 1.012-2.467-.202-.709-.472-2.17.09-2.742 1.351 0 2.16.892 2.363 1.12a6.8 6.8 0 0 1 2.182-.366c.788 0 1.508.137 2.182.365.203-.228 1.013-1.119 2.363-1.119.54.549.292 2.033.067 2.742.63.708.99 1.576.99 2.467 0 2.056-1.417 3.564-4.41 3.884.833.433 1.419 1.667 1.419 2.58v2.082c0 .068-.023.136-.023.205C15.48 16.516 18 13.135 18 9.137 18 4.09 13.973 0 9 0"></path>
              </svg>
            </a>
            <a className="transition hover:text-gray-50" target="_blank" rel="me nofollow noopener noreferrer" aria-label="LinkedIn" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                <path
                  fill="currentColor"
                  d="M0 1.29C0 .576.592 0 1.322 0h15.356C17.408 0 18 .577 18 1.29v15.42c0 .713-.592 1.29-1.322 1.29H1.322C.592 18 0 17.423 0 16.71zm5.56 13.778V6.94h-2.7v8.128zM4.21 5.83c.943 0 1.529-.623 1.529-1.404-.017-.798-.585-1.404-1.51-1.404S2.7 3.629 2.7 4.426c0 .78.586 1.404 1.493 1.404zm5.522 9.238v-4.54c0-.242.018-.485.09-.658.195-.485.64-.988 1.386-.988.978 0 1.368.745 1.368 1.838v4.348h2.701v-4.662c0-2.497-1.331-3.658-3.109-3.658-1.433 0-2.076.787-2.436 1.342v.028h-.018l.018-.028V6.94h-2.7c.034.763 0 8.128 0 8.128z"></path>
              </svg>
            </a>
            <a className="transition hover:text-gray-50" target="_blank" rel="me nofollow noopener noreferrer" aria-label="Facebook" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                <path
                  fill="currentColor"
                  d="M18 9.055C18 4.054 13.97 0 9.001 0 4.03.001 0 4.054 0 9.056 0 13.575 3.291 17.321 7.593 18v-6.327H5.309V9.056h2.286V7.06c0-2.27 1.344-3.522 3.4-3.522.985 0 2.014.176 2.014.176v2.228h-1.135c-1.117 0-1.466.698-1.466 1.415v1.698h2.495l-.398 2.616h-2.098V18C14.71 17.319 18 13.574 18 9.055"></path>
              </svg>
            </a>
            <a className="transition hover:text-gray-50" target="_blank" rel="me nofollow noopener noreferrer" aria-label="Twitch" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="none" viewBox="0 0 16 18">
                <g fill="currentColor">
                  <path d="M3.214 0 0 3.214v11.572h3.857V18l3.214-3.214h2.572L15.429 9V0zm10.929 8.357L11.57 10.93H9l-2.25 2.25v-2.25H3.857V1.286h10.286z"></path>
                  <path d="M12.215 3.536h-1.286v3.857h1.286zM8.679 3.536H7.393v3.857H8.68z"></path>
                </g>
              </svg>
            </a>
            <a className="transition hover:text-gray-50" target="_blank" rel="me nofollow noopener noreferrer" aria-label="YouTube" href="https://www.youtube.com/planetscale">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" fill="none" viewBox="0 0 19 14">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M16.44 1.087c.775.208 1.38.815 1.59 1.59.548 2.212.512 6.395.01 8.641a2.25 2.25 0 0 1-1.59 1.59c-2.188.542-11.993.475-14.055 0a2.25 2.25 0 0 1-1.59-1.59C.287 9.21.323 4.751.793 2.688a2.25 2.25 0 0 1 1.59-1.59C5.31.489 15.398.686 16.44 1.089M7.682 4.301l4.7 2.696-4.7 2.696z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
            <a target="_blank" className="transition hover:text-gray-50" rel="me nofollow noopener noreferrer" aria-label="TikTok" href="https://tiktok.com/@planetscale">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="none" viewBox="0 0 16 18">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M11.663 0c.297 2.554 1.723 4.077 4.201 4.24v2.872c-1.436.14-2.694-.33-4.158-1.215v5.373c0 6.826-7.441 8.96-10.433 4.066-1.922-3.148-.745-8.672 5.422-8.894v3.03c-.47.076-.972.194-1.431.35-1.372.465-2.15 1.335-1.933 2.868.415 2.938 5.805 3.808 5.357-1.933V.005h2.975z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    // </div>
  );
}

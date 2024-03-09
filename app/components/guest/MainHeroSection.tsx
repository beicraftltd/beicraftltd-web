import Image from "next/image";
import animationStyles from '@/app/ui/heroanimation.module.css';

export default function MainHero() {
  return (
    /**
     * Hero section for the home page
     * Main landing section
     */

    <div className="flex flex-row gap-x-60">

      <div className="basis-1/2">
        <h1 className="mb-3 text-4xl font-semibold text-secondary sm:text-5xl">
          Crafting your ideas into <br className="hidden md:block" /> digital solutions
          </h1>
          
          <p className="mt-6 mb-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel molestie enim.
          </p>
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 mr-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Our solutions
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contact us <span aria-hidden="true">→</span>
          </a>
        
      </div>

      <div className="basis-1/2">
        {/* Start Background Animation Body */}
        <div className={animationStyles.area}>
          <ul className={animationStyles.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {/* End Background Animation Body */}

      </div>
    </div>
  )
}

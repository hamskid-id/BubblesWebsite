"use client";

import { CustomImage } from "@/components/global/Image";
import { Text } from "@/components/global/Text";
import heroImg from "../../../public/service_img2.svg";
import heroImg2 from "../../../public/service_img.svg";
import { MaxScreenWrapper } from "@/components/global/MaxScreen";
import { RevealAnimation } from "@/components/global/Reveal";
import { customerTab } from "../index";

interface IServicesSection {
  activeTab: string;
}

export const ServicesSection: React.FC<IServicesSection> = ({ activeTab }) => {
  return (
    <div className=" md:px-[2.5rem] px-4 md:pb-[104px] pb-[54px]">
      <MaxScreenWrapper style="flex flex-col gap-[40px]">
        <RevealAnimation style="w-fit">
          <Text
            id="service"
            as="h1"
            style="font-[700] md:text-[40px] text-[30px] leading-[160%]"
          >
            {activeTab === customerTab
              ? "Several Services To Meet Your Laundry Needs"
              : "More Loads. More Money. Less Stress"}
          </Text>
        </RevealAnimation>
        <div className="flex md:flex-row flex-col items-center lg:gap-[80px] gap-[25px] sm:gap-[50px] justify-between">
          <RevealAnimation style="lg:w-[50%] w-full">
            <CustomImage
              src={activeTab === customerTab ? heroImg : heroImg2}
              style="w-full lg:h-[576px] lg:g-[504px] h-[300px] sm:h-[400px]"
              imgStyle="object-contain"
            />
          </RevealAnimation>
          <div className="flex flex-col gap-[24px] lg:w-[50%] w-full lg:items-start items-center">
            <RevealAnimation style="w-fit">
              <Text style="sm:text-start text-center text-tertiary1100 text-[32px] font-[700] sm:leading-[160%] laeding-[120%]">
                {activeTab === customerTab ? "Wash" : "Grow Your Customer Base"}
              </Text>
            </RevealAnimation>
            <RevealAnimation style="w-fit">
              <Text style="sm:text-start text-center text-[24px] font-[400] leading-[140%] text-tertiary1000">
                {activeTab === customerTab
                  ? `Deep-cleaned, fresh, and neatly folded, so you can enjoy that
                just-laundered feel without the hassle.`
                  : " More orders, more revenue, reach customers effortlessly and keep your machines running."}
              </Text>
            </RevealAnimation>
          </div>
        </div>
      </MaxScreenWrapper>
    </div>
  );
};

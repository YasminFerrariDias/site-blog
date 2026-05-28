'use client'

import { useRef } from 'react';
import { InformationCard } from "./components/informationCard";
import { useToastContext } from "@/hooks/use-toast-context/use-toast-context";

type AuthProps = {
  titleInformation: string,
  messageInformation: string,
  textInformationCard1: string,
  textInformationCard2: string,
  textInformationCard3: string,
  textInformationCard4: string,
  titleForm: string,
  messageForm: string,
  children: React.ReactNode
}

export default function Auth({
  titleInformation,
  messageInformation,
  textInformationCard1,
  textInformationCard2,
  textInformationCard3,
  textInformationCard4,
  titleForm,
  messageForm,
  children,
}: AuthProps) {
  return (
    <div className="flex flex-col gap-12 px-6 py-10 md:flex-row md:justify-between md:px-10 xl:px-20">
      <div className="flex flex-col gap-16 md:w-1/2">
        <div className="mt-7">
          <h2 className="text-heading-hg text-gray-100">{titleInformation}</h2>
          <p className="text-body-md text-gray-200">{messageInformation}</p>
        </div>

        <div className="flex flex-col gap-4">
          <InformationCard text={textInformationCard1} />
          <InformationCard text={textInformationCard2} />
          <InformationCard text={textInformationCard3} />
          <InformationCard text={textInformationCard4} />
        </div>
      </div>

      <div className="bg-gray-500 w-full max-w-full md:w-1/2 p-8 rounded-[28px] gap-6 flex flex-col mx-auto md:mx-0">
        <div>
          <h2
            className="text-3xl font-bold text-gray-100"
          >
            {titleForm}
          </h2>
          <p
            className="text-body-sm text-gray-200"
          >
            {messageForm}
          </p>
        </div>

        <div className="flex flex-col">
          {children}
        </div>
      </div>
    </div>
  )
}
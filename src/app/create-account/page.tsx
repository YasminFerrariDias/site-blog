import Auth from "@/templates/auth/auth";
import { FormCreateAccount } from "@/templates/auth/features/form-create-account";

export default function CreateAccount() {
  return (
    <Auth 
    titleInformation=""
    messageInformation=""
    textInformationCard1=""
    textInformationCard2=""
    textInformationCard3=""
    textInformationCard4=""
    titleForm=""
    messageForm=""
    >
      <FormCreateAccount handle={"oi"} />
    </Auth>
  )
}
import { ShareConfig } from "./social-provider"

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number
}

export const useShare = ({url, title, text, clipboardTimeout = 2000}: UseShareProps) => {
  const shareConfig = {
    url,
    ...(title && { title }),
    ...(text && { text }),
  }

  return {

  }
}
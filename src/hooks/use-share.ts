import { ShareConfig, SOCIAL_PROVIDERS, SocialProvider } from "./social-provider";

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) => {
  const shareConfig = {
    url,
    ...(title && { title }),
    ...(text && { text }),
  };

  const share = (provider: SocialProvider) => {
    try {
      const providerConfig = SOCIAL_PROVIDERS[provider]

      if (!providerConfig) {
       throw new Error(`Provider não suportado: ${provider}`) 
      }

      const shareUrl = providerConfig.shareUrl(shareConfig)
      const shareWindow = window.open(shareUrl, '_blank', 'width=600, height=600, location=yes, status=yes')
      
      return !!shareWindow
    } catch (error) {
      console.error(error)
    }
  }

  return {};
};

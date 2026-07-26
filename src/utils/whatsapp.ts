export const WHATSAPP_NUMBER = "923218458140";
export const WHATSAPP_DISPLAY = "03218458140";
export const OFFICIAL_EMAIL = "contactnovexadigital@gmail.com";

export function getWhatsAppLink(customMessage?: string): string {
  const defaultText = "Hi Novexa Academy, I want to enroll in a course.";
  const textToEncode = customMessage || defaultText;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textToEncode)}`;
}

export function openWhatsApp(customMessage?: string) {
  const url = getWhatsAppLink(customMessage);
  window.open(url, "_blank", "noopener,noreferrer");
}

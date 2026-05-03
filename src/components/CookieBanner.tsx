import CookieConsent from 'react-cookie-consent';
import { useLanguage } from '@/i18n/LanguageContext';

export function CookieBanner() {
  const { language, t } = useLanguage();

  return (
    <CookieConsent
      location="bottom"
      buttonText={language === 'de' ? 'Akzeptieren' : 'Accept'}
      declineButtonText={language === 'de' ? 'Ablehnen' : 'Decline'}
      enableDeclineButton
      cookieName="tandooriExpressCookieConsent"
      style={{ background: '#1E3A8A', color: '#FFF8ED', alignItems: 'center', gap: '12px' }}
      buttonStyle={{ background: '#FCD34D', color: '#111827', borderRadius: '999px', fontWeight: 800, padding: '10px 18px' }}
      declineButtonStyle={{ background: 'transparent', color: '#FFF8ED', border: '1px solid rgba(252,211,77,.55)', borderRadius: '999px', padding: '10px 18px' }}
      expires={180}
    >
      {t('cookie.text')}
    </CookieConsent>
  );
}

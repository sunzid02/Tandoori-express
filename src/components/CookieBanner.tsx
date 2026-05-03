import CookieConsent from 'react-cookie-consent';

export function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      declineButtonText="Ablehnen"
      enableDeclineButton
      cookieName="tandooriExpressCookieConsent"
      style={{ background: '#1E3A8A', color: '#FFF8ED', alignItems: 'center', gap: '12px' }}
      buttonStyle={{ background: '#FCD34D', color: '#111827', borderRadius: '999px', fontWeight: 800, padding: '10px 18px' }}
      declineButtonStyle={{ background: 'transparent', color: '#FFF8ED', border: '1px solid rgba(252,211,77,.55)', borderRadius: '999px', padding: '10px 18px' }}
      expires={180}
    >
      Wir verwenden notwendige Cookies, um diese Website zuverlässig bereitzustellen. Details finden Sie in der Datenschutzerklärung.
    </CookieConsent>
  );
}

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5A7AE8" /><stop offset="100%" stopColor="#2A4AC0" />
        </linearGradient>
        <linearGradient id="lg2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF3535" /><stop offset="100%" stopColor="#B50000" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="108" fill="#0C1128" />
      <path d="M 318 118 A 175 175 0 1 0 318 394" fill="none" stroke="url(#lg1)" strokeWidth="40" strokeLinecap="round" />
      <polygon points="222,148 296,210 222,272 148,210" fill="none" stroke="url(#lg1)" strokeWidth="26" strokeLinejoin="round" />
      <rect x="130" y="286" width="184" height="24" rx="8" fill="url(#lg1)" />
      <line x1="296" y1="210" x2="296" y2="320" stroke="url(#lg2)" strokeWidth="18" strokeLinecap="round" />
      <circle cx="296" cy="338" r="20" fill="url(#lg2)" />
    </svg>
  );
}

type IconProps = {
  size?: number;
  className?: string;
};

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
});

export const GitHubIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className} fill="currentColor">
    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58l-.01-2.05c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22l-.01 3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .5Z" />
  </svg>
);

export const LinkedInIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className} fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const MailIcon = ({ size = 20, className }: IconProps) => (
  <svg
    {...base(size)}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 7 8.15 5.43a1.5 1.5 0 0 0 1.7 0L21 7" />
  </svg>
);

export const ArrowIcon = ({ size = 16, className }: IconProps) => (
  <svg
    {...base(size)}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const SunIcon = ({ size = 20, className }: IconProps) => (
  <svg
    {...base(size)}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.6v2.2M12 19.2v2.2M21.4 12h-2.2M4.8 12H2.6M18.6 5.4l-1.6 1.6M7 17l-1.6 1.6M18.6 18.6 17 17M7 7 5.4 5.4" />
  </svg>
);

export const MoonIcon = ({ size = 20, className }: IconProps) => (
  <svg {...base(size)} className={className} fill="currentColor">
    <path d="M21.3 14.6A9.2 9.2 0 0 1 9.4 2.7a.7.7 0 0 0-.93-.83 10.1 10.1 0 1 0 13.66 13.66.7.7 0 0 0-.83-.93Z" />
  </svg>
);

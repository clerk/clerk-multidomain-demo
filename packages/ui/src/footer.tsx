import { Button } from "./button";

function XIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4">
      <path
        fill="currentColor"
        d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.601 0Zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4">
      <path
        fill="currentColor"
        d="M14.82 0H1.18A1.169 1.169 0 0 0 0 1.154v13.694A1.168 1.168 0 0 0 1.18 16h13.64A1.17 1.17 0 0 0 16 14.845V1.15A1.171 1.171 0 0 0 14.82 0ZM4.744 13.64H2.369V5.996h2.375v7.642Zm-1.18-8.684a1.377 1.377 0 1 1 .52-.106 1.377 1.377 0 0 1-.527.103l.006.003Zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197Z"
      />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4">
      <path
        fill="currentColor"
        d="M13.538 2.997A13.092 13.092 0 0 0 10.285 2a.07.07 0 0 0-.054.023c-.137.247-.297.57-.404.817a12.456 12.456 0 0 0-3.657 0 7.468 7.468 0 0 0-.411-.817C5.75 2.008 5.729 2 5.705 2a13.192 13.192 0 0 0-3.253.997c-.008 0-.015.008-.023.015C.357 6.064-.215 9.033.067 11.972c0 .015.008.03.023.038 1.371.99 2.69 1.59 3.993 1.987.022.007.045 0 .053-.015.305-.412.579-.847.815-1.305.015-.03 0-.06-.03-.067a9.446 9.446 0 0 1-1.25-.585c-.03-.015-.03-.06-.008-.083.084-.06.168-.127.252-.187a.048.048 0 0 1 .053-.008c2.621 1.178 5.448 1.178 8.039 0a.048.048 0 0 1 .053.008c.084.067.167.127.251.195.03.022.03.067-.007.082-.396.233-.816.42-1.25.585-.03.008-.038.045-.03.068.244.457.518.892.815 1.304.023.008.046.015.069.008a13.266 13.266 0 0 0 4-1.987.041.041 0 0 0 .023-.038c.335-3.396-.557-6.343-2.362-8.96-.008-.007-.016-.015-.031-.015Zm-8.19 7.183c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.807 0 1.447.72 1.44 1.59 0 .877-.64 1.59-1.44 1.59Zm5.31 0c-.785 0-1.44-.712-1.44-1.59 0-.876.64-1.589 1.44-1.589.808 0 1.448.72 1.44 1.59 0 .877-.632 1.59-1.44 1.59Z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4">
      <path
        fill="#5E5F6E"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.582 0 0 3.672 0 8.203c0 3.623 2.292 6.699 5.471 7.783.4.075.546-.178.546-.396 0-.194-.007-.71-.01-1.394-2.226.495-2.696-1.1-2.696-1.1-.363-.948-.888-1.2-.888-1.2-.726-.508.055-.499.055-.499.803.058 1.225.845 1.225.845.714 1.253 1.873.891 2.328.682.074-.53.28-.891.509-1.096-1.776-.207-3.644-.911-3.644-4.054 0-.895.312-1.628.823-2.201-.082-.208-.357-1.042.079-2.17 0 0 .672-.222 2.2.84A7.485 7.485 0 0 1 8 3.967c.68.003 1.364.094 2.003.276 1.527-1.062 2.198-.841 2.198-.841.437 1.129.161 1.963.08 2.17.512.574.822 1.307.822 2.202 0 3.15-1.871 3.844-3.653 4.048.288.253.543.753.543 1.519 0 1.095-.01 1.98-.01 2.25 0 .219.144.474.55.394a8.031 8.031 0 0 0 3.96-2.989A8.337 8.337 0 0 0 16 8.203C16 3.672 12.418 0 8 0Z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 2.335c.69.184 1.231.725 1.415 1.414C16 4.996 16 7.6 16 7.6s0 2.604-.335 3.851a2.003 2.003 0 0 1-1.414 1.415c-1.247.335-6.251.335-6.251.335s-5.004 0-6.25-.335a2.004 2.004 0 0 1-1.415-1.415C0 10.204 0 7.601 0 7.601s0-2.605.335-3.852a2.004 2.004 0 0 1 1.414-1.414C2.996 2 8 2 8 2s5.004 0 6.25.335ZM10.556 7.6 6.398 10V5.2l4.157 2.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const sites = [
  ["X", "https://twitter.com/clerkdev", XIcon],
  ["LinkedIn", "https://www.linkedin.com/company/clerkinc", LinkedInIcon],
  ["Discord", "https://clerk.com/discord", DiscordIcon],
  ["GitHub", "https://github.com/clerk", GitHubIcon],
  ["YouTube", "https://www.youtube.com/@clerkdev", YouTubeIcon],
] as const;

export function SocialMedia() {
  return (
    <ul role="list" className="flex gap-5 text-gray-600">
      {sites.map(([site, href, Icon]) => (
        <li key={site}>
          <a
            href={href}
            aria-label={site}
            className="block"
            target="_blank"
            rel="noreferrer"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

const links = [
  {
    name: "Start Building",
    href: "https://clerk.com/docs/quickstart",
  },
  {
    name: "Clerk Docs",
    href: "https://clerk.com/docs",
  },
  {
    name: "Support",
    href: "https://clerk.com/contact/support",
  },
  {
    name: "Contact",
    href: "https://clerk.com/contact",
  },
];

export function Footer() {
  return (
    <footer className="border-t py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 Clerk, Inc.
          </div>
          <div className="flex gap-6">
            {links.map((link, index) => (
              <a key={index} href={link.href}>
                <Button variant={index === 0 ? "default" : "link"}>
                  {link.name}
                </Button>
              </a>
            ))}
          </div>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
}

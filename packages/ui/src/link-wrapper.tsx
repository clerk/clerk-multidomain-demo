export type LinkComponentType = React.ComponentType<{
  href?: string;
  to?: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}>;

type LinkProps = React.ComponentProps<LinkComponentType>;

// support either href or to prop, so next/link or react-router-dom/link can be used
export function getLink(LinkComponent: LinkComponentType) {
  const WrappedLink = (props: LinkProps) => {
    const { href, to, ...restProps } = props;

    const url = href || to;
    const linkProps = {
      ...restProps,
      href: url,
      to: url,
    };

    return <LinkComponent {...linkProps} />;
  };

  WrappedLink.displayName = `repo-ui-link`;

  return WrappedLink;
}

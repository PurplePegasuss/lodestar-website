import { useContext, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Icon, IconProps, forwardRef } from '@chakra-ui/react';
import { LayoutContext } from './layout/layout';

// Chakra's forwardRef to pass IconProps
const WideArrow = forwardRef<IconProps, 'svg'>((props) => {
  const { supportsHover } = useContext(LayoutContext);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Icon
      sx={{
        '.s': {
          transform: supportsHover || !isInView ? 'translateY(-50%)' : 'initial',
          transition: 'all 0.2s',
        },
      }}
      _hover={supportsHover ? { '.s': { transform: 'initial' } } : undefined}
      viewBox="0 0 416 100"
      ref={ref}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <clipPath id="c">
        <path d="M366 0h50v100H0V0h50l158 47" />
      </clipPath>
      <g clipPath="url(#c)">
        <path className="s" d="M365 50H51l157 50" fill="#db1f2d" />
        <path className="s" d="M410 18H6l202 65" fill="#333" />
        <path d="M416 0H0l208 67" fill="#ebebeb" />
      </g>
    </Icon>
  );
});

export default WideArrow;

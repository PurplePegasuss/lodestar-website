import { Icon, IconProps, forwardRef, useMediaQuery } from '@chakra-ui/react';

const WideArrow = forwardRef<IconProps, 'svg'>((props, ref) => {
  const [canHover] = useMediaQuery('(hover: hover) and (pointer: fine)');

  return (
    <Icon
      sx={
        canHover ? { '.s': { transform: 'translateY(-50%)', transition: 'all 0.2s' } } : undefined
      }
      _hover={canHover ? { '.s': { transform: 'initial' } } : undefined}
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

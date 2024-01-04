import React from 'react';
import useDarkMode from 'use-dark-mode';
import { styled, Box, Flex, darkTheme } from '@modulz/design-system';
import {
  CubeIcon,
  DownloadIcon,
  FigmaLogoIcon,
  GitHubLogoIcon,
  IconJarLogoIcon,
  SketchLogoIcon,
} from '@radix-ui/react-icons';

const MenuLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  borderRadius: '$1',
  color: 'inherit',
  outline: 0,
  padding: '0 $3',
  fontSize: '$3',
  lineHeight: '35px',

  '@bp2': {
    padding: '0 $1',
    margin: '0 -$1',
    fontSize: '$2',
    lineHeight: '25px',
  },

  '& + &': {
    marginTop: '$1',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:focus': {
    boxShadow: '0 0 0 1px',
    textDecoration: 'none',
  },
});

export const Menu = () => {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkTheme.className,
    classNameLight: 'theme-default',
  });

  return (
    <Flex
      css={{
        position: 'fixed',
        top: 0,
        right: 0,
        margin: '$5',
        justifyContent: 'flex-end',
        display: 'none',

        '@bp2': {
          display: 'inline-flex',
        },
      }}
    >
      <Flex
        css={{
          background: darkMode.value ? '$mint5' : '$mint3',
          borderRadius: '$1',
          boxShadow: '0 10px 40px -10px hsla(174, 100%, 30%, 0.05)',
          flexDirection: 'column',
          padding: '$3 $4',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        <MenuLink
          href="https://www.figma.com/file/4ZD0Q8lAdv9Bcd7iiW6Cnk/%E2%AD%90-Icons?type=design&node-id=3-55&mode=design&t=CEkL5tWr72SrJuJp-0"
          target="_blank"
        >
          <Box as="span" css={{ mr: '$2' }}>
            <FigmaLogoIcon />
          </Box>
          Open in Figma
        </MenuLink>
        <MenuLink href="https://www.npmjs.com/package/@radix-ui/react-icons" target="_blank">
          <Box as="span" css={{ mr: '$2' }}>
            <CubeIcon />
          </Box>
          Install with npm
        </MenuLink>
        <MenuLink href="https://github.com/radix-ui/icons" target="_blank">
          <Box as="span" css={{ mr: '$2' }}>
            <GitHubLogoIcon />
          </Box>
          View on GitHub
        </MenuLink>
      </Flex>
    </Flex>
  );
};

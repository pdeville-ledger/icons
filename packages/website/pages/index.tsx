import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Box, Container, DesignSystemProvider, Text, Link, darkTheme } from '@modulz/design-system';
import { Apps, Github, Linkedin } from '@ledgerhq/react-icons';
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
import { CopyToast, CopyToastVisibility } from '../components/CopyToast';
import { CodeBlock } from '../components/CodeBlock';
import { IconLink } from '../components/IconLink';
import { Section } from '../components/Section';
import { MainContent } from '../components/MainContent';
import { DarkModeButton } from '../components/DarkModeButton';

export default function Home() {
  const darkMode = useDarkMode(undefined, {
    classNameDark: darkTheme.className,
    classNameLight: 'theme-default',
  });

  const [toastIsVisible, setToastIsVisible] = React.useState(false);
  const [toastIcon, setToastIcon] = React.useState('');
  const [toastTimeout, setToastTimeout] = React.useState<ReturnType<typeof setTimeout>>();

  const setToastIsVisibleTimeout = () => {
    setToastIsVisible(true);
    // clearTimeout(toastTimeout);
    setToastTimeout(setTimeout(() => setToastIsVisible(false), 3000));
  };

  return (
    <DesignSystemProvider>
      <CopyToastVisibility.Provider
        value={{
          icon: toastIcon,
          setIcon: setToastIcon,
          isVisible: toastIsVisible,
          setIsVisible: setToastIsVisibleTimeout,
        }}
      >
        <Box>
          <DarkModeButton />
          <Hero />
          <Menu />
          <Container size="3" css={{ position: 'relative', marginBottom: 'calc(5vh + 25px)' }}>
            <Box
              css={{
                background: '$panel',
                marginBottom: '$5',
                borderRadius: '$2',
                minHeight: 900,
                boxShadow: darkMode.value ? '0 40px 250px -50px black' : '0 40px 250px -50px rgba(0, 0, 0, 0.4)',
                '@bp2': {
                  marginTop: 'calc(30vh + 240px)',
                },
                '@bp3': {
                  marginTop: 'calc(25vh + 260px)',
                },
              }}
            >
              <MainContent />
              <Section>
                <Box
                  css={{
                    '@media (max-width: 749px)': {
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    '@media (min-width: 750px)': {
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gridTemplateRows: 'auto 1fr',
                      columnGap: '$8',
                    },
                  }}
                >
                  <Box css={{ mb: '$5', gridColumn: '3 / 4' }}>
                    <Text as="h3" size="5" css={{ fontWeight: 500, letterSpacing: '-0.02em', lineHeight: '30px' }}>
                      Assets
                    </Text>
                    <Text
                      size="3"
                      css={{ display: 'flex', flexFlow: 'column', alignItems: 'start', mt: '$2', lineHeight: '25px' }}
                    >
                      <IconLink
                        href="https://www.figma.com/file/4ZD0Q8lAdv9Bcd7iiW6Cnk/%E2%AD%90-Icons?type=design&node-id=3-55&mode=design&t=CEkL5tWr72SrJuJp-0"
                        target="_blank"
                      >
                        <Box as="span" css={{ mr: '$2' }}>
                          <Apps />
                        </Box>
                        Open in Figma
                      </IconLink>
                      <IconLink href="https://www.npmjs.com/package/@ledgerHQ/react-icons" target="_blank">
                        <Box as="span" css={{ mr: '$2' }}>
                          <Apps />
                        </Box>
                        Install with npm
                      </IconLink>
                      <IconLink href="https://github.com/radix-ui/icons" target="_blank">
                        <Box as="span" css={{ mr: '$2' }}>
                          <Github />
                        </Box>
                        View on GitHub
                      </IconLink>
                    </Text>
                  </Box>
                </Box>
              </Section>
            </Box>
          </Container>
          <CopyToast />
        </Box>
      </CopyToastVisibility.Provider>
    </DesignSystemProvider>
  );
}

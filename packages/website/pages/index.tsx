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
            </Box>
          </Container>
          <CopyToast />
        </Box>
      </CopyToastVisibility.Provider>
    </DesignSystemProvider>
  );
}

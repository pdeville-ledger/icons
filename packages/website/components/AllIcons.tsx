import React from 'react';
import * as Icons from '@ledgerHq/react-icons';
import { Box, Grid, Text, Tooltip, styled } from '@modulz/design-system';
import { CopyToastVisibility } from './CopyToast';
import { ChromelessButton } from './ChromelessButton';

export const AllIcons = React.memo(() => {
  const iconNames = Object.keys(Icons);

  return (
    <Grid
      css={{
        padding: '0 $3 $2',
        marginTop: '-$2',

        '@bp1': {
          padding: '0 $6 $1',
          marginTop: 0,
        },
        '@media (min-width: 750px)': {
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '$8',
        },
      }}
    >
      <Box>
        <Label>All Icons</Label>
        <Group>
          {iconNames.map((iconName, index) => {
            const IconComponent = Icons[iconName];
            return (
              <CopyButton label={iconName} key={index}>
                {<IconComponent />}
                <Label>{iconName}</Label>
              </CopyButton>
            );
          })}
        </Group>
      </Box>
    </Grid>
  );
});

const Label = styled(
  Text,
  {
    marginTop: '$4',
    marginBottom: '$5',
    display: 'block',
    fontWeight: 500,
    lineHeight: '25px',
    letterSpacing: '-0.01em',
  },
  {
    defaultVariants: {
      size: 1,
    },
  }
);

const Group = styled(Box, {
  display: 'grid',
  justifyItems: 'center',
  justifyContent: 'space-between',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  flexWrap: 'wrap',
  margin: '$4 0 $6',
  padding: '0 $1',
  gap: '$6',
});

const GhostButton = styled(ChromelessButton, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '$3',
  margin: '-$3',
  borderRadius: '$1',
  '&:hover': {
    backgroundColor: '$mintA4',
  },
  '&:active, &:focus': {
    boxShadow: '0 0 0 2px $colors$mintA8',
  },
});

type CopyButtonProps = {
  children?: React.ReactNode;
  label: string;
};

const CopyButton = ({ children, label }: CopyButtonProps) => {
  return (
    <CopyToastVisibility.Consumer>
      {({ setIcon, setIsVisible }) => (
        <Tooltip content={label} side="top" sideOffset={5}>
          <GhostButton
            onClick={(event: React.MouseEvent) => {
              const svg = event.currentTarget.querySelector('svg');
              const code = svg && svg.parentElement ? svg.parentElement.innerHTML : null;

              // Copy code to clipboard via a hidden textarea element
              if (code) {
                // Temporary shim until a proper focus-visible handler is added
                if (document.activeElement instanceof HTMLButtonElement) {
                  document.activeElement.blur();
                }

                const textarea = document.createElement('textarea');
                textarea.value = code.toString();
                textarea.setAttribute('readonly', '');
                textarea.style.position = 'absolute';
                textarea.style.left = '-9999px';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);

                // Show CopyToast and set latest icon
                setIsVisible();
                setIcon(code);
              }
            }}
          >
            {children}
          </GhostButton>
        </Tooltip>
      )}
    </CopyToastVisibility.Consumer>
  );
};

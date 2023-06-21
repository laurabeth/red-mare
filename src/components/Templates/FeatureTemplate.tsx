import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import { animated, useTrail } from "@react-spring/web";

interface FeatureTemplateProps {
  copy: string[];
  interaction?: JSX.Element;
  title: string;
  subtitle?: string;
}

const AnimatedTypography = animated(Typography);

export const FeatureTemplate: FC<FeatureTemplateProps> = ({
  copy,
  interaction,
  title,
  subtitle,
}) => {
  const items = [title, subtitle, ...copy].filter((item) =>
    Boolean(item)
  ).length;
  const trail = useTrail(items, {
    config: { mass: 5, tension: 2000, friction: 300 },
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <Container>
      <AnimatedTypography
        variant="h1"
        my={12}
        textAlign="end"
        style={{ ...trail[0] }}
      >
        {title}
      </AnimatedTypography>
      {Boolean(subtitle) && (
        <AnimatedTypography
          variant="h3"
          my={2}
          textAlign="end"
          style={{ ...trail[1] }}
        >
          {subtitle}
        </AnimatedTypography>
      )}
      {copy.map((paragraph, i) => (
        <AnimatedTypography
          my={2}
          style={{ ...trail[items - copy.length + i] }}
        >
          {paragraph}
        </AnimatedTypography>
      ))}
      {Boolean(interaction) && <>{interaction}</>}
    </Container>
  );
};

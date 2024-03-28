import { FC } from "react";
import { Container, Typography } from "@mui/material";

interface FeatureTemplateProps {
  copy: string[];
  interaction?: JSX.Element;
  title: string;
  subtitle?: string;
}

export const FeatureTemplate: FC<FeatureTemplateProps> = ({
  copy,
  interaction,
  title,
  subtitle,
}) => {
  return (
    <Container>
      <Typography variant="h1" my={12} textAlign="end">
        {title}
      </Typography>
      {Boolean(subtitle) && (
        <Typography variant="h3" my={2} textAlign="end">
          {subtitle}
        </Typography>
      )}
      {copy.map((paragraph, i) => (
        <Typography my={2}>{paragraph}</Typography>
      ))}
      {Boolean(interaction) && <>{interaction}</>}
    </Container>
  );
};

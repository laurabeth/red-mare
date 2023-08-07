import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, useTheme } from "@mui/material";
import Link from "@mui/material/Link";

import { featureDictionary } from "../../resources/featureDictionary";
import { RedMare } from "../Svgs/RedMare";

export const SiteHeader: FC = () => {
  const { palette, spacing } = useTheme();

  return (
    <AppBar color="transparent" position="sticky">
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <Toolbar>
          <Link
            component={RouterLink}
            variant="h5"
            to="/"
            sx={{
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}>
            <RedMare height="60px" width="60px" fill={palette.secondary.main} />
          </Link>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
            }}>
            {Object.entries(featureDictionary).map(([title, path]) => (
              <Link
                key={path}
                component={RouterLink}
                to={path}
                sx={{
                  color: palette.primary.main,
                  fontFamily: "Roboto",
                  marginLeft: spacing(2),
                  marginRight: spacing(2),
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}>
                {title}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

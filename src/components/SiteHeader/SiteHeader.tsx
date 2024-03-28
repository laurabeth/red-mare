import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  useTheme,
} from "@mui/material";
import Link from "@mui/material/Link";
import { useColorModeContext } from "src/contexts/ColorMode/ColorModeContext";

import { RedMare } from "../Svgs/RedMare";

export const SiteHeader: FC = () => {
  const { data } = useQuery(USER_AUTH_QUERY);
  const { palette } = useTheme();
  const { toggleColorMode } = useColorModeContext();
  const authId = data?.currentUser?.auth.id;
  const adminId = import.meta.env.VITE_ADMIN_ID;

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
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <StyledLink path="/appraisals" title="Appraisals" />
            <StyledLink path="/coaching" title="Coaching" />
            {adminId && adminId === authId && (
              <StyledLink path="/sales-and-leasing" title="Sales & Leasing" />
            )}
            <StyledLink path="/training" title="Training" />
            <StyledLink path="/about-me" title="About" />
          </Box>
          <Button onClick={toggleColorMode}>theme</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const StyledLink: FC<{ path: string; title: string }> = ({ path, title }) => {
  const { palette, spacing } = useTheme();

  return (
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
  );
};

const USER_AUTH_QUERY = gql`
  query UserAuthQuery {
    currentUser {
      auth {
        id
      }
    }
  }
`;

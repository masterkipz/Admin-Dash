import {
  Container,
  Paper,
  TableContainer,
  TableRow,
  TableCell,
  Modal,
  Box,
  CardMedia,
  Typography,
} from "@mui/material";
import dictLogo from "../../Images/DICT-Logo-only.png";
import dictLogoWhite from "../../Images/DICT-Logo-White.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

function ViewModal(props) {
  const theme = createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            paddingTop: "5px",
            paddingBottom: "5px",
          },
          body: {
            paddingTop: "5px",
            paddingBottom: "5px",
          },
        },
      },
    },
  });

  return (
    <Container>
      <Modal open={props.viewModalOpen} onClose={props.handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "35%",
            width: "auto",
            minWidth: "750px",
            height: "auto",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: "10px",
            boxShadow: 24,
            p: 3,
            backgroundColor: "#1C4E80",
            "@media (max-width: 600px)": {
              height: "500px",
              width: "300px",
              minWidth: "200px",
            },
          }}
        >
          <Typography
            align="center"
            variant="h4"
            sx={{
              color: "#F1F1F1",
              fontWeight: "800",
              "@media (max-width: 600px)": { fontSize: "24px" },
            }}
          >
            PROPERTY INVENTORY DATA
          </Typography>
          <Box display="flex" justifyContent="space-evenly" marginTop="20px">
            <Box
              sx={{
                height: "150px",
                width: "150px",
                marginBottom: "20px",
                "@media (max-width: 600px)": {
                  display: "none",
                },
              }}
            >
              <CardMedia component="img" title="Image title" src={dictLogo} />
              <CardMedia
                component="img"
                title="Image title"
                src={dictLogoWhite}
              />
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#F1F1F1",
                }}
              >
                Tampering the data of this inventory is punishable by the law
              </Typography>
            </Box>
            <Box>
              <ThemeProvider theme={theme}>
                <TableContainer
                  component={Paper}
                  sx={{
                    backgroundColor: "#F1F1F1",
                    "@media (max-width: 600px)": {
                      width: "300px",
                      height: "auto",
                    },
                  }}
                >
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Property Number
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {props.selectedItem && props.selectedItem.property_num}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Asset Classification
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {props.selectedItem &&
                        props.selectedItem.asset_classification}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Item Brand
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {props.selectedItem && props.selectedItem.item}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Serial Number
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {props.selectedItem && props.selectedItem.serial_no}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Acquisition Cost
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {props.selectedItem &&
                        props.selectedItem.acquisition_cost}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Date Acquired
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {props.selectedItem && props.selectedItem.date_acquired}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Date Counted
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {props.selectedItem && props.selectedItem.date_counted}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Person Accountable
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {props.selectedItem &&
                        props.selectedItem.person_accountable}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontWeight: "600",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      Location
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#202020",
                        fontSize: "17px",
                        "@media (max-width:600px)": { fontSize: "14px" },
                      }}
                    >
                      {props.selectedItem && props.selectedItem.location}
                    </TableCell>
                  </TableRow>
                </TableContainer>
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}

export default ViewModal;

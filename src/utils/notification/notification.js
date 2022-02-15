import React from "react";
import Button from "@material-ui/core/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

// function MyApp(props) {
//   const { enqueueSnackbar } = useSnackbar();

//   const handleClick = () => {
//     enqueueSnackbar("I love snacks.");
//   };

//   const handleClickVariant = (variant) => () => {
//     // variant could be success, error, warning, info, or default
//     enqueueSnackbar("This is a success message!", { variant });
//   };

//   return (
//     <React.Fragment>
//       {/* <Button onClick={handleClickVariant("error")}>{props.text}</Button> */}
//       {handleClickVariant("error")()}
//     </React.Fragment>
//   );
// }

export default function IntegrationNotistack() {
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };
  return (
    <SnackbarProvider maxSnack={3}>
      {/* <MyApp /> */}
      {handleClickVariant("error")}
    </SnackbarProvider>
  );
}

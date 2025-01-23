import "expo-dev-client";
import "./global.css";

import { MicroAppRoot } from "@untr/core-navigation";
import { registerRootComponent } from "expo";
import { enableScreens } from "react-native-screens";

const contexts = [
  {
    context: require.context("./app", true, /.*/),
    prefix: ".",
  },
  {
    context: require.context(
      "../project_litemodule/app/(lite-module)/(tabs)",
      true,
      /.*/,
    ),
    prefix: "(lite-module)",
  },
  {
    context: require.context("../project_dca/app/(dca)", true, /.*/),
    prefix: "(dca)",
  },
  {
    context: require.context("../project_coip/app", true, /.*/),
    prefix: "(mobile-coip)",
  },
];

export function App() {
  enableScreens(false);

  return <MicroAppRoot contexts={contexts} />;
}

registerRootComponent(App);

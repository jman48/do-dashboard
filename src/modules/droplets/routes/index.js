import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";
import Info from "../containers/droplet";
import Settings from "../containers/settings";

export default createBottomTabNavigator(
  {
    Info: Info,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Info") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }

        return <Icon name={iconName} style={{ color: "#136EFB" }} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#136EFB",
      inactiveTintColor: "gray"
    }
  }
);

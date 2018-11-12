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
        const style = focused ? "#136EFB" : "gray";
        let iconName;

        if (routeName === "Info") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }

        return <Icon name={iconName} style={{ color: style }} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#136EFB",
      inactiveTintColor: "gray",
      safeAreaInset: { bottom: "never" },
      style: {
        paddingTop: 5
      }
    }
  }
);

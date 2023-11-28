import { Stack } from "expo-router";

const Layout = () => {
    return <Stack
        screenOptions={{
            headerStyle: {
                backgroundColor: "#fff",
            },
            headerShadowVisible: false,
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        }}
    />
}

export default Layout;
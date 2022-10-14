import { useSx, View } from 'dripsy';
import { useState } from 'react';

import { Alert } from 'react-native';
import LoginWithAuthStrapi from 'react-native-strapi-auth-providers';
//
export default function OAuth() {
    const [token, setToken] = useState('');
    const [open, setOpen] = useState(true);
    const sx = useSx()
    return (
        <View sx={{}}>
            <LoginWithAuthStrapi
                isVisisble={open}
                provider="github"
                lang="pt-BR"
                backendUrl="http://localhost:1337"
                redirectUrl="https://www.myredirectpage.com/redirect"
                onCancel={() => {
                    setOpen(false);
                }}
                onSuccess={(token) => {
                    Alert.alert(`success ${token?.jwt}`);
                    setToken(token.jwt);
                    setOpen(false);
                }}
                onError={(m) => {
                    Alert.alert(`error ${m}`);
                }}
            />
        </View>
    );
}

// ...
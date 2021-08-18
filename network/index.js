// import AsyncStorage from '@react-native-community/async-storage';
// import SimpleToast from 'react-native-simple-toast';
// import { fetch } from 'react-native-ssl-pinning';
// import RNRestart from 'react-native-restart';

// import { fetch } from 'react-native-pinch';
import { Alert, Platform } from "react-native";
import * as NetInfo from '@react-native-community/netinfo';

export const baseurl = "http://bikerz.ddns.net/api"

export async function get(url) {
    await fetch(baseurl + url, {
        method: "GET",
        headers: {
            Accept: "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*", "e_platform": "mobile",
            "x-access-token": global.token
        }
    })
        .then((response) => response.json().then(res => data = res))
        .catch(err => {
            data = err
        })
    rlog(url, "", data)
    return data
}

export async function post(url, data) {
    const req = data
    isConnected()
    await fetch(baseurl + url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*", "e_platform": "mobile",
            'Content-Type': 'application/json',
            "x-access-token": global.token
        }
    })
        // .then((response) => response.json().then(res => data = res))
        .then((response) => response.json().then(res => data = res))
        .catch(err => {
            data = err
        })
    rlog(url, req, data)
    return data
}

export async function upload(url, data) {
    const req = data
    isConnected()
    await fetch(baseurl + url, {
        method: "POST",
        body: data,
    })
        .then(async response => {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                console.log("6")
                await response.json().then(res => {
                    console.log("7")
                    data = res
                });
            } else {
                console.log("8")
                await response.text().then(res => {
                    console.log("9")
                    data = res
                });
            }
        })
        // .then((response) => response.json().then(res => data = res))
        .catch(err => {
            console.log("10")
            data = err
        })
    rlog(url, req, data)
    return data
}

export async function patch(url, data) {
    const req = data
    await fetch(baseurl + url, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*", "e_platform": "mobile",
            'Content-Type': 'application/json',
            "x-access-token": global.token
        }
    })
        .then((response) => response.json().then(res => data = res))
        .catch(err => {
            data = err
        })
    rlog(url, req, data)
    return data
}

export async function remove(url) {
    delete
        await fetch(baseurl + url, {
            method: "DELETE",
            headers: {
                Accept: "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*", "e_platform": "mobile",
                "x-access-token": global.token
            }
        })
            .then((response) => response.json().then(res => data = res))
            .catch(err => {
                data = err
            })
    rlog(url, "", data)
    return data
}


function nlog(msg) {
    console.log(msg)
}

function rlog(url, req, res) {
    try {
        const rep = {
            "URL": baseurl + url,
            "Token": global.token,
            "Request Body": JSON.stringify(req),
            "Response": JSON.stringify(res),
        }
        if (url != "api/auth/updateLocation") {
            nlog(rep)
        }
    } catch (ee) {
        nlog(ee)
    }

}

function isConnected() {
    console.log("Checking connection...")
    NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
    });
    /* 
        if (Platform.OS === "android") {
            NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    return true
                } else {
                    Alert.alert("You are offline!");
                    return false
                }
            });
        } else {
            // For iOS devices
            NetInfo.isConnected.addEventListener(
                "connectionChange",
                this.handleFirstConnectivityChange
            );
        }
        handleFirstConnectivityChange = isConnected => {
            NetInfo.isConnected.removeEventListener(
                "connectionChange",
                this.handleFirstConnectivityChange
            );
    
            if (isConnected === false) {
                Alert.alert("You are offline!");
            } else {
                // Alert.alert("You are online!");
            }
        }; */
}
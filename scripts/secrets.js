import { OTP } from "otplib";
import NodeCryptoPlugin from "@otplib/plugin-crypto-node";

const otp = new OTP({ crypto: NodeCryptoPlugin });
const secret = otp.generateSecret();
const token = await otp.generate({ secret });

const uri = otp.generateURI({
    issuer: "Graphikardia",
    label: "admin@graphikardia.com",
    secret,
});


console.log("------------ generated secrets ------------")
console.log(`Secret: ${secret}`)
console.log(`Token: ${token}`)
console.log(`URI: ${uri}`)
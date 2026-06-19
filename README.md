Wrestle Mobile

A lightweight starter for a wrestling game mobile app (Expo + React Native + TypeScript).

Getting started

1. Install dependencies:

```bash
cd wrestle-mobile
npm install
# or
yarn
```

2. Run the app (Expo):

```bash
npx expo start
```

Next steps:
- Implement game systems in `src/`.
- Add assets to `assets/`.
- Create a GitHub repo and push the initial commit.

iOS-specific notes

- This project targets iOS. To run and build for iOS:

	- Run in the iOS simulator (macOS):

```bash
npx expo start
# then press "i" in the Expo CLI to open the iOS simulator
```

	- Run on a physical device: install `Expo Go` from the App Store and scan the QR code shown by `npx expo start`.

	- Building a signed IPA for App Store distribution: use `eas build` (Expo Application Services). Basic flow:

```bash
# install EAS CLI
npm install -g eas-cli
eas login
eas build --platform ios
```

	- Building with EAS requires an Apple Developer account for credentials and signing. See https://docs.expo.dev/build-reference/eas-build/ for setup.

Notes:
- `app.json` is preconfigured for iOS with `bundleIdentifier: com.anwarmai.wrestlemobile` — change this to your reverse-domain identifier.
- If you plan to support Android later, remove `platforms: ["ios"]` or add `android` config.

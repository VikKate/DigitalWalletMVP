
# DigitalWallet
The application allows user to manage income and expenses on the cards.

# Quick start
1) Open the project directory
  
    ```
    $ cd path/to/project/DigitalWallet
    ```

2) Install project dependencies

    ```
    $ yarn install
    ```

## IOS

3) Install pods

    ```
    $ pod install --project-directory=ios
    ```

4) Run project on simulator ([docs](https://reactnative.dev/docs/running-on-simulator-ios))

    ```
    $ yarn ios
    ```
   or   
   - open project with Xcode (DigitalWallet/ios/DigitalWallet.xcworkspace)
   - select simulator and press Run button

## ANDROID

5) Add `android/local.properties` file with path to the Android Studio SDK location

    >sdk.dir=/Users/USERNAME/Library/Android/sdk

6) Run project on emulator:

	  ```
    $ yarn android
    ```
   or   
   - open project with Android Studio (DigitalWallet/android)
   - select or create emulator and press Run button





To run app on the real device use [this](https://reactnative.dev/docs/running-on-device) instruction.

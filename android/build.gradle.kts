plugins {
    id("com.android.application") version "8.1.2"
    id("org.jetbrains.kotlin.android") version "1.7.10"
}

android {
    namespace = "com.example.fakejudgeapp" // 패키지 이름
    compileSdk = 34 // 사용 중인 SDK 버전으로 변경

    defaultConfig {
        applicationId = "com.example.fakejudgeapp"
        minSdk = 21 // 최소 SDK 버전
        targetSdk = 34 // 타겟 SDK 버전
        versionCode = 1
        versionName = "1.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
}

dependencies {
    implementation("com.facebook.react:react-native:0.72.0")
    implementation("com.facebook.react:react-android:0.72.0") // React Native
    implementation("androidx.core:core-ktx:1.9.0") // AndroidX
    implementation("com.squareup.okhttp3:okhttp:4.10.0") // OkHttp
}
pluginManagement {
    repositories {
        google()
        mavenCentral()
        //maven { url = uri("https://jitpack.io") } // JitPack (필요한 경우 추가)
        //gradlePluginPortal()
    }
    // Gradle Plugin 의존성 추가
    plugins {
        id("com.gradle.develocity-gradle-plugin") version "3.19"
    }
}

dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven { url = uri("https://maven.pkg.github.com/facebook/react-native") }
    }
}

rootProject.name = "FakeJudgeApp"
include(":app")
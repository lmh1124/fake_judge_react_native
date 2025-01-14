package com.example.fakejudgeapp

import com.facebook.react.ReactActivity
import com.facebook.soloader.SoLoader
import android.os.Bundle

class MainActivity : ReactActivity() {

    override fun getMainComponentName(): String? {
        return "fakejudgeapp"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        SoLoader.init(this, /* native exopackage */ false)
    }
}